import React, { Children, cloneElement } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ModalComponent = ({ children, ModalTitle, actionText, edit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {edit ? (
        <FaPencilAlt size={40} onClick={onOpen} />
      ) : (
        <RiDeleteBin6Fill size={40} onClick={onOpen} />
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="yellow">
          <ModalHeader color="black">{ModalTitle}</ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody>
            {Children.map(children, (child) =>
              cloneElement(child, { isOpen, onOpen, onClose })
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
