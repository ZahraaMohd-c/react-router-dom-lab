import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const params = useParams()
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(params.mailboxId)
    )

    return (
        <>
            <h2>Details</h2>
            <p>Box holder: {selectedBox.boxOwner}</p>
            <p>Box size: {selectedBox.boxSize}</p>

        </>
    )
}

export default MailboxDetails