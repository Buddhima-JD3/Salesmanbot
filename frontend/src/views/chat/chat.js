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
                {messages.map(({ id, text, resImg, /*photoURL, uid,*/ messageType }) => (
                    <div>
                        {/*<div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>*/}


                        <div key={id} className={`msg ${messageType === "user" ? 'sent' : 'received'} ${resImg || text.split("<br>").length > 0 ? 'img-reply' : ''}`}>
                            {/*<img className="profile" src={photoURL} alt="" />*/}
                            <p>

                                {
                                    text.split("<br>").map((item, index) => (
                                        <span>
                                             {index === 0 ? "" : "• "}
                                            {item.toString()}
                                            <br/>
                                        </span>
                                    ))
                                }

                                {resImg ? <div style={{width: "100%"}} className={"con-mid"}><img alt={"reply image"} src={resImg} className={"reply-img"} style={{margin: "0 20px 20px", borderRadius: "10px"}} /></div> : ""}
                            </p>
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
