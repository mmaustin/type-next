import { ReactNode } from "react"



const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <div className=" bg-slate-600">Navbar</div>
        <main>
          {children}
        </main>
      <div className="">Footer</div>
    </>
  )
}
export default RootLayout;