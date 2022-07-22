import * as api from '../api';

// Get Action  to fetch all memos...
export const getPosts = ()=>  async (dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
};

// Create Action...
export const createPost = (newPost)=> async (dispatch)=>{
    try {
        const {data} = await api.createPost(newPost);
        dispatch({type:'CREATE' , payload:data});
    } catch (error) {
        console.log(error);
    }
};

// Update Action...
export const updatePost =(id,post)=>async (dispatch)=>{
    try {
        const {data}= await api.updatePost(id,post);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
};

// Delete Action...
export const deletePost = (id)=> async (dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}

// Like Action...
export const likePost = (id)=>async (dispatch)=>{
    try {
        const {data}= await api.likePost(id);
        dispatch({type: 'LIKE', payload: data})
    } catch (error) {
        console.log(error)
    }
}