import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Drawer, Heading, Stack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listAllUsers } from "../users/redux/userAction";
import PollContent from "./content/pollContent";

const Poll = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = () => {
        onOpen();
    };

    const handleNavigate = () => {
        handleClick();
    };

    return (
        <Box p={5} shadow='md' borderWidth='1px'>
            <Heading>Categorias Em Votação</Heading>
            <Box>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Primeira Categoria
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack spacing='24px' display='flex' alignItems='center'>
                                <Box >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Box>
                                <Button w='20%' onClick={handleNavigate}>Acessar</Button>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                size='full'

            >
                <PollContent />
            </Drawer>
        </Box>
    );
};

export default Poll;