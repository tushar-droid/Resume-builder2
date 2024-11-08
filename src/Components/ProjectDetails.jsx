import { Input, Textarea, Button } from "@chakra-ui/react"
import PropTypes from 'prop-types'

export default function ProjectDetails ({project, handleProject}) {
    return(
        <div className="project-container">
            <h1>PROJECTS</h1>            
            <ul>
                {
                    project.map((elem) =>{
                        return (
                            <li key={elem['id']}>   
                                <Input value={elem['projectName']} onChange={handleProject} id={'projectName-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['technologies']} onChange={handleProject} id={'technologies-field'} data-key={elem['id']}>
                                </Input>                                                                
                                <Textarea value={elem['projectDetails']} onChange={handleProject} id={'projectDetails-field'} data-key={elem['id']}>                                
                                </Textarea>  
                                <Button id= 'delete-btn' onClick={handleProject} data-key={elem['id']}>Delete</Button>                                    
                            </li>
                        )
                    })
                }   
            </ul>
            <Button id= 'Add-btn' onClick={handleProject}> Add new</Button>
        </div>
    )
}


ProjectDetails.propTypes = {    
    project: PropTypes.array,
    handleProject: PropTypes.func,
}