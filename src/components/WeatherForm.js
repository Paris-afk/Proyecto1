import React from "react";

const WeatherForm = (props) => (
  <div className="card card-body">
    <form onSubmit={props.getWeather}>
      {/*       <div className="form-group">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Votre nom de ville"
          className="form-control"
          autoFocus
         
        />
      </div> */}

      {/*      <div className="form-group">
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Votre Nom du pays"
          className="form-control"
         
        />
      </div> */}

      <div className="form-group">
        <input
          type="text"
          name="depart"
          id="depart"
          placeholder="Ecrivez la place de depart "
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
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
          type="date"
          name="dateDepart"
          id="dateDepart"
          className="form-control"
          placeholder="Date Depart"
        />
      </div>

      <div className="form-group">
        <input
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
          type="date"
          name="dateArrival"
          id="dateArrival"
          className="form-control"
        />
      </div>

      <button className="btn btn-success btn-block">Voir les voyages</button>
    </form>
  </div>
);
export default WeatherForm;
