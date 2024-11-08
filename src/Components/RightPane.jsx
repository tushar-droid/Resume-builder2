import PropTypes from 'prop-types'
import '../styles/RightPane.css'

// eslint-disable-next-line no-unused-vars
export default function RightPane ({generalDetails, education, work, project}) {
    
    

    return (
        <div className="right-pane">
            <div className='page-container'>
                <div className='preview'>
                    {/* {JSON.stringify(education)} */}
                    <ul>
                    {
                        project.map ((elem) =>{                            
                           return( 
                            <li key={elem['id']}>{
                                <>
                                    {/* <h1>{elem['projectName']}</h1>
                                    <h2> {elem['technologies']}</h2>    */}

                                    {/*                                      
                                    <h2> {elem['startDate']}</h2>                            
                                    <h2> {elem['endDate']}</h2>   */}


                                    <ul className='temp'>
                                        {elem['projectDetails'].split('\n').map((d, index) => <li key={index}>{d}</li>)}
                                    </ul>

                                </>
                            }
                            </li>
                            
                        )
                        } )
                    }
                    </ul>
                </div>            
                <div className='preview page2' >
                </div> 
            </div>
        </div>
    )
}

RightPane.propTypes = {
    generalDetails: PropTypes.object,
    education: PropTypes.array,
    work: PropTypes.array,
    project: PropTypes.array,
}


