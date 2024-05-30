import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "../styles/Map.module.css";
import { useEffect, useState } from "react";

export default function MyMap(props: any) {
  // const { position, zoom } = props;
  const [center, setCenter] = useState({ lat: 41.8781, lng: -87.6298 });
  const [zoom, setZoom] = useState(11);
  const [markers, setMarkers] = useState([]);
  const [description, setDescription] = useState([]);
  const [caseNumber, setCaseNumber] = useState([]);

  useEffect(() => {
    const data = props["props"];
    for (let i = 0; i < data.length; i++) {
      setMarkers((prev) => [
        ...prev,
        {
          lat: data[i][17],
          lng: data[i][18],
        },
      ]);
      setDescription((prev) => [...prev, data[i][5]]);
      setCaseNumber((prev) => [...prev, data[i][1]]);
    }
  }, [props]);

  return (
    <MapContainer
      className={style.map}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Tooltip>Chicago</Tooltip>
      </Marker> */}
      {markers.map((marker: any, index: number) => (
        <Marker key={index} position={marker}>
          <Tooltip>
            {"Case Number: " + caseNumber[index] + " - " + description[index]}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
