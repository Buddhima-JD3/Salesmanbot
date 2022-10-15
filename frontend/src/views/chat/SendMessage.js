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
                console.log(res.data.length, res, res.data, inputMsg)
                let msgType = "bot";

                for (let i = 0; i < res.data.length; i++) {
                    let replyData = res.data[i]
                    if (replyData.hasOwnProperty('text')) {

                        let resImg = "";
                        let replyText = res.data[i].text;
                        await dbSave(replyText, resImg);

                    } else if (replyData.hasOwnProperty('image')) {

                        let replyText = "";
                        let resImg = res.data[i].image;
                        await dbSave(replyText, resImg);

                    }
                }

                // if (res.data.length === 3) {
                //     let resImg = res.data[1].image;
                //     await dbSave(resImg);
                // } else {
                //     let resImg = "";
                //     await dbSave(resImg);
                // }

                // await db.collection('messages').add({
                //     text: inputMsg,
                //     photoURL,
                //     resImg: resImg,
                //     uid,
                //     messageType: msgType,
                //     createdAt: firebase.firestore.FieldValue.serverTimestamp()
                // })

                async function dbSave (replyText, resImg) {
                    await db.collection('messages').add({
                        text: replyText,
                        photoURL,
                        resImg: resImg,
                        uid,
                        messageType: msgType,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    })
                }

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


