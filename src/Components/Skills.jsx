import {  Input } from "@chakra-ui/react"
import PropTypes from 'prop-types'


export default function Skills ({skills, handleSkills}) {

    
    return(
        <>
            <h1>SKILLS</h1>
                <Input placeholder="Programming Languages" value={skills.progLanguages.join(', ')} type="text" size='lg' id="progLanguages-field" onChange={handleSkills}/>
        </>
    )
}


Skills.propTypes = {
    skills: PropTypes.object,
    handleSkills: PropTypes.func
}