import * as react from 'react';
import { useStore } from "../hooks/useStore";
import { KeyBoard } from "../hooks/KeyBoard";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../images/images';

const images = { dirt: dirtImg, grass: grassImg, glass: glassImg, wood: woodImg, log: logImg };

export const TextureSelector = () => {
	const [visible, setVisible] = react.useState(false);
	const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);
	const { dirt, grass, glass, wood, log } = KeyBoard();

	react.useEffect(() => {
		const textures = { dirt, grass, glass, wood, log };
		const pressedTexture = Object.entries(textures).find(([k, v]) => v);
		if (pressedTexture) {
			setTexture(pressedTexture[0]);
		}
	}, [setTexture, dirt, grass, glass, wood, log]);



	react.useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false)
		}, 2000);
		setVisible(true)
		return () => {
			clearTimeout(visibilityTimeout)
		}
	}, [activeTexture]);

	return visible && (
		<div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
		</div>
	);
};