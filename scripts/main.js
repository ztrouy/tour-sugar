import { bookingsList } from "./bookings.js"

const bookingHTML = document.querySelector("#booking-list")
bookingHTML.innerHTML = bookingsList()