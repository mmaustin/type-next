'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
//import {FaAccusoft} from "react-icons/fa"
import { icon } from 'leaflet';
const iconUrl =
  'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});


const PropertyMap = () => {

  const position = [40.843, -73.91] as [number, number]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon}>
        ppp
      </Marker>
    </MapContainer>
  )
}
export default PropertyMap