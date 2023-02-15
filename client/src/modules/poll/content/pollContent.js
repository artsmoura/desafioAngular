import { Box, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Input, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllUsers, updateSearchUser } from "../../users/redux/userAction";
import debounce from 'lodash.debounce';

const PollContent = (props) => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    // const search = useSelector((state) => state.userState.search);
    const users = useSelector((state) => state.userState.users);

    useEffect(() => {
        dispatch(listAllUsers());
    }, []);

    const handleSearch = (e) => {
        debounce(() => setSearch(e.target.value), 400)();
    };

    const filteredUsers = users.filter(user => user['txt_nome_completo'].toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "").includes(search.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")));

    return (
        <Stack>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{`Categoria`}</DrawerHeader>
                <DrawerBody>
                    <Input
                        name={'txt_nome_completo'}
                        onChange={handleSearch}
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
                                {filteredUsers.map((user) => (
                                    <Tr key={user.cod_usuario}>
                                        <Td>{user.txt_nome_completo}</Td>
                                        <Td>{user.nomeIgreja}</Td>
                                    </Tr>
                                ))}
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