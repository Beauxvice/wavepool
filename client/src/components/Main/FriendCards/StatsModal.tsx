import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  chakra,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tooltip,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiOutlineBarChart } from "react-icons/ai";

const StatsModal = (props: any) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("brand.200", "brand.800");
  return (
    <>
      <Tooltip label="Charts & Stats">
        <Button variant="ghost" onClick={onOpen}>
          <chakra.div minW="10px" minH="10px">
            <AiOutlineBarChart />
          </chakra.div>
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={bg}>
          <ModalHeader>Charts & Stuff</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <h1>Friend Score: {Math.round(props.friendScore)}</h1>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" float="right" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StatsModal;
