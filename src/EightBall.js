import React, { useState } from "react";
import { choice } from "./helpers";
import "./EightBall.css";
const EightBall = ({ answers }) => {
	const [message, setMessage] = useState("Think of a Question");
	const [color, setColor] = useState("white");

	const shuffleBall = () => {
		const answer = choice(answers);
		setMessage(answer.msg);
		setColor(answer.color);
	};

	const resetBall = () => {
		setMessage("Think of a Question");
		setColor("white");
	};

	return (
		<>
			<div
				className="EightBall"
				style={{ backgroundColor: color }}
				onClick={shuffleBall}
			>
				<div className="EightBall-message">{message}</div>
			</div>
			<button
				className="EightBall-reset"
				onClick={resetBall}
				style={{ visibility: color === "white" ? "hidden" : "visible" }}
			>
				Reset
			</button>
		</>
	);
};

export default EightBall;
