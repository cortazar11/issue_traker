import _ from 'lodash';
import {
    FETCH_ISSUES,
    CREATE_ISSUE,
    FETCH_ISSUE,
    DELETE_ISSUE,
    EDIT_ISSUE
} from '../actions/types'


export default (state={},action)=>{
        switch(action.type){
            case FETCH_ISSUES:
                // return {...state, ..._.mapKeys(action.payload, 'id')}
                return action.payload
            case FETCH_ISSUE:
                return {...state, [action.payload._id]:action.payload}
            case CREATE_ISSUE:
                return {...state, [action.payload._id]: action.payload}
            case EDIT_ISSUE:
                return {...state, [action.payload._id]: action.payload}
            case DELETE_ISSUE:
                return _.omit(state,action.payload)
            default:
                return state
        }
}