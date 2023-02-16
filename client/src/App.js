import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flex, VStack } from '@chakra-ui/react';
import MyMenu from './components/menu/menu';
import { Route, Routes, Navigate } from 'react-router-dom';
import CreatePoll from './modules/poll/formPoll/createPoll';
import Poll from './modules/poll/poll';
import Results from './modules/poll/results/results';
import Login from './modules/users/login/login';


function App() {

  const userLogin = localStorage.getItem('profile');

  return (
    <VStack>
      <Flex w='100%' direction='column'>
        <MyMenu />
        <Routes>
          <Route path="/poll" element={<Poll />} />
          <Route path="/resultados" element={<Results />} />
          <Route path="/createpoll" element={<CreatePoll />} />
          <Route path="/" element={<Login />} />
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
