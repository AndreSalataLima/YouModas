
// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")
// require("jquery")
// require("bootstrap")
require("util")
import { initSmoothScroll } from "./plugins/smoothScroll"
import { initNavShow } from "./plugins/initNavShow"

<<<<<<< HEAD
=======
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
// require("@fortawesome/fontawesome-free")

import "bootstrap"
// import "jquery3"
// import "popper"
// import "bootstrap-sprockets"
// Use sprockets for inidividual bootstrap components for easy debugging
// import "controllers"
// import "channels"

// initSmoothScroll();
Rails.start()
Turbolinks.start()
ActiveStorage.start()
>>>>>>> 5d5a8134f7bfe4a82f01c2a6ed5558575b65a2da

document.addEventListener('turbolinks:load', () => {

});
