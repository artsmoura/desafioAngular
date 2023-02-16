import { Box, Button, ButtonGroup, FormControl, FormLabel, Heading, Input, Select, Stack, StackDivider, Textarea, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPollInput, createPoll, updatePollContentCreate } from "../redux/pollAction";
import { useFormik } from "formik";

const CreatePoll = () => {

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            gender: ""

        },
        onSubmit: (values, action) => {
            dispatch(createPoll(values));
            action.resetForm();
        }
    });

    const dispatch = useDispatch();
    const poll = useSelector((state) => state.pollState.poll);
    const [cancelButton, setCancelButton] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(createPoll(poll));
    };

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
                <Stack as="form" spacing={3} onSubmit={formik.handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Nome da Categoria</FormLabel>
                        <Input
                            name="title"
                            placeholder="Nome da Categoria"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Gênero</FormLabel>
                        <Select
                            name="gender"
                            placeholder='Selecione o gênero da categoria'
                            onChange={formik.handleChange}
                            value={formik.values.gender}
                        >
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Ambos</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Descrição da Categoria</FormLabel>
                        <Textarea
                            name="description"
                            placeholder="Descrição da Categoria"
                            onChange={formik.handleChange}
                            value={formik.values.description}
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
                </Stack>
            </Box>
        </Box>
    );
};

export default CreatePoll;