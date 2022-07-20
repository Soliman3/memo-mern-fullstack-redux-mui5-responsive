import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import './styles.css';

export default function Form() {
    const [postData , setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    })
    const handleSubmit = ()=>{

    }

    const clear =()=>{

    }
  return (
      <Paper className='paper'>
        <form autoComplete='off' noValidate className='form root' onSubmit={handleSubmit} >
            <Typography variant='h6' align='center'>Create a Memory</Typography>
            <TextField className='inputfield' name='creator'  label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
            <TextField className='inputfield' name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
            <TextField className='inputfield' name='message' variant='outlined' label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
            <TextField className='inputfield' name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
            <div className='fileInput'>
                <FileBase type="file" multible={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64 })} />
            </div>
            <Button className='buttonSubmit' variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
            <br/>
            <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
        </form>

      </Paper>
  )
}
