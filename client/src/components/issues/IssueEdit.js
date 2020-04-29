import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';

import {fetchIssue, editIssue} from '../../actions';
import Form from '../Form';

class IssueEdit extends React.Component {
    componentDidMount(){
        this.props.fetchIssue(this.props.match.params.id)
    }

    onSubmit=(formValues)=>{
           
            this.props.editIssue(this.props.match.params.id,formValues)
    }
    
    render(){
        
        if(!this.props.issue){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Issue</h3>
                <Form 
                    initialValues={_.pick(this.props.issue,'title','text','created','assigned','status')}
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
    
}

const mapPropsToState=(state, ownProps)=>{

    return {
        issue: state.issues[ownProps.match.params.id]
    }
}

export default connect(mapPropsToState,{
    fetchIssue,
    editIssue
}) (IssueEdit);