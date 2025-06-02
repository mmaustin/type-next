

const FunctionCard = ({cardText, icon}: {cardText: string, icon: React.ReactElement}) => {
  return (
    <div className="bg-orange-400 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer" onClick={() => { }}>
      <div className="flex justify-center items-center size-12 rounded-[10px] bg-blue-600">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="capitalize text-2xl font-bold">{cardText}</h1>
      </div>
    </div>
  )
}
export default FunctionCard;