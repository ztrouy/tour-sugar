import { bookingsList } from "./bookings.js"
import { venuesList } from "./venues.js"
import { bandsList } from "./bands.js"

const bookingHTML = document.querySelector("#booking-list")
bookingHTML.innerHTML = bookingsList()

const venueHTML = document.querySelector("#venue-list")
venueHTML.innerHTML = venuesList()

const bandHTML = document.querySelector("#band-list")
bandHTML.innerHTML = bandsList()