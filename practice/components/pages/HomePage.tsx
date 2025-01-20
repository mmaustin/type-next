'use client'

import { useCounterStore } from "@/providers/counter-store-provider";


function HomePage() {

  const {count, incrementCount, decrementCount} = useCounterStore((state) => state)

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>Increase Count</button>
      <button type="button" onClick={() => void decrementCount()}>Decrease Count</button>
    </div>
  )
}
export default HomePage;