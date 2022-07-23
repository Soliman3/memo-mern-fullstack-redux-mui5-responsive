import React from "react";
import Post from "./Post/Post";
import './styles.css';
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";


export default function Posts({setCurrentId}) {
    const posts = useSelector((state)=>state.posts);
    console.log(posts);
  return (
    !posts.length ? <CircularProgress className="circular" />: (
        <Grid className="container" container alignItems="stretch" spacing={3}>
            {posts.map((post)=>(
                <Grid key={post._id} item xs={18} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                </Grid>
            ))};
        </Grid>
    )
  )
}
