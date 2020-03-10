import React, { Component } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import { WEATHER_KEY, BABLACAR_KEY } from "./keys";

import BlablacarInfo from "./components/BlablacarInfo";
import BlablacarRetour from "./components/BlablacarRetour";
import Map from "./mapa/carte";
class App extends Component {
  state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null,
    datos: undefined,
    datosRetour: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    /*  console.log(e.target.elements) */
    const {
      city,
      country,
      arrival,
      depart,
      dateDepart,
      travelType,
      dateArrival
    } = e.target.elements;
    const cityValue = arrival.value;
    /* const countryValue = country.value; */
    const arrivalValue = arrival.value;
    const departValue = depart.value;
    const dateDepartValue = dateDepart.value;
    const travelTypeValue = travelType.value;
    const dateArrivalValue = dateArrival.value;

    /* console.log(cityValue,countryValue) */

    if (cityValue && departValue) {
      const moneda = "EUR";
      const API_BLABLACAR = `https://public-api.blablacar.com/api/v2/trips?key=${BABLACAR_KEY}&fn=${departValue}&tn=${arrivalValue}&cur=${moneda}&db=${dateDepartValue}`;

      const API_BLABLACARretour = `https://public-api.blablacar.com/api/v2/trips?key=${BABLACAR_KEY}&fn=${arrivalValue}&tn=${departValue}&cur=${moneda}&db=${dateArrivalValue}`;

      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();

      const respuesta = await fetch(API_BLABLACAR);
      const datos = await respuesta.json();
      /*  console.log(datos)
    console.log(`Esta es la fecha de partida ${dateDepartValue}`) */

      const respuesta1 = await fetch(API_BLABLACARretour);
      const datos1 = await respuesta1.json();
      /*  console.log(`REGRESO ${datos1}`) */

      /*  console.log(API_URL)
    console.log(data);  */
      /* console.log(this.state) */
      if (travelTypeValue == 2) {
        this.setState({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          datos: datos,
          datosRetour: datos1
        });
      } else {
        this.setState({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          datos: datos,
          datosRetour: undefined
        });
      }
    } else {
      this.setState({ error: "Ecrivez un ville et un pays" });
    }
  };

  render() {
    /* if(this.getWeather.travelTypeValue = 1){
      console.log(`es solo ida`)
    }else{
      console.log(`es regreso `)
    } */
    return (
      <div className="container p-4">
        <div className="row">
          {/* col-md-4 mx-auto */}
          <div className="col-md-4 ">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
            {/*  <MyMapComponent /> */}
            <Map />
          </div>
          <div className="col-md-4">
            <BlablacarInfo {...this.state} />
          </div>
          <div className="col-md-4">
            <BlablacarRetour {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
