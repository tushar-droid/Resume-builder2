import './styles/App.css'
import LeftPane from './Components/LeftPane'
import RightPane from './Components/RightPane'
import { ChakraProvider } from '@chakra-ui/react'
import User from './Components/UserTemplate'
import {useState} from 'react'

function App() {
  const [generalDetails, setGeneralDetails] = useState(User.generalDetails)
  const [education, setEducation] = useState(User.education)
  const handleGeneralDetailChanges = (e) =>{
    const targetField = e.target.id
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
      case 'db-field': {
        const arr = e.target.value.split(', ')
        const tempdb= {...generalDetails.skills, db: arr}
        const temp = {...generalDetails, skills: tempdb}
        setGeneralDetails(temp)
        break
      }
      case 'webtools-field': {
        const arr = e.target.value.split(', ')
        const tempWebtools= {...generalDetails.skills, webtools: arr}
        const temp = {...generalDetails, skills: tempWebtools}
        setGeneralDetails(temp)
        break
      }
      case 'othertools-field': {
        const arr = e.target.value.split(', ')
        const tempTools= {...generalDetails.skills, othertools: arr}
        const temp = {...generalDetails, skills: tempTools}
        setGeneralDetails(temp)
        break
      }
    }    
  }
  const handleEducationChanges = (e) =>{
    const targetField = e.target.id
    const key = e.target.getAttribute('data-key')
    const indexToChange = education.findIndex((elem) => elem['id'] == key)

    
    switch(targetField) {
      case 'institution-field':{
        let temp = [...education]
        temp[indexToChange].institutionName = e.target.value        
        setEducation(temp)  
        break            
        }
    case 'location-field':{
      let temp = [...education]
      temp[indexToChange].location = e.target.value        
      setEducation(temp)              
      break
        } 
    case 'course-field':{
      let temp = [...education]
      temp[indexToChange].course = e.target.value        
      setEducation(temp)              
      break
        } 
    case 'graduationDate-field':{
      let temp = [...education]
      temp[indexToChange].graduationDate = e.target.value        
      setEducation(temp)              
      break
        }
    case 'gpa-field':{
      let temp = [...education]
      temp[indexToChange].gpa = e.target.value        
      setEducation(temp)              
      break
        }            
    case 'details-field':{
          let temp = [...education]
          temp[indexToChange].details = e.target.value        
          setEducation(temp)              
          break
            }                         
  }
}


  return (
    <ChakraProvider>
      <>
        <LeftPane generalDetails = {generalDetails} handleGeneralDetails = {handleGeneralDetailChanges} education ={education} handleEducation = {handleEducationChanges}/>
        <RightPane generalDetails = {generalDetails} education = {education} />
      </>
    </ChakraProvider>
  )
}

export default App;

