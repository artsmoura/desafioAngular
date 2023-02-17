import { Box, Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seePollResult } from "../redux/pollAction";

const Results = (props) => {

    const dispatch = useDispatch();

    const result = useSelector((state) => state.pollState.results);
    const poll = useSelector((state) => state.pollState.pollForVote);

    useEffect(() => {
        dispatch(seePollResult(poll.id));
    }, []);

    let resultArray = [];
    result.map((r) => {
        resultArray.push(r.txt_nome_completo);
    });

    function countVotes(array) {
        if (array.length == 0) return null;

        var modeMap = {},
            maxEl = array[0],
            maxCount = 1;

        for (var i = 0; i < array.length; i++) {
            var el = array[i];

            if (modeMap[el] == null) modeMap[el] = 1;
            else modeMap[el]++;

            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            } else if (modeMap[el] == maxCount) {
                maxEl += "&" + el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }

    const drawObject = (names) => {
        names = countVotes(resultArray).split("&");
        let nameArray = [];
        names.map((name) => {
            result.find(x => x.txt_nome_completo === name ? nameArray.push(x) : '');
        });
        return nameArray;
    };

    const winnerName = countVotes(resultArray);
    const winnerObject = winnerName === null ? '' : winnerName.includes('&') ? drawObject(winnerName) : result.find(x => x.txt_nome_completo === winnerName);

    return (
        <ModalContent>
            <ModalHeader>Resultado 🎉 🎉</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {winnerObject.length > 1 ?
                    <Box>
                        A votação da categoria <Text as='b' color='whatsapp.400'>{poll.title.toUpperCase()}</Text> deu empate entre esses acampantes:
                        {winnerObject.map((winner) => (
                            <Text key={winner.txt_nome_completo} m={2}>{winner.txt_nome_completo} - {winner.nomeIgreja}</Text>
                        ))}
                    </Box>
                    : Object.keys(winnerObject).includes('txt_nome_completo') ?
                        <Box>
                            O vencedor da categoria <Text as='b' color='whatsapp.400'>{poll.title.toUpperCase()}</Text> é:
                            <Text fontSize='30px' mt={5}>{winnerObject?.txt_nome_completo} - {winnerObject?.nomeIgreja} 😄</Text>
                        </Box>
                        :
                        <Box>
                            Essa categoria ainda não teve votos
                        </Box>
                }
                <Box mt={5}>
                    Quantidade total de votos: <Text as='b' color='whatsapp.400'>{result.length}</Text>
                </Box>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={props.closeAction}>
                    Fechar
                </Button>
            </ModalFooter>
        </ModalContent>
    );
};

export default Results;