import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const Poll = () => {
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
                                <Button w='20%'>Acessar</Button>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    );
};

export default Poll;