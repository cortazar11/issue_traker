import axios from 'axios';
import history from '../history';
import {
        FETCH_ISSUES,
        CREATE_ISSUE,
        FETCH_ISSUE,
        DELETE_ISSUE,
        EDIT_ISSUE
                } from './types';

export const createIssue=(formValues)=>{
        return async function(dispatch){
            const response= await axios.post('/api/issues',formValues)
              
            dispatch({type: CREATE_ISSUE, payload: response.data})

            history.push('/issues')    
        }


}

export const fetchIssues=()=>{
        return async function(dispatch){
                const response= await axios.get('/api/issues')
                dispatch({type: FETCH_ISSUES, payload: response.data})

        }
}

export const fetchIssue=(id)=>{
        return async function(dispatch){
                const response=await axios.get(`/api/issues/${id}`)
                dispatch({type: FETCH_ISSUE, payload: response.data})
        }
}

export const editIssue=(id, formValues)=>{
        return async function(dispatch){
                const response= await axios.patch(`/api/issues/${id}`, formValues)
                dispatch({type: EDIT_ISSUE, payload: response.data});
                
        }
        
}

export const deleteIssue=(id)=>{
        return async function(dispatch){
                await axios.delete(`/api/issues/${id}`)
                dispatch({type: DELETE_ISSUE, payload: id})
        }
}