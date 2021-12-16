import { useState } from 'react';
import Header from './components/Header'
import Message from './components/Message'

function AppFunc() {
 // Learn how to save state/variables
 const [message, setMessage] = useState('')

 // Functions go here
function handleMessage(text){
  setMessage(text)
}

 return (
  <div>
   <Header message={message}/>
   <Message message={message} handleMessage={handleMessage} />
  </div>
 )
}

export default AppFunc