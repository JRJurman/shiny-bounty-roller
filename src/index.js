import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useEffect, useStore } from 'tram-one'
import AppHeader from './app-header'
import DieRow from './die-row'
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
})

const home = () => {
	const defaultDice = useStore([
		6,
		6,
		6
	])

	const reroll = () => {
		defaultDice[0] = Math.ceil(Math.random()*6)
		defaultDice[1] = Math.ceil(Math.random()*6)
		defaultDice[2] = Math.ceil(Math.random()*6)
	}

	useEffect(() => {
		reroll()
	})

	return html`
		<main>
			<app-header>
				Shiny Bounty Roller
				<button onclick=${reroll}><roll-icon /></button>
			</app-header>
			<die-row defaultValue=${defaultDice[0]} />
			<die-row defaultValue=${defaultDice[1]} />
			<die-row defaultValue=${defaultDice[2]} />
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
