
FROM node:20.4.0-bookworm-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Setting up Tor
RUN apt update
RUN apt install -y tor
COPY ./tor/torrc /etc/tor/torrc
COPY ./tor/hidden_service /app/tor/hidden_service

# Installing pnpm
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Building Next.js
FROM deps AS build
COPY . /app

RUN pnpm build

FROM deps AS prod
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/public /app/public
COPY --from=build /app/.next /app/.next
COPY --from=build /app/next.config.js /app

RUN chmod 700 /app/tor/hidden_service

CMD tor & pnpm start

# For development
FROM deps AS dev

COPY next.config.js /app
COPY tsconfig.json /app

RUN chmod 700 /app/tor/hidden_service

CMD tor & pnpm dev
