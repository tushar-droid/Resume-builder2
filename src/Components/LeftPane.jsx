import '../styles/LeftPane.css'
import PersonalDetails from './PersonalDetails'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ArrowBackIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Skills from './Skills'
import EducationDetails from './EducationDetails'
import WorkDetails from './WorkDetails'
import ProjectDetails from './ProjectDetails'
export default function LeftPane ({generalDetails, handleGeneralDetails, education, handleEducation, work, handleWork } ) {
    const [pageId, setPageId] = useState(0)

    const pageIdObj = {
        0: 
        {
            'page': <PersonalDetails generalDetails= {generalDetails} handleGeneralDetails={handleGeneralDetails}/>,
             'text': 'Personal Details'
            },
            
        1: 
        {
            'page': <Skills generalDetails= {generalDetails} handleGeneralDetails={handleGeneralDetails} />,
            'text': 'Skills',
            },
        2: 
        {
            'page': <EducationDetails education = {education} handleEducation = {handleEducation}/>,
            'text': 'Education Details',
            },
        3: 
        {
            'page': <WorkDetails work={work} handleWork={handleWork} />,
            'text': 'Work Experience',
            },
        
        4: 
        {
            'page': <ProjectDetails />,
            'text': 'Projects',
            }        
    }

    //const nextButton = pageIdObj[pageId + 1]['text']    
    let nextButton = ''
    let prevButton =''
    if(pageId != 4){
        nextButton = pageIdObj[pageId + 1]['text']
    }
    else{
        nextButton = pageIdObj[0]['text']        
    }
    if(pageId == 0){
        prevButton = pageIdObj[4]['text']
    }
    else{
        prevButton = pageIdObj[pageId - 1]['text']
        
    }
    const handleNextPage  = () => {
        if( pageIdObj[pageId].text != 'Projects' ){
            setPageId(pageId + 1 ) 
        }
        else{            
            setPageId(0)
        }
    }
    const handlePreviousPage  = () => {
        if( pageIdObj[pageId].text == 'Personal Details' ){
            setPageId(4) 
        }
        else{            
            setPageId(pageId - 1 ) 
        }
    }

    return (
        <div className="left-pane">
            <div className='input-container'>
                {pageIdObj[pageId]['page']}
                {/* <PersonalDetails generalDetails= {generalDetails} handleGeneralDetails={handleGeneralDetails} /> */}
                <div className='nav-buttons-container'>
                <Button leftIcon={<ArrowBackIcon />} color='#181C14' background='#ECDFCC' variant='solid'/* isDisabled= {true} */ onClick={handlePreviousPage}>
                    {prevButton}
                </Button>
                <Button rightIcon={<ArrowForwardIcon />} color='#181C14' background='#ECDFCC' variant='solid' onClick={handleNextPage}>
                    {nextButton}
                </Button>
                </div>
            </div>
        </div>
    )
}

LeftPane.propTypes = {
    generalDetails: PropTypes.object,
    handleGeneralDetails:PropTypes.func,
    education: PropTypes.array,
    handleEducation: PropTypes.func,
}