import { shootingData } from "@/serverActions/server.actions";


const PromiseProp = async() => {

  const data = await shootingData();
  const parsedData = JSON.parse(data);
  console.log(parsedData.slice(0, 9));
  

  return (
    <div className="bg-slate-400 h-[300px]">PromiseProp</div>
  )
}
export default PromiseProp;