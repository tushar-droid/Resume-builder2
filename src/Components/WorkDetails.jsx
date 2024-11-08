
import { Input, Textarea, Button } from "@chakra-ui/react"
import PropTypes from 'prop-types'


export default function WorkDetails ({work, handleWork}) {
    return(
        <div className="work-container">
            <h1>WORK</h1>            
            <ul>
                {
                    work.map((elem) =>{
                        return (
                            <li key={elem['id']}>   
                                <Input value={elem['position']} onChange={handleWork} id={'position-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['company']} onChange={handleWork} id={'company-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['startDate']} onChange={handleWork} id={'startDate-field'} data-key={elem['id']}>
                                </Input>
                                <Input value={elem['endDate']} onChange={handleWork} id={'endDate-field'} data-key={elem['id']}>
                                </Input>                                
                                <Textarea value={elem['duties']} onChange={handleWork} id={'duties-field'} data-key={elem['id']}>                                
                                </Textarea>  
                                <Button id= 'delete-btn' onClick={handleWork} data-key={elem['id']}>Delete</Button>                                    
                            </li>
                        )
                    })
                }   
            </ul>
            <Button id= 'Add-btn' onClick={handleWork}> Add new</Button>
        </div>
    )
}

WorkDetails.propTypes = {    
    work: PropTypes.array,
    handleWork: PropTypes.func,
}