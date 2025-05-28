/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-6 lg:px-10">
      <Link href={'/'} className="text-white">
        Home
      </Link>
    </nav>
  )
}
export default Navbar;