


const Meeting = async ({params}: {params: {id: string}}) => {
  
  const {id} = await params;
  
  return (
    <div className="text-zinc-50">Meeting Room #: {id} </div>
  )
}
export default Meeting;