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