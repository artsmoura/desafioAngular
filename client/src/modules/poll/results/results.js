import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { seePollResult } from "../redux/pollAction";

const Results = () => {

    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(seePollResult(id));
    }, []);

    const result = useSelector((state) => state.pollState.results);

    let resultNames = [];
    result.map((r) => {
        resultNames.push(r.txt_nome_completo);
    });

    function mode(arr) {
        return arr.sort((a, b) =>
            arr.filter(v => v === a).length
            - arr.filter(v => v === b).length
        ).pop();
    }

    return (
        <Box>
            <Heading>{mode(resultNames)}</Heading>

        </Box>
    );
};

export default Results;