import { Box, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Input, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllUsers, updateSearchUser } from "../../users/redux/userAction";

const PollContent = (props) => {

    const dispatch = useDispatch();

    const search = useSelector((state) => state.userState.search);
    const users = useSelector((state) => state.pollState.users) ?? [];

    useEffect(() => {
        dispatch(listAllUsers());
    }, [dispatch]);

    const handleSearch = (e) => {
        dispatch(updateSearchUser(e));
        let itemFilter = users.txt_nome_completo;
        let searchMin = search.value;
        if (itemFilter.includes(searchMin)) {
            console.log('entrou?');
        }
    };

    const usersFiltrados = [];
    /* var userForFilter = users.filter();
   userForFilter.forEach(user => {
       console.log('ue');
   }); */


    return (
        <Stack>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{`Categoria`}</DrawerHeader>
                <DrawerBody>
                    <Input
                        name={'userSearch'}
                        onChange={(e) => handleSearch(e)}
                        placeholder='Buscar Usuario'
                        value={search.value}
                    >
                    </Input>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Nome</Th>
                                    <Th>Igreja</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {usersFiltrados?.map((user) => {
                                    <Tr>
                                        <Td>{user?.txt_nome_completo}</Td>
                                        <Td>{user?.nomeIgreja}</Td>
                                    </Tr>;
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </DrawerBody>
            </DrawerContent>
        </Stack>
    );
};

export default PollContent;


/* <Flex direction='column'>
                <Box>
                    <Input name={'userSearch'} onChange={(e) => handleSearchInput(e)}>
                    </Input>
                </Box>
                <Box>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Nome</Th>
                                    <Th>Igreja</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Flex> */