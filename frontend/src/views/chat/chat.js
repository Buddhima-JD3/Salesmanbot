import React, {useEffect, useRef, useState} from 'react'
import {auth, db} from '../../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import './chat.css'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    function scrollFunc() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    // eslint-disable-next-line no-use-before-define
    useEffect(() => {
        scrollFunc();
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div>
            <SignOut/>
            <div className="msgs">
                {messages.map(({ id, text, /*photoURL, uid,*/ messageType }) => (
                    <div>
                        {/*<div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>*/}
                        <div key={id} className={`msg ${messageType === "user" ? 'sent' : 'received'}`}>
                            {/*<img className="profile" src={photoURL} alt="" />*/}
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <SendMessage scroll={scroll}/>
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
