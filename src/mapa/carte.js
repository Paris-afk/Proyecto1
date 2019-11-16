import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import 'leaflet-routing-machine';

const Wrapper = styled.div`
width : ${props => props.width};
height: ${props => props.height};


`;



export default class Map extends React.Component{

  /*   constructor (props){
        super(props);
    };
         */
    componentDidMount(){
        

       /* if(this.props){
          console.log(`DATOS ${this.props} ESSSS` )
          console.log("C'est l'objet", this.props)
       }
        */
        this.map = L.map('map',{
            center: [46.589,3.362],
            zoom : 4, 
            zoomControl : false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            maxZoom: 20,
            detectRetina :true,
            maxNativeZoom : 17,
           
        }).addTo(this.map);
   /*      var markerDep = new L.latLng(47.2226,-1.5223);
        var markerDest = new L.latLng(48.8589,2.3469) */
        
      /*   L.Routing.control({
            waypoints: [
              L.latLng(47.2226,-1.5223),
              L.latLng(48.8589,2.3469)
            ],
            show : false,
            router: new L.Routing.osrmv1({
              language: 'fr',
              profile: 'car',
              
            }),
          }).addTo(this.map); */
        
   

    
    }   

    

    render(){
        return (
            <Wrapper width="100%" height="350px" id="map" datos ={this.props} />
        )
    }
}