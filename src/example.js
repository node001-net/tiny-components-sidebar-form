import * as riot from 'riot'

// tiny sidebar
import TinySidebarForm from './sidebarForm.riot'
riot.register('tiny-sidebar-form', TinySidebarForm)

import ExampleSidebarForm from './exampleSidebarForm.riot'

riot.register('example-sidebar-form', ExampleSidebarForm)
riot.mount('example-sidebar-form')

import ExampleButton from './exampleButton.riot'

riot.register('example-button', ExampleButton)
riot.mount('example-button')