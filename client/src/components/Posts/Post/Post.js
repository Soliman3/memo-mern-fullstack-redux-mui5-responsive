import React from 'react';
import './styles.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';

export default function Post({ post, setCurrentId }) {
    return (
        <Card className='card'>
            <CardMedia className='media' image={post.selectedFile} title={post.title} />
            <div className='overlay'>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className='overlay2'>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className='details' >
                <Typography variant='body2' color="textSecondary">{post.tags.map((a) => `#${a} `)}</Typography>
            </div>
            <Typography className="title" variant='h5' gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant='h5' gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className='cardActions'>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <ThumbUpIcon fontSize='small'/>
                        like
                        {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <DeleteIcon fontSize='small'/>
                        Delete
                </Button>
            </CardActions>
        </Card>
    )
}
