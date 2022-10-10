import * as react from "react";

function actionByKey(key) {
	const keyActionMap = {
		KeyW: 'moveForward',
		KeyS: 'moveBackward',
		KeyA: 'moveLeft',
		KeyD: 'moveRight',
		Space: 'jump',
		Digit1: 'dirt',
		Digit2: 'grass',
		Digit3: 'glass',
		Digit4: 'wood',
		Digit5: 'log',
	}
	return keyActionMap[key]
}

export const KeyBoard = () => {
	const [actions, setActions] = react.useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		dirt: false,
		grass: false,
		glass: false,
		wood: false,
		log: false,
	})

	const handleKeyDown = react.useCallback((e) => {
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: true
				})
			})
		}
	}, [])

	const handleKeyUp = react.useCallback((e) => {
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: false
				})
			})
		}
	}, [])

	react.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyDown, handleKeyUp])

	return actions;
};