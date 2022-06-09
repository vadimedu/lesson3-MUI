import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

export const ChatListForm = ({ addList, id = 1}) =>{
    const idList = nanoid();
    const [textList, setList] = useState('');
        
    const makeSubmit = (event) => {
        
        event.preventDefault();
        console.log()
        addList({
            id: idList,
            textList,
        });
        setList('');
    };

    return  <form onSubmit={makeSubmit}>
        
        <TextField id="standard-basic" label ="enter name of your chat" variant="standard" 
        type="text" value ={textList} onChange={event => setList(event.target.value)}/>
        <Button 
        variant="contained" disableElevation
        type='click'
        style ={{height: '48px'}}>
  Submit
</Button>
    </form>
}




