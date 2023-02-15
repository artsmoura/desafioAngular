import { Box, Button, ButtonGroup, FormControl, FormLabel, Heading, Input, Select, Stack, StackDivider, Textarea, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPollInput, createPoll, updatePollContentCreate } from "../redux/pollAction";

const CreatePoll = () => {

    const dispatch = useDispatch();
    const poll = useSelector((state) => state.pollState.poll);
    const [cancelButton, setCancelButton] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(createPoll(poll));
    };

    console.log(poll);

    useEffect(() => {
        if (cancelButton === true) {
            navigate('/');
        }
    }, [cancelButton]);

    const handleCancelClick = () => {
        dispatch(clearPollInput());
        setCancelButton(true);
    };

    const handleInputChange = (e) => {
        dispatch(updatePollContentCreate(e));
    };

    return (
        <Box p={5} shadow='md' borderWidth='1px'>
            <Heading fontSize='xl'>Criar Categoria</Heading>
            <Box p='6'>
                <Stack spacing={3}>
                    <form method="POST" onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel>Nome da Categoria</FormLabel>
                            <Input
                                name="categoryName"
                                placeholder="Nome da Categoria"
                                onChange={handleInputChange}
                                value={poll.categoryName}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Gênero</FormLabel>
                            <Select
                                name="genderPoll"
                                placeholder='Selecione o gênero da categoria'
                                onChange={handleInputChange}
                                value={poll.genderPoll}
                            >
                                <option>Masculino</option>
                                <option>Feminino</option>
                                <option>Ambos</option>
                            </Select>
                        </FormControl>
                        {/* <FormControl isRequired>
                            <FormLabel>Data de Início da Votação</FormLabel>
                            <Input
                                name="inicialPollDate"
                                placeholder="Data de Início da Votação"
                                onChange={handleInputChange}
                                value={poll.inicialPollDate}
                                type="datetime-local"
                            />
                        </FormControl> */}
                        <FormControl isRequired>
                            <FormLabel>Descrição da Categoria</FormLabel>
                            <Textarea
                                name="description"
                                placeholder="Descrição da Categoria"
                                onChange={handleInputChange}
                                value={poll.description}
                                size='sm'
                            />
                        </FormControl>
                        <ButtonGroup variant='outline' spacing='5'>
                            <Button
                                onClick={() => handleCancelClick()}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type='submit'
                                colorScheme='blue'
                            >
                                Save
                            </Button>
                        </ButtonGroup>
                    </form>
                </Stack>
            </Box>
        </Box>
    );
};

export default CreatePoll;