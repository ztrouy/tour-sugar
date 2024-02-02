import { getVenues, getBands, getBookings } from "./database.js";

export const venuesList = () => {
    const venues = getVenues()

    // Initializes string of HTML to return
    let venuesHTML = "<ul>"

    // Iterate through all venues
    for (const venue of venues) {
        
        // Generate the HTML for the venue item
        venuesHTML += `<li data-type="venue"
                            data-id="${venue.id}">
                            ${venue.name}
                        </li>`
    }

    // Finish string of HTML to return
    venuesHTML += "</ul>"

    return venuesHTML
}


document.addEventListener("click", (clickEvent) => {
    const eventTarget = clickEvent.target

    if (eventTarget.dataset.type === "venue") {
        const venueId = parseInt(eventTarget.dataset.id)

        const bookings = getBookings()
        const bands = getBands()
        const bandNames = []

        for (const booking of bookings) {
            if (booking.venueId === venueId) {
                for (const band of bands) {
                    if (booking.bandId === band.id && bandNames.includes(band.name) === false) {
                        bandNames.push(band.name)
                    }
                }
            }
        }

        const bandNamesString = bandNames.join(", ")

        window.alert(`The following bands will be playing here: ${bandNamesString}`)
    }
})