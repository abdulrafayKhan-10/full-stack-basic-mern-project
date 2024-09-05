import { Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreatePage from './pages/CreatePage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  
  return (
    <Box minH={'100vh'} bg={useColorModeValue('grey.100', 'gray.900')}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
