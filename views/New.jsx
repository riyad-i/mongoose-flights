const React = require("react");

const New = () => {
  return (
    <>
      <form>
        <label>Airline : </label>
        <select>
          <option disabled selected value>
            {" "}
            -- select an option --{" "}
          </option>
          <option value={"American"}>American</option>
          <option value={"United"}>United</option>
          <option value={"Southwest"}>Southwest</option>
        </select>
        <br />
        <label>Flight Number : </label><input min='10' max='9999' type="number" />
        <br />
        <label>Date : </label><input type="datetime-local" />
        <br />
        <button>Add Flight</button>
      </form>
    </>
  );
};

module.exports = New;
