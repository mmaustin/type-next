import { shootingData } from "@/serverActions/server.actions";


const PromiseProp = async() => {

  await shootingData();

  return (
    <div className="bg-slate-400 h-[300px]">PromiseProp</div>
  )
}
export default PromiseProp;