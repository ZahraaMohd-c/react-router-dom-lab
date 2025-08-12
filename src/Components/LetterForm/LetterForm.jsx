import { useState } from "react"
import { useNavigate } from "react-router"

const LetterForm = (props) => {

    const [formData, setFormData] = useState({
        mailboxId: 0,
        recipient: '',
        message: ''

    })
    const navigate = useNavigate()


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addLetter(formData)
        setFormData({
            mailboxId: 0,
            recipient: '',
            message: ''

        })
        navigate(`/mailboxes/${formData.mailboxId}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select A Mailbox </label>
                <select id='mailboxId' name="mailboxId" onChange={handleChange}>
                    {props.mailboxes.map(box => {
                        return <option key={box._id} value={formData.mailboxId = box._id}>{`Mailbox ${box._id}`}</option>

                    })}

                </select>

                <label htmlFor="recipient">Recipient </label>
                <input id="recipient" name="recipient" value={formData.recipient} onChange={handleChange}></input>

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>

                <button type="submit">Submit</button>

            </form>
        </>
    )

}

export default LetterForm