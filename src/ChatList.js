import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ChatList = ({ list }) => {
    return  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', wordBreak: 'break-word', }}>
        {list.map((l, idx) => {
            
            return <ListItem key = {idx}>
                    <ListItemText>ИМЯ ЧАТА: {l.textList}  </ListItemText>
                    <ListItemText>ID ЧАТА: {l.id}  </ListItemText>
                   </ListItem>
         
        })}
    </List>
}



