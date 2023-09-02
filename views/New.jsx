const React = require("react");

const New = () => {
  return (
    <>
      <form action="/flights" method="post">
        <label>Airline : </label>
        <select name="airline">
          <option disabled selected value>
            {" "}
            -- select an option --{" "}
          </option>
          <option value={"American"}>American</option>
          <option value={"United"}>United</option>
          <option value={"Southwest"}>Southwest</option>
        </select>
        <br />
        <label>Flight Number : </label><input name="flightNo" placeholder='No. from 10 to 9999' min='10' max='9999' type="number" />
        <br />
        <label>Departure date : </label><input name="departs" type="datetime-local" />
        <br />
        <button>Add Flight</button>
      </form>
    </>
  );
};

module.exports = New;
