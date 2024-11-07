import { Input, Textarea, Button } from "@chakra-ui/react"
import PropTypes from 'prop-types'

export default function EducationDetails ({education, handleEducation}) {
    
    
    return(
        <div className="education-contianer">
            <h1>EDUCATION</h1>            
            <ul>
                {
                    education.map((elem) =>{
                        return (
                            <li key={elem['id']}>   
                                <Input value={elem['institutionName']} onChange={handleEducation} id={'institution-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['location']} onChange={handleEducation} id={'location-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['course']} onChange={handleEducation} id={'course-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['graduationDate']} onChange={handleEducation} id={'graduationDate-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['gpa']} onChange={handleEducation} id={'gpa-field'} data-key={elem['id']}>
                                </Input>
                                <Textarea value={elem['details']} onChange={handleEducation} id={'details-field'} data-key={elem['id']}>                                </Textarea>  
                                <Button id= 'delete-btn' onClick={handleEducation} data-key={elem['id']}>Delete</Button>                                    
                            </li>
                        )
                    })
                }
            </ul>
            <Button> Add new</Button>
        </div>
    )
}

EducationDetails.propTypes = {    
    education: PropTypes.array,
    handleEducation: PropTypes.func,
}