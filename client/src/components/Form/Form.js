import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import FileBase from 'react-file-base64';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


export default function Form({currentId, setCurrentId}) {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const post = useSelector((state)=> currentId? state.posts.find((p)=> p._id === currentId): null);
    const dispatch = useDispatch(); // for dispatch createPost action in handleSubmit
    useEffect(()=>{
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData));
        }else{
            dispatch(createPost(postData));
        }
        clear();
        
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    return (
        <Paper className='paper' >
            <Box autoComplete='off' noValidate className="form root " onSubmit={handleSubmit} >
                <Typography variant='h6' align='center'>{currentId? 'Editing': 'Create'} a Memory</Typography>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }} noValidate autoComplete="off" >
                    <TextField className='inputfield' name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    <TextField className='inputfield' name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField className='inputfield' name='message' variant='outlined' label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField className='inputfield' name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <div className='fileInput'>
                        <FileBase type="file" multible={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div>
                    <Box >
                        <Button variant="contained" onClick={handleSubmit} display="flex" fullWidth>Add New Memory</Button>
                        <br />
                        <br />
                        <Button variant="contained" onClick={clear} display="flex" fullWidth color="secondary">Clear</Button>
                    </Box>
                </Box>
            </Box>

        </Paper>
    )
}
