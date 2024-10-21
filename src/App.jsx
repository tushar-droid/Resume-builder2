import './styles/App.css'
import LeftPane from './Components/LeftPane'
import RightPane from './Components/RightPane'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <>
        <LeftPane />
        <RightPane />
      </>
    </ChakraProvider>
  )
}

export default App
