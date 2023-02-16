import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, Flex, Heading, Stack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listAllUsers } from "../users/redux/userAction";
import PollContent from "./content/pollContent";
import { clearPollForVote, listPolls, setPollForVote } from "./redux/pollAction";

const Poll = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const polls = useSelector((state) => state.pollState.polls);

    const handleClick = () => {
        onOpen();
    };

    const handleOnClode = () => {
        console.log('FECHOU');
        dispatch(clearPollForVote());
        onClose();
    };

    const handleNavigate = (poll) => {
        dispatch(setPollForVote(poll));
        handleClick();
    };

    useEffect(() => {
        dispatch(listPolls());
    }, []);

    return (
        <Box
            p={5}
            shadow='md'
            borderWidth='1px'
            mx="auto"
            w={{ base: "90%", md: 800 }}
            justifyContent="center"
        >
            <Flex justifyContent="center">
                <Heading>Categorias Em Votação</Heading>
            </Flex>
            <Box>
                <Accordion allowToggle>
                    {polls.map((poll) => (
                        <AccordionItem key={poll.id}>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {poll.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Stack spacing='24px' display='flex' alignItems='center'>
                                    <Box >
                                        {poll.description}
                                    </Box>
                                    <Button w='20%' onClick={() => handleNavigate(poll)}>Acessar</Button>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Drawer
                onClose={handleOnClode}
                isOpen={isOpen}
                size='full'
            >
                <PollContent />
            </Drawer>
        </Box>
    );
};

export default Poll;