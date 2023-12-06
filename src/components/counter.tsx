"use client";

import { css } from "@panda/css";
import { grid } from "@panda/patterns";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div
			className={grid({
				gridTemplateColumns: "2",
				w: "xs",
			})}
		>
			<p
				className={css({
					fontSize: "2xl",
					fontWeight: "bold",
					color: "white",
					gridColumn: "2",
					mx: "auto",
				})}
			>
				Count: {count}
			</p>
			<button
				className={css({
					color: {
						base: "green.300",
						_hover: "gray.900",
					},
					fontSize: "2xl",
					fontWeight: "bold",
					background: {
						base: "transparent",
						_hover: "green.400",
						_active: "green.500",
					},
					border: "1px solid",
					borderColor: "green.300",
					rounded: "xs",
					cursor: "pointer",
					transition: "all 0.1s ease-in-out",
					gridColumn: "1 / 2",
				})}
				onClick={() => setCount(count + 1)}
				type={"button"}
			>
				+
			</button>
			<button
				className={css({
					color: {
						base: "green.300",
						_hover: "gray.900",
					},
					fontSize: "2xl",
					fontWeight: "bold",
					background: {
						base: "transparent",
						_hover: "green.400",
						_active: "green.500",
					},
					border: "1px solid",
					borderColor: "green.300",
					rounded: "xs",
					cursor: "pointer",
					transition: "all 0.1s ease-in-out",
					gridColumn: "2 / 2",
				})}
				onClick={() => setCount(count - 1)}
				type={"button"}
			>
				-
			</button>
		</div>
	);
}
