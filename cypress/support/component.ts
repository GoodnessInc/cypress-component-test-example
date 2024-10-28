// Import commands.js using ES2015 syntax:
import './commands'

// Add tailwind
import './component.css'

// Augment the Cypress namespace to include type definitions for
// your custom command.
import { mount } from "cypress/react18";
declare global {
	namespace Cypress {
		interface Chainable {
			mount: typeof mount;
		}
	}
}
Cypress.Commands.add('mount', mount)
