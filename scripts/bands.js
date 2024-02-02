import { getBands, getBookings, getVenues } from "./database.js";

export const bandsList = () => {
    const bands = getBands()

    // Initializes string of HTML to return
    let bandsHTML = "<ul>"

    // Iterate through all bands
    for (const band of bands) {
        
        // Generate the HTML for the band item
        bandsHTML += `<li data-type="band"
                            data-id="${band.id}">
                            ${band.name}
                        </li>`
    }

    // Finish the string of HTML to return
    bandsHTML += "</ul>"

    return bandsHTML
}


document.addEventListener("click", (clickEvent) => {
    const eventTarget = clickEvent.target

    if (eventTarget.dataset.type === "band") {
        const bandId = parseInt(eventTarget.dataset.id)

        const bookings = getBookings()
        const venues = getVenues()
        const venueNames = []

        for (const booking of bookings) {
            if (booking.bandId === bandId) {
                for (const venue of venues) {
                    if (venue.id === booking.venueId && venueNames.includes(venue.name) === false) {
                        venueNames.push(venue.name)
                    }
                }
            }
        }

        const venueNamesString = venueNames.join(", ")

        window.alert(`They are playing at the following venues: ${venueNamesString}`)
    }
})