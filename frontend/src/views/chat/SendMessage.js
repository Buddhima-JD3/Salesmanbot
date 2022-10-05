import React, {useEffect, useState} from 'react'
import {auth, db} from '../../firebase'
import firebase from 'firebase/compat/app';
import {Button, Input} from '@material-ui/core'
import Speechtotext from "../speech-to-text/speechtotext";
import axios from "axios";

export default function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')

    function scrollFunc() {
        window.scrollTo(0, document.body.scrollHeight);
    }


    async function sendRasaMessage(e) {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        let inputMsg = document.getElementById("chatInput").value.toString();
        let msgType = "user";

        await db.collection('messages').add({
            text: inputMsg,
            photoURL,
            uid,
            messageType: msgType,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(async () => {
            await axios.post('http://localhost:5005/webhooks/rest/webhook',
                {
                    "sender": "test_user",
                    "message": inputMsg
                }).then(async (res) => {
                let inputMsg = res.data[0].text;
                let msgType = "bot";

                await db.collection('messages').add({
                    text: inputMsg,
                    photoURL,
                    uid,
                    messageType: msgType,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })

            }).catch(err => {
                console.log(err);
            })
        }).catch(err2 => {
            console.log(err2);
        })

        setMsg('')
        document.getElementById("chatInput").value = "";
        scrollFunc();
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }

    // eslint-disable-next-line no-use-before-define
    useEffect(() => {
        scrollFunc();
    }, [])

    return (
        <div>
            {/*<form onSubmit={sendMessage}>*/}
            <form onSubmit={sendRasaMessage}>

                <div className="sendMsg">
                    <Input id="chatInput" style={{
                        width: '78%',
                        fontSize: '15px',
                        fontWeight: '550',
                        marginLeft: '5px',
                        marginBottom: '-3px'
                    }} placeholder='Message...' type="text"/>
                    {/*<Input id="chatInput" style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />*/}
                    <Button style={{width: '18%', fontSize: '15px', fontWeight: '550', maxWidth: '200px'}}
                            type="submit">Send</Button>
                    <Speechtotext></Speechtotext>
                </div>
            </form>
        </div>
    )
}


