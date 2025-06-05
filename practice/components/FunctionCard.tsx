/* eslint-disable @typescript-eslint/no-unused-vars */


const FunctionCard = ({cardText, icon, handleClick, className}: {cardText: string, icon: React.ReactElement, handleClick(): void, className: string}) => {
  return (
    <div className={`${className} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`} onClick={handleClick}>
      <div className="flex justify-center items-center size-12 rounded-[10px] bg-black">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="capitalize text-2xl font-bold">{cardText}</h1>
      </div>
    </div>
  )
}
export default FunctionCard;