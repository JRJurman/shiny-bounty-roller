import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useStore } from 'tram-one'
import AppHeader from './app-header'
import decrementIcon from './decrement-icon'
import DieRow from './die-row'
import flipIcon from './flip-icon'
import incrementIcon from './increment-icon'
import rollIcon from './roll-icon'
import './styles.css'

/**
 * The entry point of the app, and where we mount the app on the DOM.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml({
	'app-header': AppHeader,
	'die-row': DieRow,
	'roll-icon': rollIcon,
	'flip-icon': flipIcon,
	'increment-icon': incrementIcon,
	'decrement-icon': decrementIcon
})

const home = () => {
	const dice = useStore([
		null,
		null,
		null
	])

	const onRoll = () => {
		dice[0] = Math.ceil(Math.random()*6)
		dice[1] = Math.ceil(Math.random()*6)
		dice[2] = Math.ceil(Math.random()*6)
	}

	const dieRows = dice.map((die, index) => {
		if (die === null) return ''
		const increment = () => { if (die != 6) dice[index]++ }
		const decrement = () => { if (die != 1) dice[index]-- }
		const flip = () => { dice[index] = 7 - (dice[index]) }
		const roll = () => { dice[index] = Math.ceil(Math.random()*6) }
		return html`<die-row value=${die} ${{increment, decrement, flip, roll}} />`
	})

	return html`
		<main>
			<app-header>
				shiny-bounty-roller
				<button onclick=${onRoll}><roll-icon /></button>
			</app-header>
			${dieRows}
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
