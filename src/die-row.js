import { registerHtml } from 'tram-one'
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

export default (props, children) => {
	return html`
		<section class="die-row">
			<die value=${props.value} />
			<button onclick=${props.increment}><increment-icon /></button>
			<button onclick=${props.decrement}><decrement-icon /></button>
			<button onclick=${props.flip}><flip-icon /></button>
			<button onclick=${props.roll}><roll-icon /></button>
		</section>
	`
}
