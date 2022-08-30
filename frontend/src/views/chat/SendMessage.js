import React, { useState } from 'react'
import { db, auth } from '../../firebase'
import firebase from 'firebase/compat/app';
import { Input, Button } from '@material-ui/core'
import Speechtotext from "../speech-to-text/speechtotext";
import TranscribeOutput from "../speech-to-text/utils/TranscribeOutput";

export default function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    function scrollFunc() {
        window.scrollTo(0, document.body.scrollHeight);
    }



    // console.log(scroll);
    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        scrollFunc();


        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>

                <div className="sendMsg">
                    <Input id="chatInput" style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', maxWidth: '200px'}} type="submit">Send</Button>
                    <Speechtotext></Speechtotext>
                </div>
            </form>
        </div>
    )
}


