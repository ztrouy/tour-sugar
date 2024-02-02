import { bookingsList } from "./bookings.js"
import { venuesList } from "./venues.js"
import { bandsList } from "./bands.js"

// const bookingHTML = document.querySelector("#booking-list")
// bookingHTML.innerHTML = bookingsList()

// const venueHTML = document.querySelector("#venue-list")
// venueHTML.innerHTML = venuesList()

// const bandHTML = document.querySelector("#band-list")
// bandHTML.innerHTML = bandsList()

const contaierHTML = document.querySelector("#container")
contaierHTML.innerHTML = `
<div id="upper-row">
    <article id="booking-list" class="list">${bookingsList()}</article>
</div>
<div id="lower-row">
    <article id="venue-list" class="list">${venuesList()}</article>
    <article id="band-list" class="list">${bandsList()}</article>
</div>`