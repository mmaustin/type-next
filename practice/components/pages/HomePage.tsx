'use client'

import { useCounterStore } from "@/providers/counter-store-provider";


function HomePage() {

  const { count, incrementCount, decrementCount, clearCount } = useCounterStore((state) => state)

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>Increase Count</button>
      <hr />
      <button type="button" onClick={() => void decrementCount()}>Decrease Count</button>
      <hr />
      <button type="button" onClick={() => void clearCount()}>Clear Count</button>
    </div>
  )
}
export default HomePage;