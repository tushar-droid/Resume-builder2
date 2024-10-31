import PropTypes from 'prop-types'
import '../styles/RightPane.css'

export default function RightPane ({generalDetails, education}) {

    return (
        <div className="right-pane">
            <div className='page-container'>
                <div className='preview'>
                    {/* {JSON.stringify(education)} */}
                    <ul>
                    {
                        education.map ((elem) =>{                            
                           return( <li key={elem['id']}>{
                            <>
                                <h1>    
                                    {elem['institutionName']}                                
                                </h1>
                                <h2> {elem['location']}</h2>                            
                            </>
                            }</li>)
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


