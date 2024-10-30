import {  Input } from "@chakra-ui/react"
import PropTypes from "prop-types"

export default function PersonalDetails ({generalDetails, handleGeneralDetails}){


    return(
        <div className="personal-details-container">
            <h3>Project Details</h3>
            <div className="name-container">
                <Input size='lg' value={generalDetails.firstName} placeholder="First Name" onChange={handleGeneralDetails} id="firstName-field" />
                <Input placeholder="Last Name" size='lg' value={generalDetails.lastName} onChange={handleGeneralDetails} id="lastName-field"/>                                
            </div>
            <Input placeholder="Email" type="email" size='lg' value={generalDetails.email} onChange={handleGeneralDetails} id="email-field"  />
            <Input placeholder="Phone Number" type="tel" size='lg' value={generalDetails.phone} onChange={handleGeneralDetails} id="phone-field"/>
            
            <Input placeholder="Address" type="text" size='lg' value={generalDetails.address} onChange={handleGeneralDetails} id="address-field"/>
            <Input placeholder="Github Link" type="text" size='lg' value={generalDetails.links.git} onChange={handleGeneralDetails} id="git-field" />                    
            <Input placeholder="Portfolio Link" type="text" size='lg' value={generalDetails.links.portfolio} onChange={handleGeneralDetails} id="portfolio-field" />

        </div> 
    )
}

PersonalDetails.propTypes = {
    generalDetails: PropTypes.object,
    handleGeneralDetails: PropTypes.func
}