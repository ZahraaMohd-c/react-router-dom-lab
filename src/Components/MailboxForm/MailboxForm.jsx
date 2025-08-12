import { useState } from "react"
import { useNavigate } from "react-router"

const MailboxForm = (props) => {

    const [formData, setFormData] = useState({
        _id: '',
        boxSize: '',
        boxOwner: ''
    })
    const navigate = useNavigate()
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.addBox(formData)
        setFormData({
            _id: '',
            boxSize: '',
            boxOwner: ''
        })
        navigate('/mailboxes')
        console.log(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Boxholder:</label>
                <input name='boxOwner' id='boxOwner' value={formData.boxOwner} onChange={handleChange} />

                <label htmlFor="boxSize">Select a Box Size:</label>
                <select name='boxSize' id='boxSize'  onChange={handleChange}>
                    <option value={formData.boxSize='Small'}>Small</option>
                    <option value={formData.boxSize='Medium'}>Medium</option>
                    <option value={formData.boxSize='Large'}>Large</option>
                </select>

                <button type="submit">submit</button>
            </form>

        </>
    )
}

export default MailboxForm