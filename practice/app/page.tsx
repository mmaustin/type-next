'use client'

import { Person } from '@/utils/types';

function personHood(p: Person): string {
  return p.name;
};
console.log(personHood({ name: 'Mccray', age: 49, occupation: true }));


// interface Denard<T, U> {
//   name: T
//   age: U
// }

// const page = () => {
//   return (
//     <div></div>
//   )
// }
export default personHood