import React, { useRef } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../modules/users/redux/userAction';
import { useDispatch, useSelector } from 'react-redux';

const MyMenu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userState.user);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const ref = useRef();

    const handleClick = (e) => {
        const str = e.target.innerText.toLowerCase();
        const actionName = str.replace(/\s/g, '');

        navigate(`/${actionName.normalize('NFD').replace(/\p{Mn}/gu, "")}`);
    };

    const handleLogout = () => {
        dispatch(logout());
        onClose();
        navigate('/');
    };

    return (
        <Stack
            w='100%' borderWidth='1px' h='50px' marginBottom='10px'
            justify='space-between' alignItems='center' direction={user.txt_usuario ? 'row1' : 'row-reverse'}
            p={0, 5}
        >
            {user.idTipoUsuario === 1 ?
                <Button
                    ref={ref}
                    colorScheme='teal'
                    onClick={onOpen}
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='ghost'
                    w='50px'
                >
                </Button>
                : null}
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
                                <Button w='100%' colorScheme='teal' variant='ghost' onClick={(e) => navigate('/')}>
                                    Inicio
                                </Button>
                            </Box>

                            <Box>
                                <Button w='100%' colorScheme='teal' variant='ghost' onClick={(e) => handleClick(e)}>
                                    Resultados
                                </Button>
                            </Box>

                            <Box>
                                <Button w='100%' colorScheme='teal' variant='ghost' onClick={(e) => navigate('/createpoll')}>
                                    Criar Votação
                                </Button>
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button
                            w='100%'
                            colorScheme='blue'
                            onClick={handleLogout}
                        >
                            Sair
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <Button
                ref={ref}
                colorScheme='whatsapp'
                onClick={() => navigate('/')}
                aria-label='Options'
            >
                Entrar
            </Button>
        </Stack >
    );
};

export default MyMenu;