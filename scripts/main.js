import { bookingsList } from "./bookings.js"
import { venuesList } from "./venues.js"

const bookingHTML = document.querySelector("#booking-list")
bookingHTML.innerHTML = bookingsList()

const venueHTML = document.querySelector("venue-list")
venueHTML.innerHTML = venuesList()