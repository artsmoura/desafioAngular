import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePoll } from "../redux/pollAction";

const PollDelete = (props) => {

    const dispatch = useDispatch();
    const poll = useSelector((state) => state.pollState.pollForVote);
    const navigate = useNavigate();

    //Passar o navigate no deletePoll
    const handleDeleteClick = () => {
        dispatch(deletePoll(poll.id));

    };

    return (
        <ModalContent>
            <ModalHeader>Deletar</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Deseja deletar a categoria: <Text as='b'>{poll.title?.toUpperCase()}</Text>?
            </ModalBody>

            <ModalFooter>
                <Button variant='ghost' mr={3} onClick={props.closeAction}>
                    Cancelar
                </Button>
                <Button colorScheme='red' onClick={handleDeleteClick}>Deletar!</Button>
            </ModalFooter>
        </ModalContent>
    );
};

export default PollDelete;