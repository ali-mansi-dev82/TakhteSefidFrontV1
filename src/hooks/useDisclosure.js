import { useState } from "react";

const useDisclosure = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const onClose = setIsOpen.bind(this, false);
  const onOpen = setIsOpen.bind(this, true);

  return [isOpen, onOpen, onClose];
};
export default useDisclosure;
