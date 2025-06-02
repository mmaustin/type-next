import MeetingTypeList from "@/components/MeetingTypeList";



const Home = () => {
  const dateTime = new Date();
  const dayOfWeek: string = dateTime.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  const time: string = ( new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format();

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-emerald-800">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 capitalize">
          <h2 className=" max-w-[270px] rounded text-center">upcoming meeting at: 12:30 PM</h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{dayOfWeek}</h1>
            <h1 className="text-2xl font-bold">{time}</h1>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}
export default Home;