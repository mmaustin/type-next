/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";


const MobileNav = () => {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/favicon.ico"
            alt="Placeholder Image"
            width={32}
            height={32}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <SheetTitle >
            <VisuallyHidden.Root>
              Mobile Menu Title
            </VisuallyHidden.Root>
          </SheetTitle>
          <Link href={'/'} className="flex items-center gap-1">
            <Image
              src="/favicon.ico"
              alt="Placeholder Image"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Yoom</p>
          </Link>
        </SheetContent>
      </Sheet>

    </section>
  )
}
export default MobileNav;