'use client';

import { BsPlusLg } from "react-icons/bs";



const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-col-4">
      <div className="bg-orange-400 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer" onClick={() => {}}>
        <div className="flex justify-center items-center size-12 rounded-[10px] bg-blue-600">
          <BsPlusLg className=""/>
        </div>
      </div>
    </section>
  )
}
export default MeetingTypeList;