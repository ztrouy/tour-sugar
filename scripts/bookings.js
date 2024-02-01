import { getBookings, getBands, getVenues } from "./database.js";

export const bookingsList = () => {
    const bookings = getBookings()
    
    // Initialize string of HTML to return
    let bookingsHTML = "<ul>"

    for (const booking of bookings) {
        
        // Get date of the booking
        const bookingDate = booking.date

        // Get name of the band
        const bands = getBands()
        let bandName = ""
        for (const band of bands) {
            if (booking.bandId === band.id) {
                bandName = band.name
            }
        }

        // Get name of the venue
        const venues = getVenues()
        let venueName = ""
        for (const venue of venues) {
            if (booking.venueId === venue.id) {
                venueName = venue.name
            }
        }

        // Generate HTML for booking item
        bookingsHTML += `<li data-type="booking"
                                date-id="${booking.id}">
                                ${bandName} are playing at ${venueName} on ${bookingDate}
                        </li>`
    }

    // Finish string of HTML to return
    bookingsHTML += "</ul>"

    return bookingsHTML
}