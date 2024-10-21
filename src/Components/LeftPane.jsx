import '../styles/LeftPane.css'
import PersonalDetails from './PersonalDetails'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ArrowBackIcon } from '@chakra-ui/icons'
export default function LeftPane () {
    return (
        <div className="left-pane">
            <div className='input-container'>
                <PersonalDetails />
                <div className='nav-buttons-container'>
                <Button leftIcon={<ArrowBackIcon />} color='#181C14' background='#ECDFCC' variant='solid' isDisabled= {true}>
                    Work
                </Button>
                <Button rightIcon={<ArrowForwardIcon />} color='#181C14' background='#ECDFCC' variant='solid'>
                    Education
                </Button>
                </div>
            </div>
        </div>
    )
}