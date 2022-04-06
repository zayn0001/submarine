import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import topo from "./myown.json" 
//import subdiv from "./subdiv.json" 
//import subdiv2 from "./subdiv2.json"
//import subdiv3 from "./subdiv3.json"
import subdiv4 from "./subdiv4.json"

const geoUrl = topo
  //"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { name: "Buenos Aires", coordinates: [-58.3816, -34.6037]},
  {  name: "La Paz", coordinates: [-68.1193, -16.4897] },
  {  name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  {  name: "Santiago", coordinates: [-70.6693, -33.4489] },
  {  name: "Bogota", coordinates: [-74.0721, 4.711] },
  {  name: "Quito", coordinates: [-78.4678, -0.1807] },
  {  name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  {  name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  {  name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  {  name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  {  name: "Caracas", coordinates: [-66.9036, 10.4806] },
  {  name: "Lima", coordinates: [-77.0428, -12.0464] }
];




const MapChart = () => {
  return (
    <div>
      <ComposableMap width={850} height={410} projectionConfig={{scale: 155,rotation: [-11, 0, 0],}}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}/>
              ))
            }
          </Geographies>

          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
            <circle r={0.5} fill="#F00" stroke="red" strokeWidth={0.5} />
            <text
                textAnchor="middle"
                y="-2"
                style={{ fontFamily: "system-ui", fill: "green", fontSize:1 }}
            >
                {name}
            </text>
            </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
