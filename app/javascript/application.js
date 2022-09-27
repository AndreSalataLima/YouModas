import { Application } from "@hotwired/stimulus"

import "bootstrap"
import "jquery3"
import "popper"
// import "bootstrap-sprockets"
// Use sprockets for inidividual bootstrap components for easy debugging

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
