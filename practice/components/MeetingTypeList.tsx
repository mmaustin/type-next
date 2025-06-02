'use client';

import { BsPlusLg } from "react-icons/bs";
import FunctionCard from "./FunctionCard";



const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-col-4">
      <FunctionCard cardText={'meeting'} icon={<BsPlusLg />}/>
      <FunctionCard cardText={'meeting'} icon={<BsPlusLg />}/>
      <FunctionCard cardText={'meeting'} icon={<BsPlusLg />}/>
      <FunctionCard cardText={'meeting'} icon={<BsPlusLg />}/>
    </section>
  )
}
export default MeetingTypeList;