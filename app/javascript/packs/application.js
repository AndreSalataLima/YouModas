
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")



// import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
// import * as ActiveStorage from "@rails/activestorage"
// require("@fortawesome/fontawesome-free")

// import "bootstrap"
// import "jquery3"
// import "popper"
// import "bootstrap-sprockets"
// Use sprockets for inidividual bootstrap components for easy debugging
// import "controllers"
// import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener('turbolinks:load', () => {

});

// Configure Stimulus development experience
// application.debug = false
// window.Stimulus   = application

// export { application }
