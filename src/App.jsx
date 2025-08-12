import { BrowserRouter as Router, Routes, Route, redirect } from "react-router"
import { useState } from "react"

import NavBar from "./Components/NavBar/NavBar"
import MailboxList from "./Components/MailboxList/MailboxList"
import MailboxForm from "./Components/MailboxForm/MAilboxForm"
import MailboxDetails from "./Components/MailboxDetails/MailboxDetails"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newBox) => {
    newBox._id = mailboxes.length +1
    setMailboxes([...mailboxes, newBox])
    
  }


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h1>Mailbox Not Found!</h1>} />
      </Routes>
    </ Router>
  )

}

export default App
