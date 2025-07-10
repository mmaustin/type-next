import PromisePropComponent from "@/components/PromisePropComponent";
import { shootingData } from "@/serverActions/server.actions";

const PromiseProp = () => {

  const data = shootingData();
  

  return (
    <div className="bg-slate-400 h-[300px]">
      <PromisePropComponent proppy={data} />
    </div>
  )
}
export default PromiseProp;