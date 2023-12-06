import Counter from "@/components/counter";
import { css } from "@panda/css";
import { center, vstack } from "@panda/patterns";

export default function Home() {
	return (
		<main
			className={center({
				bg: "gray.900",
				height: "100vh",
				pb: "16",
			})}
		>
			<div
				className={vstack({
					my: "auto",
					gap: "8"
				})}
			>
				<p
					className={css({
						color: "transparent",
						bg: "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red, violet, indigo, blue, green, yellow, orange, red, violet);",
						bgClip: "text",
						textTransform: "uppercase",
						fontSize: {
							base: "4xl",
							md: "5xl",
							lg: "6xl",
						},
						fontWeight: "extrabold",
						backgroundSize: "200% auto",
						animation: "rainbow-bg 3s linear infinite",
						px: "8",
					})}
				>
					Welcome to Underground
				</p>


				<Counter />

				<a href="https://zenn.dev/platina/articles/884ddadda3cf3a">
					<p className={css({
						color: "green.300",
						fontSize: "2xl",
						textDecoration: "underline",
					})}>
						参照: Next.js ウェブサイトを Docker を使って Tor に公開してみる
					</p>
				</a>
			</div>
		</main>
	);
}
