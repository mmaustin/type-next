/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";


interface MeetingModalProps {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  classname?: string,
  buttonText?: string,
  handleClick?: () => void,
  children?: ReactNode,
  image?: string,
  buttonIcon?: React.ReactNode
}

const MeetingModal = ({ isOpen, onClose, title, classname, buttonText, handleClick, children, image, buttonIcon }: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-black px-6 py-9 text-white">
        <h1 className={cn('text-2xl font-bold leading-[42px]', classname)}>{title}</h1>
        {children}
        <Button className="bg-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
          {buttonIcon} &nbsp;
          {buttonText || 'Schedule Meeting'}
        </Button>
      </DialogContent>
      <DialogTitle className="sr-only">
        {/* <VisuallyHidden.Root >
          Open or Closed Modal
        </VisuallyHidden.Root> */}
      </DialogTitle>
      <DialogDescription className="sr-only">
        Open or Close Modal
      </DialogDescription>
    </Dialog>
  )
};
export default MeetingModal;