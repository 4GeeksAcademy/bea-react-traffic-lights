import React, { useState } from "react";

const TrafficLight = () => {

	const [color, setColor] = useState("");

	const handleClick = (selectedColor) => {
		color === "selectedColor" 
		? setColor("") 
		: setColor(selectedColor)
	};

	return <>
		<div className="trafficLightContainer pt-3 mt-4">
			<div className={`red mb-2 ${color === "red" ? "selectedColor" : ""}`} onClick={() => handleClick("red")}></div>
			<div className={`yellow mb-2 ${color === "yellow" ? "selectedColor" : ""}`} onClick={() => handleClick("yellow")}></div>
			<div className={`green mb-2 ${color === "green" ? "selectedColor" : ""}`} onClick={() => handleClick("green")}></div>
		</div>
	</>
};

export { TrafficLight };
