import {  Input } from "@chakra-ui/react"
import PropTypes from 'prop-types'


export default function Skills ({generalDetails, handleGeneralDetails}) {

    
    return(
        <div className="skills-container">
            <h1>SKILLS</h1>
            <label> Programming Languages
                <Input placeholder="Java, Python, C++" value={generalDetails.skills.progLanguages.join(', ')} type="text" size='lg' id="progLanguages-field" onChange={handleGeneralDetails}/>
            </label>
            <label> Operating Systems
                <Input placeholder="Windows, MacOS, Mint" value={generalDetails.skills.os.join(', ')} type="text" size='lg' id="os-field" onChange={handleGeneralDetails}/>
            </label>
            <label> Databases
                <Input placeholder="MySQL, MongoDB" value={generalDetails.skills.db.join(', ')} type="text" size='lg' id="db-field" onChange={handleGeneralDetails}/>
            </label>
            <label> Tools
                <Input placeholder="VSCode, Git, Webpack" value={generalDetails.skills.webtools.join(', ')} type="text" size='lg' id="webtools-field" onChange={handleGeneralDetails}/>
            </label>
            <label> Others
                <Input placeholder="Photoshop, Slack" value={generalDetails.skills.othertools.join(', ')} type="text" size='lg' id="othertools-field" onChange={handleGeneralDetails}/>
            </label>
        </div>
    )
}


Skills.propTypes = {
    generalDetails: PropTypes.object,
    handleGeneralDetails: PropTypes.func
}