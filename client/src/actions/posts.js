import * as api from '../api';

// Action get to fetch all memos

export const getPosts = ()=>  async (dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

// action post for new memo
export const createPost = (newPost)=> async (dispatch)=>{
    try {
        const {data} = await api.createPost(newPost);
        dispatch({type:'CREATE' , payload:data});
    } catch (error) {
        console.log(error);
    }
}