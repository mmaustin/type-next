/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {ReactNode} from "react";


interface  MeetingModalProps {
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

const MeetingModal = ({isOpen, onClose, title, classname, buttonText, handleClick, children, image, buttonIcon}: MeetingModalProps) => {
  return (
    <div>MeetingModal</div>
  )
};
export default MeetingModal;