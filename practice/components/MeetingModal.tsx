/* eslint-disable @typescript-eslint/no-unused-vars */

interface  MeetingModalProps {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  classname: string,
  buttonText: string,
  handleClick: () => void
}

const MeetingModal = ({isOpen, onClose, title, classname, buttonText, handleClick}: MeetingModalProps) => {
  return (
    <div>MeetingModal</div>
  )
};
export default MeetingModal;