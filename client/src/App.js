import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from '@mui/material';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import SearchAppBar from "./components/Header/Header";


function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <Container maxWidth='lg'>
      <SearchAppBar className="AppBar" />
      <br />
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
