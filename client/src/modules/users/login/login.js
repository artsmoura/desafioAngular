import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import { login } from "../redux/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            txt_usuario: "",
            txt_senha: ""
        },
        onSubmit: (values, action) => {
            dispatch(login(values));
            navigate('/');
            action.resetForm();
        }
    });

    return (
        <VStack
            as="form"
            mx="auto"
            w={{ base: "90%", md: 500 }}
            h="100vh"
            justifyContent="center"
            onSubmit={formik.handleSubmit}
        >
            <Heading>Login</Heading>
            <Input
                name="txt_usuario"
                placeholder="Usuario"
                onChange={formik.handleChange}
                value={formik.values.txt_usuario}
            />
            <Input
                name="txt_senha"
                placeholder="Senha"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.txt_senha}
            />

            <Button type="submit" variant="outline" colorScheme="teal">
                Entrar
            </Button>
        </VStack>
    );
};

export default Login;