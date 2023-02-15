import React, { useRef } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const MyMenu = () => {

    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const ref = useRef();

    const handleClick = (e) => {
        const str = e.target.innerText.toLowerCase();
        const actionName = str.replace(/\s/g, '');

        navigate(`/${actionName.normalize('NFD').replace(/\p{Mn}/gu, "")}`);
    };

    return (
        <Stack w='100%' borderWidth='1px' h='50px' p={3} marginBottom='10px'>
            <Button
                ref={ref}
                colorScheme='teal'
                onClick={onOpen}
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                w='50px'
            >
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'

                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Menu
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <Button w='100%' colorScheme='teal' variant='ghost' onClick={(e) => handleClick(e)}>
                                    Resultados
                                </Button>
                            </Box>

                            <Box>
                                <Button w='100%' colorScheme='teal' variant='ghost' onClick={(e) => handleClick(e)}>
                                    Criar Votação
                                </Button>
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button w='100%' colorScheme='blue'>Sair</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Stack >
    );
};

export default MyMenu;

/* <Flex minWidth='max-content' alignItems='center' gap='2'>
               <Menu>
                   <MenuButton>
                       Perfil
                   </MenuButton>
                   <MenuList>
                       <MenuGroup title='Concurso'>
                           <MenuItem onClick={(e) => handleClick(e)}>Resultados</MenuItem>
                           <MenuItem onClick={(e) => handleClick(e)}>Criar Votação</MenuItem>
                       </MenuGroup>
                       <MenuDivider />
                       <MenuGroup title='Sistema'>
                           <MenuItem>Sair</MenuItem>
                       </MenuGroup>
                   </MenuList>
               </Menu>
           </Flex> */