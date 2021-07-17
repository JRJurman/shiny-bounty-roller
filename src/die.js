import { registerSvg, useEffect, useStore } from 'tram-one'

/**
 * Code from https://github.com/chtinahow/dice-renderer/
 */

const svg = registerSvg()

export default (props, children) => {
	// start dice tilted left
	const tilt = useStore({direction: 'left'})

	const valueToPoints = {
		"1": [{ x: 50, y: 50 }],
		"2": [{ x: 25, y: 25 }, { x: 75, y: 75 }],
		"3": [{ x: 25, y: 25 }, { x: 50, y: 50 }, { x: 75, y: 75 }],
		"4": [{ x: 25, y: 25 }, { x: 75, y: 75 }, { x: 25, y: 75 }, { x: 75, y: 25 }],
		"5": [{ x: 25, y: 25 }, { x: 75, y: 75 }, { x: 25, y: 75 }, { x: 75, y: 25 }, { x: 50, y: 50 }],
		"6": [{ x: 25, y: 25 }, { x: 75, y: 75 }, { x: 25, y: 75 }, { x: 75, y: 25 }, { x: 75, y: 50 }, {
			x: 25, y: 50
		}]
	}
	const points = valueToPoints[props.value]
	const pips = points.map(point => svg`<circle fill="black" cx=${point.x} cy=${point.y} r="12"></circle>`)
	const selectedClassName = props.selected ? 'selected' : ''

	useEffect(() => {
		// tilt right, then left, then normal
		setTimeout(() => {
			tilt.direction = 'tilt-right'
			console.log('tilt right')
		}, 200)

		setTimeout(() => {
			tilt.direction = 'tilt-left'
			console.log('tilt left')
		}, 400)

		setTimeout(() => {
			tilt.direction = 'tilt-right'
			console.log('tilt right')
		}, 600)

		setTimeout(() => {
			tilt.direction = 'tilt-left'
			console.log('tilt left')
		}, 800)

		setTimeout(() => {
			tilt.direction = ''
			console.log('tilt normal')
		}, 1000)
	})

	return svg`
		<svg class="die ${selectedClassName} ${tilt.direction}" viewBox="0 0 100 100" width="100px" height="100px" onclick=${props.selectDice}>
			<g>
				${pips}
			</g>
		</svg>
	`
}
