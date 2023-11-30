import React, { useEffect, useState } from 'react'

const Chat = ({room, name , socket }) => {
    const [currentMessage,setCurrentMessage]=useState("");
    const [messageList, setMessageList]=useState([]);

    const sendMessage= async (e)=>{
        if(currentMessage!==""){
            const messageData={
                room : room,
                username: name,
                message : currentMessage,
                time : new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()+":"+new Date(Date.now()).getSeconds()
            }
            await socket.emit("send_message",messageData)
        }
    }


    useEffect(()=>{
       socket.on("recieve_message",(messageData)=>{
        setMessageList((prevMessageList)=>{
            return [...prevMessageList,messageData.message];
        })
       });

    },[socket])    

  return (
    <div className='chat-window'>
        <div className="chat-header">
            <p>Live Chat</p>
        </div>
        <div className="chat-body">
            {messageList.map((_,i)=>{
                return <h2> {_}</h2>
            })}
        </div>
        <div className="chat-footer">
            <input type="text" placeholder='Hey ...' onChange={(e)=>setCurrentMessage(e.target.value)} />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat;
