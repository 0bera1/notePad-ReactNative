import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/JsonServer";

export const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogPost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ?
                    action.payload : blogPost
            })
        default:
            return state;
        case 'delete_blogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)


    }
};
const addBlogPosts = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        if (callback) { callback() }
    };
};
const editBlogPosts = (dispatch) => {
    // setBlogPosts([...blogPosts, { title: 'vue.js' }]);
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content }) 
        dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
        if (callback) { callback() }
    };
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogposts', payload: response.data })

    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogPost', payload: id });
    };
}
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPosts, deleteBlogPost, editBlogPosts, getBlogPosts },
    []
);