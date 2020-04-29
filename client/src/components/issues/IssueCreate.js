import React from 'react';
import {connect} from 'react-redux';
import {createIssue} from '../../actions';
import Form from '../Form';

class IssueCreate extends React.Component {

    onSubmit=(formValues)=>{
        
              this.props.createIssue(formValues)
          }
    
    render(){
        return (
            <div>
                <h3>Create a Issue</h3>
                <Form onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, {
    createIssue
})(IssueCreate)