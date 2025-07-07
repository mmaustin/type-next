'use client'

//import PropertyMap from "@/components/PropertyMap";
import dynamic from "next/dynamic";

const MapProperty = dynamic(
  () => import('@/components/PropertyMap'),
  { ssr: false }
);

const Property = () => {
  return (
    <div>
      <MapProperty />
    </div>
  )
}
export default Property;

