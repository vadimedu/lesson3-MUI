import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import PropTypes from 'prop-types';


export const MessageList = ({ messages }) => {
    return  <ul>
        {messages.map((m, idx) => {
         if (m.author === 'USER') {
            return <li key = {idx}>
             
            <Avatar sx={{ bgcolor: green[500]  }} variant="rounded"  style={{ minHeight: '50px', width: '150px', 
            marginBottom: '5px', height: '100%', wordBreak: 'break-word', padding: '5px', marginTop: '5px'}}>
                   {m.author}: {m.text}
            </Avatar>     
       </li>
         } else {
            return <li key = {idx}>
             
            <Avatar sx={{ bgcolor: deepOrange[500]  }} variant="rounded"  style={{width: '150px', 
            marginBottom: '5px', marginLeft: '92px'}}>
                   {m.author}: {m.text}
            </Avatar>     
       </li>
         }
         
        })}
    </ul>
}


MessageList.propTypes = {
    messages: PropTypes.array,
    
  };