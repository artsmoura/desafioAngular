import React, { useRef } from 'react';
import { Box, Button, Drawer, Flex, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Stack, useDisclosure } from '@chakra-ui/react';
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
            <Button ref={ref} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={ref}
            >

            </Drawer>
        </Stack >
    );
};

export default MyMenu;

/* <Flex minWidth='max-content' alignItems='center' gap='2'>
               <Menu isLazy>
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