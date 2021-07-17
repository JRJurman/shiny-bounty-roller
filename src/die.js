import { registerSvg } from 'tram-one'

/**
 * Code from https://github.com/chtinahow/dice-renderer/
 */

const svg = registerSvg()

export default (props, children) => {
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

	return svg`
		<svg class="die ${selectedClassName}" viewBox="0 0 100 100" width="100px" height="100px" onclick=${props.selectDice}>
			<g>
				${pips}
			</g>
		</svg>
	`
}
