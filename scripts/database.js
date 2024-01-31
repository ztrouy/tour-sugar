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
            memberCount: 4, 
            genre: 1, 
            formationYear: '1962-07-12' 
        },
        { 
            id: 2, 
            name: 'Coldplay', 
            memberCount: 4, 
            genre: 2, 
            formationYear: '1996-01-16' 
        },
        { 
            id: 3, 
            name: 'Miles Davis Quintet', 
            memberCount: 5, 
            genre: 3, 
            formationYear: '1955-10-26' 
        },
        { 
            id: 4, 
            name: 'B.B. King', 
            memberCount: 1, 
            genre: 4, 
            formationYear: '1948-11-25' 
        },
        { 
            id: 5, 
            name: 'Taylor Swift', 
            memberCount: 1, 
            genre: 5, 
            formationYear: '2006-10-24' 
        },
        { 
            id: 6, 
            name: 'U2', 
            memberCount: 4, 
            genre: 1, 
            formationYear: '1976-09-25' 
        },
        { 
            id: 7, 
            name: 'Maroon 5', 
            memberCount: 5, 
            genre: 2, 
            formationYear: '1994-09-21' 
        },
        { 
            id: 8, 
            name: 'John Coltrane Quartet', 
            memberCount: 4, 
            genre: 3, 
            formationYear: '1960-12-21' 
        },
        { 
            id: 9, 
            name: 'Eric Clapton', 
            memberCount: 1, 
            genre: 4, 
            formationYear: '1963-10-18' 
        },
        { 
            id: 10,
             name: 'Dolly Parton', 
             memberCount: 1, 
             genre: 5, 
             formationYear: '1959-07-13' 
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