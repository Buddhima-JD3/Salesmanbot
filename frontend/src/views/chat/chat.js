import React, {useEffect, useRef, useState} from 'react'
import {auth, db} from '../../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import './chat.css'
import axios from "axios";
import {CircularProgress} from "@material-ui/core";

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const [buyLoading, setButLoading] = useState(false);
    const [buyId, setBuyId] = useState();

    function scrollFunc() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    const clickBuy = (product, category) => {
        setButLoading(true);
        setBuyId(product + category);
        console.log("Product: " + product);
        console.log("Category: " + category);

        axios.post('http://localhost:5000/savePurchase', {
            message: [product, category]
        }, {
            headers: {'Access-Control-Allow-Credentials': true}
        }).then(res => {
            setButLoading(false);
            console.log(res);
        }).catch(err => {
            setButLoading(false);
            console.log(err);
        })
    }

    // eslint-disable-next-line no-use-before-define
    useEffect(() => {
        scrollFunc();
        db.collection('messages').orderBy('createdAt').onSnapshot(snapshot => {
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
                                            {
                                                item.toString().split("<button>").length > 1 ?
                                                    (<>{item.toString().split("<button>")[0]}
                                                        <div style={{width: '100%', marginTop: '35px'}} className={'con-mid'}>
                                                        <button style={{marginLeft: '15px', display: 'block', width: '50%', fontSize: '22px', color: '#fff'}} onClick={() => clickBuy(
                                                            item.toString().split("<button>")[1].split(',')[0],
                                                            item.toString().split("<button>")[1].split(',')[1]
                                                        )} className={'btn btn-primary'}>
                                                            {
                                                                buyId === item.toString().split("<button>")[1].split(',')[0]+item.toString().split("<button>")[1].split(',')[1] ?
                                                                buyLoading === true ? <CircularProgress size={'2rem'} style={{color: '#fff'}}/> : "Purchased" : "Buy"}
                                                        </button>
                                                            </div>
                                                    </>)
                                                     :
                                                item.toString()
                                            }
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
