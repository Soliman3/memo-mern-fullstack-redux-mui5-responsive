import React from 'react';
import './styles.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

export default function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();
    return (
        <Card className='card' sx={{ borderRadius: '15px' }}>
            <CardMedia className='media' image={post.selectedFile} title={post.title} />
            <div className='overlay'>
                <Typography variant='h5'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className='overlay2'>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='medium' align="left" />
                </Button>
            </div>
            <div className='details' >
                <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className="title" variant='h5' gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant='body2' color="textSecondary" component="p" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className='cardActions'>
                <Button size='small' color='primary' onClick={()=>dispatch(likePost(post._id))}>
                    <ThumbUpIcon fontSize='small'/>
                    &nbsp;like &nbsp;
                        {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small'/>
                        Delete
                </Button>
            </CardActions>
        </Card>
    )
}
