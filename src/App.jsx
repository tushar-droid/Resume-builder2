import './styles/App.css'
import LeftPane from './Components/LeftPane'
import RightPane from './Components/RightPane'
import { ChakraProvider } from '@chakra-ui/react'
import User from './Components/UserTemplate'
import {useState} from 'react'

function App() {
  const [generalDetails, setGeneralDetails] = useState(User.generalDetails)
  // const [skills, setSkills] = useState(User.generalDetails)
  const handleGeneralDetailChanges = (e) =>{
    const targetField = e.target.id
    console.log(targetField)
    switch(targetField){
      case 'firstName-field':{
        const temp = {...generalDetails, firstName: e.target.value}
        setGeneralDetails(temp)
        break;        
      }
      case 'lastName-field': {
        const temp = {...generalDetails, lastName: e.target.value}
        setGeneralDetails(temp)
        break;        
      }
      case 'email-field': {
        const temp = {...generalDetails, email: e.target.value}
        setGeneralDetails(temp)
        break;        
      }
      case 'phone-field': {
        const temp = {...generalDetails, phone: e.target.value}
        setGeneralDetails(temp)
        break;        
      }
      case 'address-field': {
        const temp = {...generalDetails, address: e.target.value}
        setGeneralDetails(temp)
        break;        
      }
      case 'git-field': {
        const link_temp = {...generalDetails.links, git: e.target.value}
        const temp = {...generalDetails, links: link_temp }
        setGeneralDetails(temp)
        break;        
      }
      case 'portfolio-field': {
        const link_temp = {...generalDetails.links, portfolio: e.target.value}
        const temp = {...generalDetails, links: link_temp }
        setGeneralDetails(temp)
        break;        
      }
      case 'progLanguages-field': {
        const arr = e.target.value.split(', ')
        const tempLang = {...generalDetails.skills, progLanguages: arr}

        const temp = {...generalDetails, skills: tempLang}
        setGeneralDetails(temp)
        break;
      }
      case 'os-field': {
        const arr = e.target.value.split(', ')
        const tempOs= {...generalDetails.skills, os: arr}
        const temp = {...generalDetails, skills: tempOs}
        setGeneralDetails(temp)
        break
      }

    }
    
  }




  return (
    <ChakraProvider>
      <>
        <LeftPane generalDetails = {generalDetails} handleGeneralDetails = {handleGeneralDetailChanges}/>
        <RightPane generalDetails = {generalDetails} />
      </>
    </ChakraProvider>
  )
}

export default App
