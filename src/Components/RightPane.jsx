import PropTypes from 'prop-types'
import '../styles/RightPane.css'

// eslint-disable-next-line no-unused-vars
export default function RightPane ({generalDetails, education, work}) {
    
    

    return (
        <div className="right-pane">
            <div className='page-container'>
                <div className='preview'>
                    {/* {JSON.stringify(education)} */}
                    <ul>
                    {
                        work.map ((elem) =>{                            
                           return( 
                            <li key={elem['id']}>{
                                <>
                                    <h1>{elem['position']}</h1>
                                    <h2> {elem['company']}</h2>    
                                    <h2> {elem['startDate']}</h2>                            
                                    <h2> {elem['endDate']}</h2>  
                                    {/* <h2> {elem['details']}</h2> */}
                                    {/* <ul className='temp'>
                                        {elem['details'].split('\n').map((d, index) => <li key={index}>{d}</li>)}
                                    </ul> */}

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
    education: PropTypes.array
}


