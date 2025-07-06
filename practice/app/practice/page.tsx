'use client'

// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {FaAccusoft} from "react-icons/fa"

const page = () => {

  // const position = [40.843722, -73.917502] as [number, number]

  return (
  //   <MapContainer zoom={13} scrollWheelZoom={false}>
  //   <TileLayer
  //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   />
  //   <Marker position={position}>
  //   </Marker>
  // </MapContainer>
  <div className="">
    <FaAccusoft className="text-white"/>
  </div>
  )
}
export default page

// type Container = {
//   itemOne: string,
//   itemTwo: number,
//   itemThree: boolean
// };

// const firstContainer: Container = {
//   itemOne: 'some text',
//   itemTwo: 99,
//   itemThree: true
// };

// console.log(firstContainer.itemTwo);

