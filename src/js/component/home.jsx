import React, { useState, useEffect } from "react";
import Musicplayer from "./musicplayer.jsx";

const URL = "https://assets.breatheco.de/apis/sound/songs";

const Home = () => {
	const [sounds, setSounds] = useState([]);
	const [soundsComponents, setSoundsComponents] = useState([]);

	useEffect(() => {
		fetch(URL)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Fail");
			})
			.then(responseAsJSON => {
				setSounds(responseAsJSON);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		if (sounds) {
			setSoundsComponents(
				sounds.map((sound, index) => {
					return (
						<Musicplayer name={sound.name} key={index.toString()} />
					);
				})
			);
		}
	}, [sounds]);

	return (
		<div>
			<ul>{soundsComponents}</ul>
			<audio></audio>
		</div>
	);
};

export default Home;
