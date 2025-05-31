///* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-6 lg:px-10">
      <Link href={'/'} className="flex items-center gap-1">
        <Image
          src="/favicon.ico"
          alt="Placeholder Image"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">Yoom</p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk Here */}

        <MobileNav />
      </div>
    </nav>
  )
}
export default Navbar;