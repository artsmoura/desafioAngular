import { Box, Button, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllUsers, setUserSelect } from "../../users/redux/userAction";
import debounce from 'lodash.debounce';
import { setVote, voteSubmit } from "../redux/pollAction";
import { CheckIcon } from "@chakra-ui/icons";

const PollContent = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const { onClose } = useDisclosure();

    // const search = useSelector((state) => state.userState.search);
    const users = useSelector((state) => state.userState.users);
    const poll = useSelector((state) => state.pollState);

    useEffect(() => {
        dispatch(listAllUsers(poll.pollForVote.gender));
    }, []);

    const handleSearch = (e) => {
        debounce(() => setSearch(e.target.value), 400)();
    };

    const handleVoteOption = (user) => {
        dispatch(setVote(user));
        dispatch(setUserSelect(user));
    };

    const handleVoteSubmit = () => {
        dispatch(voteSubmit({
            idUsuario: poll.vote.cod_usuario,
            poll_id: poll.pollForVote.id
        }));
        window.location.reload(false);
    };

    const filteredUsers = users.filter(user => user['txt_nome_completo'].toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "").includes(search.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")));

    return (
        <Stack>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{poll.pollForVote.title?.toUpperCase()}</DrawerHeader>
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
                                    <Tr
                                        key={user.cod_usuario}
                                        onClick={() => handleVoteOption(user)}
                                        color={user.select === true ? 'teal' : ''}
                                    >
                                        <Td>{user.txt_nome_completo} {user.select === true ? <CheckIcon /> : ''}</Td>
                                        <Td>{user.nomeIgreja}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </DrawerBody>
            </DrawerContent >
            <Box
                position='fixed'
                bottom='20px'
                right={['16px', '84px']}
                zIndex={9999}
                onClick={handleVoteSubmit}
            >
                <Button
                    size={'md'}
                    colorScheme='whatsapp'
                    variant='solid'
                    isDisabled={Object.keys(poll.vote).length === 0 ? true : false}
                >
                    Votar
                </Button>
            </Box>
        </Stack >
    );
};

export default PollContent;