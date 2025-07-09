'use client';

import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
//import {FaAccusoft} from "react-icons/fa"
import { icon } from 'leaflet';
const iconUrl =
  'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [10, 15],
});


const PropertyMap = () => {

  const position = [
    [40.695051, -73.917793] as [number, number],
    [40.670167, -73.915729] as [number, number],
    [40.672802, -73.914047] as [number, number],
    [40.649174, -73.910919] as [number, number],
    [40.679244, -73.886873] as [number, number],
    [40.687, -73.937344] as [number, number],
    [40.631196, -73.919982] as [number, number],
    [40.662519, -73.927012] as [number, number],
    [40.696297, -73.974949] as [number, number],
    [40.705888, -73.942966] as [number, number],
    [40.577192, -74.000571] as [number, number],
    [40.679244, -73.886873] as [number, number],
    [40.692485, -73.960292] as [number, number],
    [40.656246, -73.888868] as [number, number],
    [40.638041, -73.919232] as [number, number],
    [40.575643, -73.99379] as [number, number],
    [40.693058, -73.940046] as [number, number],
    [40.672585, -73.873262] as [number, number],
    [40.694076, -73.978842] as [number, number],
    [40.700734, -73.98972] as [number, number],
    [40.645628, -73.89762] as [number, number],
    [40.665074, -73.887429] as [number, number],
    [40.693531, -73.911082] as [number, number],
    [40.696427, -73.918193] as [number, number],
    [40.655344, -73.951514] as [number, number],
    [40.669706, -73.919429] as [number, number],
    [40.698016, -73.945876] as [number, number],
    [40.678533, -73.910891] as [number, number],
    [40.674162, -73.938939] as [number, number],
    [40.68034, -73.930039] as [number, number],
    [40.660892, -73.892377] as [number, number],
    [40.654446, -73.963015] as [number, number],
    [40.67445, -73.997217] as [number, number],
    [40.68239, -73.87661] as [number, number],
    [40.638492, -73.895592] as [number, number],
    [40.662613, -73.946765] as [number, number],
    [40.679569, -73.948203] as [number, number]
  ];

  return (
    <div className="mt-4">
      <MapContainer center={[40.695051, -73.917793]} zoom={7} scrollWheelZoom={false} zoomControl={false} className='h-[400px] w-[50%] z-0 rounded-lg relative'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomright' />
        {position.map((posit, i) => (
          <Marker key={i} position={posit} icon={markerIcon}></Marker>
        ))}
      </MapContainer>

    </div>

  )
}
export default PropertyMap