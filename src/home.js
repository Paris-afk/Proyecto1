import React from "react";
import HomeForm from "./components/HomeForm";
import fondo from "./img/bus.jpeg";
import "./home.css";

var sectionStyle = {
  height: "1000px",

  backgroundImage: "url(" + fondo + ")",
};
class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row contenido" style={sectionStyle}>
          <div className="col-lg-4 formt ">
            <HomeForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
