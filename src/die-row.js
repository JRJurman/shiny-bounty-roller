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

	const renderTime = useStore({ value: (new Date()).getTime() })

	const increment = () => {
		if (die.value != 6) die.value++
		renderTime.value = (new Date()).getTime()
	}
	const decrement = () => {
		if (die.value != 1) die.value--
		renderTime.value = (new Date()).getTime()
	}
	const flip = () => {
		die.value = 7 - (die.value)
		renderTime.value = (new Date()).getTime()
	}
	const roll = () => {
		die.value = Math.ceil(Math.random()*6)
		renderTime.value = (new Date()).getTime()
	}

	return html`
		<section class="die-row" renderTime=${renderTime.value}>
			<die value=${die.value} />
			<button onclick=${increment}><increment-icon /></button>
			<button onclick=${decrement}><decrement-icon /></button>
			<button onclick=${flip}><flip-icon /></button>
			<button onclick=${roll}><roll-icon /></button>
		</section>
	`
}
