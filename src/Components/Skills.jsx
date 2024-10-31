import {  Input } from "@chakra-ui/react"
import PropTypes from 'prop-types'


export default function Skills ({generalDetails, handleGeneralDetails}) {

    
    return(
        <>
            <h1>SKILLS</h1>
            <label> Programming Languages
                <Input placeholder="Java, Python, C++" value={generalDetails.skills.progLanguages.join(', ')} type="text" size='lg' id="progLanguages-field" onChange={handleGeneralDetails}/>
            </label>
            <label> Operating Systems
                <Input placeholder="Windows, MacOS, Mint" value={generalDetails.skills.os.join(', ')} type="text" size='lg' id="os-field" onChange={handleGeneralDetails}/>
            </label>
        </>
    )
}


Skills.propTypes = {
    generalDetails: PropTypes.object,
    handleGeneralDetails: PropTypes.func
}