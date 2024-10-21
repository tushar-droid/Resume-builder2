import { Input } from "@chakra-ui/react"
import { useState } from "react"
export default function PersonalDetails (){
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phnum, setPhnum] = useState('')
    const [address, setAddress] = useState('')
    const [gitLink, setGitlink] = useState('')
    const [portfolioLink, setPortfolioLink] = useState('')

    return(
        <div className="personal-details-container">
            <div className="name-container">
                <Input size='lg' value={fname} placeholder="First Name" onChange={e => setFname(e.target.value)} />
                <Input placeholder="Last Name" size='lg' value={lname} onChange={e => setLname(e.target.value)}/>                                
            </div>
            <Input placeholder="Email" type="email" size='lg' value={email} onChange={e => setEmail(e.target.value)}/>
            <Input placeholder="Phone Number" type="tel" size='lg' value={phnum} onChange={e => setPhnum(e.target.value)}/>
            <Input placeholder="Address" type="text" size='lg' value={address} onChange={e => setAddress(e.target.value)}/>
            <Input placeholder="Github Link" type="text" size='lg' value={gitLink} onChange={e => setGitlink(e.target.value)}/>
            <Input placeholder="Portfolio Link" type="text" size='lg' value={portfolioLink} onChange={e => setPortfolioLink(e.target.value)}/>
        </div> 
    )
}