// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "custom/homeCarousel"
import "custom/navLink"
import "custom/gridBanner"
import "custom/productSlide"
import "custom/initFilterCategories.js"
import { Turbo } from "@hotwired/turbo-rails"


Turbo.session.drive = false;
