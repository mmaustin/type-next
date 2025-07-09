'use client'

//import PropertyMap from "@/components/PropertyMap";
import dynamic from "next/dynamic";

const MapProperty = dynamic(
  () => import('@/components/PropertyMap'),
  { ssr: false }
);

const Property = () => {
  return (
    <div className="h-[600px] border border-blue-500 justify-center">
      <MapProperty />
    </div>
  )
}
export default Property;

