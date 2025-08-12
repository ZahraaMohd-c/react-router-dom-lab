import { useParams } from "react-router";

const MailboxDetails = (props) => {

    const params = useParams()
    const selectedBox = props.mailboxes.find((mailbox) =>
        mailbox._id === Number(params.mailboxId)
    )
    const selectedLetters = props.letters.filter((letter) => (
        letter.mailboxId === Number(params.mailboxId)
    ))

    return (
        <>
            <h2>Details</h2>
            <p>Box holder: {selectedBox.boxOwner}</p>
            <p>Box size: {selectedBox.boxSize}</p>

            <h2>Letters</h2>
            {selectedLetters.map(letter => {
                return (
                    <>
                        <p>{`Dear ${letter.recipient}`}</p>
                        <p>{letter.message}</p>
                    </>

                )

            })}

        </>
    )
}

export default MailboxDetails