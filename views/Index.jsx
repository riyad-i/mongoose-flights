const React = require("react");

const index = (props) => {
  const flights = props.flights;
  return (
    <>
      {flights.map((flight) => {
        return (
          <div key={flight._id}>
            <h1>Airline : {flight.airline}</h1>
            <h2>Depart date : {flight.departs.toISOString().slice(0, 10)}</h2>
            <h3>flight number : {flight.flight}</h3>
            <br />
          </div>
        );
      })}
    </>
  );
};

module.exports = index;
