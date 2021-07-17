import { registerHtml, useStore } from 'tram-one'
import decrementIcon from './decrement-icon'
import die from './die'
import flipIcon from './flip-icon'
import incrementIcon from './increment-icon'
import rollIcon from './roll-icon'

const html = registerHtml({
	'die': die,
	'flip-icon': flipIcon,
	'roll-icon': rollIcon,
	'increment-icon': incrementIcon,
	'decrement-icon': decrementIcon
})

export default ({ defaultValue }) => {
	const die = useStore({ value: defaultValue })

	const increment = () => { if (die.value != 6) die.value++ }
	const decrement = () => { if (die.value != 1) die.value-- }
	const flip = () => { die.value = 7 - (die.value) }
	const roll = () => { die.value = Math.ceil(Math.random()*6) }

	return html`
		<section class="die-row">
			<die value=${die.value} />
			<button onclick=${increment}><increment-icon /></button>
			<button onclick=${decrement}><decrement-icon /></button>
			<button onclick=${flip}><flip-icon /></button>
			<button onclick=${roll}><roll-icon /></button>
		</section>
	`
}
