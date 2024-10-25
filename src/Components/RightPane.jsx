import PropTypes from 'prop-types'
import '../styles/RightPane.css'

export default function RightPane ({generalDetails}) {

    return (
        <div className="right-pane">
            <div className='page-container'>
                <div className='preview'>
                   {
                    JSON.stringify(generalDetails)
                   }
                </div>            
                <div className='preview page2' >
                </div> 
            </div>
        </div>
    )
}

RightPane.propTypes = {
    generalDetails: PropTypes.object
}