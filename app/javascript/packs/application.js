
// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")
// require("jquery")
// require("bootstrap")
require("util")
import { initSmoothScroll } from "./plugins/smoothScroll"
import { initNavShow } from "./plugins/initNavShow"
import { initSlideGallery } from "./plugins/initSlideGallery"
import { initSlides } from "./plugins/initSlides"
import { initCarouselHome } from "./plugins/initCarouselHome"
import { CarouselTest } from "./plugins/carouselTest"
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

document.addEventListener('turbolinks:load', () => {

});


// https://mlens.musings.it/
// plugin jquery para adicionar lupa de zoom nas imagens dos produtos
// precisa verificar o jquery se esta ativo, e se o pluggin estao funcionando bem


// to do:
// get the seeds implementation by Andre and start to do the final homepage.
