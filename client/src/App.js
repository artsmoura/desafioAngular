import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, ChakraProvider, Flex, VStack } from '@chakra-ui/react';
import MyMenu from './components/menu/menu';
import { Route, Routes } from 'react-router-dom';
import CreatePoll from './modules/poll/formPoll/createPoll';
import Poll from './modules/poll/poll';
import PollContent from './modules/poll/content/pollContent';


function App() {

  return (
    <VStack p={5}>
      <Flex w='100%' direction='column'>
        <MyMenu />
        <Routes>
          <Route path="/resultados" element={''} />
          <Route path="/criarvotacao" element={<CreatePoll />} />
          <Route path="/" element={<Poll />} />
          <Route path="/poll" element={<PollContent />} />
        </Routes>
      </Flex>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </VStack>
  );
}

export default App;
