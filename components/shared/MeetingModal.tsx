type MeetingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: React.ReactNode;
  buttonText?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
};

export default function MeetingModal({
  isOpen,
  onClose,
  title,
  className,
  children,
  buttonText,
  handleClick,
  image,
  buttonIcon,
}: MeetingModalProps) {
  return <div></div>;
}
