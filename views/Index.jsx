const React = require('react')



const index = (props) => {
    const flights = props.flights
    return(
        <>
            {flights.map(flight => 
                <>
                <h1>{flight.airline}</h1>
                <h2>{flight.departs.toISOString()}</h2>
                <h3>{flight.flight}</h3>
                </>
            )}
        </>
    )
}






module.exports = index