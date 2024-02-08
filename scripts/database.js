const database = {
    venues: [
        { 
            id: 1, 
            name: 'The Blue Note', 
            address: '17 N 9th St, Memphis, TN 38103', 
            squareFootage: 3000, 
            maxOccupancy: 500 
        },
        { 
            id: 2, 
            name: 'The Hi-Tone', 
            address: '412 N Cleveland St, Memphis, TN 38104', 
            squareFootage: 2500, 
            maxOccupancy: 400 
        },
        { 
            id: 3, 
            name: 'Minglewood Hall', 
            address: '1555 Madison Ave, Memphis, TN 38104', 
            squareFootage: 20000, 
            maxOccupancy: 1500 
        },
        { 
            id: 4, 
            name: 'Growlers', 
            address: '1911 Poplar Ave, Memphis, TN 38104', 
            squareFootage: 4000, 
            maxOccupancy: 600 
        },
        { 
            id: 5, 
            name: 'Lafayette\'s Music Room', 
            address: '2119 Madison Ave, Memphis, TN 38104', 
            squareFootage: 5000, 
            maxOccupancy: 700 
        }
    ],
    bands: [
        { 
            id: 1, 
            name: 'The Rolling Stones', 
            genre: 1, 
            formationYear: '1962' 
        },
        { 
            id: 2, 
            name: 'Coldplay', 
            genre: 2, 
            formationYear: '1996' 
        },
        { 
            id: 3, 
            name: 'Miles Davis Quintet', 
            genre: 3, 
            formationYear: '1955' 
        },
        { 
            id: 4, 
            name: 'B.B. King', 
            genre: 4, 
            formationYear: '1948' 
        },
        { 
            id: 5, 
            name: 'Taylor Swift', 
            genre: 5, 
            formationYear: '2006' 
        },
        { 
            id: 6, 
            name: 'U2', 
            genre: 1, 
            formationYear: '1976' 
        },
        { 
            id: 7, 
            name: 'Maroon 5', 
            genre: 2, 
            formationYear: '1994' 
        },
        { 
            id: 8, 
            name: 'John Coltrane Quartet', 
            genre: 3, 
            formationYear: '1960' 
        },
        { 
            id: 9, 
            name: 'Eric Clapton', 
            genre: 4, 
            formationYear: '1963' 
        },
        { 
            id: 10,
             name: 'Dolly Parton', 
             genre: 5, 
             formationYear: '1959' 
        }
    ],
    bandMembers: [
        {
            id: ,
            firstName: "",
            lastName: "",
            birthYear: ,
            roleId: ,
            bandId:
        }
    ],
    bookings: [
        { 
            id: 1, 
            venueId: 1, 
            bandId: 1, 
            date: '2024-02-14' 
        },
        { 
            id: 2, 
            venueId: 1, 
            bandId: 6, 
            date: '2024-02-14' 
        },
        { 
            id: 3, 
            venueId: 2, 
            bandId: 2, 
            date: '2024-02-15' 
        },
        { 
            id: 4, 
            venueId: 2, 
            bandId: 7, 
            date: '2024-02-15' 
        },
        { 
            id: 5, 
            venueId: 3, 
            bandId: 3, 
            date: '2024-02-16' 
        },
        { 
            id: 6, 
            venueId: 3, 
            bandId: 8, 
            date: '2024-02-16' 
        },
        { 
            id: 7, 
            venueId: 4, 
            bandId: 4, 
            date: '2024-02-17' 
        },
        { 
            id: 8, 
            venueId: 4, 
            bandId: 9, 
            date: '2024-02-17' 
        },
        { 
            id: 9, 
            venueId: 5, 
            bandId: 5, 
            date: '2024-02-18' 
        },
        { 
            id: 10,
            venueId: 5,
            bandId: 10, 
            date: '2024-02-18' 
        },
        { 
            id: 11, 
            venueId: 1, 
            bandId: 2, 
            date: '2024-02-19' 
        },
        { 
            id: 12, 
            venueId: 1, 
            bandId: 7, 
            date: '2024-02-19' 
        },
        { 
            id: 13, 
            venueId: 2, 
            bandId: 1, 
            date: '2024-02-20' 
        },
        { 
            id: 14, 
            venueId: 2, 
            bandId: 6, 
            date: '2024-02-20' 
        },
        { 
            id: 15, 
            venueId: 3, 
            bandId: 4, 
            date: '2024-02-21' 
        },
        { 
            id: 16, 
            venueId: 3, 
            bandId: 9, 
            date: '2024-02-21' 
        },
        { 
            id: 17, 
            venueId: 4, 
            bandId: 3, 
            date: '2024-02-22' 
        },
        { 
            id: 18, 
            venueId: 4, 
            bandId: 8, 
            date: '2024-02-22' 
        },
        { 
            id: 19, 
            venueId: 5, 
            bandId: 5, 
            date: '2024-02-23' 
        },
        { 
            id: 20, 
            venueId: 5, 
            bandId: 10,
            date: '2024-02-23' 
        }
    ],
    genres: [
        { 
            id: 1, 
            genre: 'Rock' 
        },
        { 
            id: 2, 
            genre: 'Pop' 
        },
        { 
            id: 3, 
            genre: 'Jazz' 
        },
        { 
            id: 4, 
            genre: 'Blues' 
        },
        { 
            id: 5, 
            genre: 'Country' 
        }
    ]
};

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getGenres = () => {
    return database.genres.map(genre => ({...genre}))
}