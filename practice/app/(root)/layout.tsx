import { ReactNode } from "react"



const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <div className="">Navbar</div>
        <main>
          {children}
        </main>
      <div className="">Footerh</div>
    </>
  )
}
export default RootLayout