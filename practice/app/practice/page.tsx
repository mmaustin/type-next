'use client'


const page = () => {
  return (
    <div>page</div>
  )
}
export default page

type Container = {
  itemOne: string,
  itemTwo: number,
  itemThree: boolean
};

const firstContainer: Container = {
  itemOne: 'some text',
  itemTwo: 99,
  itemThree: true
};

console.log(firstContainer.itemTwo);

