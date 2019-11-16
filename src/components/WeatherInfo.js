import React from "react";

const WeatherInfo = props => {
  console.log(props)
  return (

    <div>
      {
        props.error &&
      <div className = "alert alert-danger">
            
          <p>{props.error}</p>
        </div>
      }

      {
        props.temperature ?
        <div className="card card-body">
            <div className="alert alert-warning">
     <p>
       Location: {props.city} , {props.country}
     </p>

     <p>
       Humidity : {props.humidity}
     </p>

     <p>
       Wind Speed : {props.wind_speed}
     </p>

     <p>
       Temperature : {props.temperature}
     </p>

      <p>Description : {props.description}</p>
      </div>
   </div>
      : 
      <div className="card card-body">
        <p>Il n'y a pas de renseignements encore</p>
      </div>
      }  
      </div>
  )
};

export default WeatherInfo;
