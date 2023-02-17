import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Drawer, Flex, Heading, Modal, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { seePollResult } from "../../api";
import { listAllUsers, setUser } from "../users/redux/userAction";
import PollContent from "./content/pollContent";
import PollDelete from "./deletePoll/deletePoll";
import { clearPollForVote, listPolls, setPollForVote } from "./redux/pollAction";
import Results from "./results/results";

const Poll = () => {

    const dispatch = useDispatch();
    const drawer = useDisclosure();
    const modal = useDisclosure();
    const modalDelete = useDisclosure();
    const polls = useSelector((state) => state.pollState.polls);
    const user = useSelector((state) => state.userState.user);

    const handleOnClose = () => {
        dispatch(clearPollForVote());
        drawer.onClose();
    };

    const handleOnCloseModal = () => {
        modal.onClose();
    };

    const handleOnCloseDelete = () => {
        window.location.reload(false);
        modalDelete.onClose();
    };

    const handleNavigate = (poll) => {
        dispatch(setPollForVote(poll));
        drawer.onOpen();
    };

    const handleResultModal = (poll) => {
        dispatch(setPollForVote(poll));
        modal.onOpen(poll);
    };

    const handleModalDelete = (poll) => {
        dispatch(setPollForVote(poll));
        modalDelete.onOpen(poll);
    };

    useEffect(() => {
        dispatch(listPolls());
        setUser();
    }, [dispatch]);

    return (
        <Box
            p={5}
            shadow='md'
            borderWidth='1px'
            mx="auto"
            w={{ base: "90%", md: 800 }}
            justifyContent="center"
            borderRadius={10}
        >
            <Flex justifyContent="center" mb={5}>
                <Heading>Categorias Em Votação</Heading>
            </Flex>
            <Box>
                <Accordion allowToggle>
                    {polls.map((poll) => (
                        <AccordionItem key={poll.id}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' >
                                        <Text as="b" fontSize="lg" color='tomato'>
                                            {poll.title}
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Stack spacing='24px' display='flex' alignItems='center'>
                                    <Box>
                                        <Text as="b">Descrição: </Text>
                                        {poll.description}
                                    </Box>
                                    <ButtonGroup spacing='1rem'>
                                        <Button onClick={() => handleNavigate(poll)}>Acessar</Button>
                                        {user.idTipoUsuario === 1 ?
                                            <Button colorScheme='blue' onClick={() => handleResultModal(poll)}>Resultado</Button>
                                            : null}
                                        {user.idTipoUsuario === 1 ?
                                            <Button colorScheme='red' onClick={() => handleModalDelete(poll)}>Deletar</Button>
                                            : null}
                                    </ButtonGroup>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Flex justifyContent="center">
                    {polls.length === 0 ? <Text fontSize='xl'>Nenhuma categoria em votação 😭</Text> : ''}
                </Flex>
            </Box>
            <Modal size='xl' isOpen={modal.isOpen} onClose={handleOnCloseModal}>
                <ModalOverlay />
                <Results closeAction={handleOnCloseModal} />
            </Modal>
            <Modal size='xl' isOpen={modalDelete.isOpen} onClose={handleOnCloseDelete}>
                <ModalOverlay />
                <PollDelete closeAction={handleOnCloseDelete} />
            </Modal>
            <Drawer
                onClose={handleOnClose}
                isOpen={drawer.isOpen}
                size='full'
            >
                <PollContent closeAction={handleOnClose} />
            </Drawer>
        </Box>
    );
};

export default Poll;