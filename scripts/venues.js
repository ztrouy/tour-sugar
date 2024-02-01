import { getVenues } from "./database.js";

export const venuesList = () => {
    const venues = getVenues()

    // Initializes string of HTML to return
    let venuesHTML = "<ul>"

    // Iterate through all venues
    for (const venue of venues) {
        
        // Generate the HTML for the venue item
        venuesHTML += `<li>${venue.name}</li>`
    }

    // Finish string of HTML to return
    venuesHTML += "</ul>"

    return venuesHTML
}