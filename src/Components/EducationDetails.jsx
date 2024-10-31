import { Input } from "@chakra-ui/react"
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
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

EducationDetails.propTypes = {    
    education: PropTypes.array,
    handleEducation: PropTypes.func,
}