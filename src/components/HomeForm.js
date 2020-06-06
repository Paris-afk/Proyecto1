import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeForm = () => {
  const [input, setInput] = useState({
    depart: "",
    arrival: "",
    dateDepart: "",
    travelType: 1,
    dateArrival: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  console.log(input);
  return (
    <div className="card card-body">
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="text"
            name="depart"
            id="depart"
            value={input.depart}
            placeholder="Ecrivez la place de depart "
            className="form-control"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            value={input.arrival}
            type="text"
            name="arrival"
            id="arrival"
            placeholder="ecrivez la place d'arrivée"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Depart Date</label>
          <input
            onChange={handleChange}
            value={input.dateDepart}
            type="date"
            name="dateDepart"
            id="dateDepart"
            className="form-control"
            placeholder="Date Depart"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="travelType"
            id="travelType"
            className="btn btn-primary"
            type="radio"
            value="1"
          />
          Aller
        </div>
        {
          <div className="form-group">
            <input
              onChange={handleChange}
              name="travelType"
              id="travelType"
              className="btn btn-primary"
              type="radio"
              value="2"
            />
            Aller Retour
          </div>
        }

        <div className="form-group">
          <label htmlFor="">Arrival Date</label>
          <input
            onChange={handleChange}
            type="date"
            name="dateArrival"
            id="dateArrival"
            className="form-control"
            value={input.dateArrival}
          />
        </div>
        <Link
          to={{
            pathname: "search",
            myCustomProps: input,
          }}
        >
          {" "}
          <button className="btn btn-success btn-block">
            Voir les voyages
          </button>
        </Link>
      </form>
    </div>
  );
};
export default HomeForm;
