'use client';

import {
  Sheet,
  SheetContent,

  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


const MobileNav = () => {

  const pathname = usePathname();

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

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route} >
                      <Link
                        href={link.route}
                        key={(link.label)}
                        className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', { 'bg-blue-600': isActive })}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

    </section>
  )
}
export default MobileNav;