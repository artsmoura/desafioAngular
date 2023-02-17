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
import ProtectedRoute from './protectedRoute';


function App() {

  return (
    <VStack>
      <Flex w='100%' direction='column'>
        <MyMenu />
        <Routes>
          <Route path="/" element={<Poll />} />
          <Route path='/createpoll' element={<ProtectedRoute />}>
            <Route path="/createpoll" element={<CreatePoll />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path='/result/:id' element={<ProtectedRoute />}>
            <Route path="/result/:id" element={<Results />} />
          </Route>
        </Routes>
      </Flex>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </VStack>
  );
}

export default App;
