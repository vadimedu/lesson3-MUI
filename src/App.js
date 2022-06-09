import React from 'react';
import { MessageList } from './MessageList.js';
import { useState } from 'react';
import { Author } from './constants.js';
import { Form } from './Form.js';
import { ChatListForm } from './ChatListForm.js';
import { ChatList } from './ChatList.js';

export const defMes = [{
  author: Author.user,
  text: 'hello',
}
];
// export const listArr = [{
//   id: 1,
//   TextList: 'First Chat',
// }]


export const App = () => {
  const [messages, setMessages] = useState(defMes);
  const [list, setList] = useState([])


  const addMessage = (m) =>{
  setMessages([...messages, m]);
  // console.log(messages);
};

  const addList = (l) => {
    setList([...list, l]);
     console.log(list);
  };

  return (
   <>
   <MessageList messages = {messages}/>
   <Form addMessage = {addMessage} messages={messages}></Form>
   <ChatListForm addList={addList} list={list}></ChatListForm>
   <ChatList list={list}></ChatList>
   </>

  );
}

