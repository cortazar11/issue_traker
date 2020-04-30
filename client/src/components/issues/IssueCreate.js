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
                <h3>User Stories</h3>
                <ol>
                        <li>Prevent cross site scripting-XSS attack-.</li>
                        <li>I can POST /api/issues/project with form data containing required issue_title, issue_text, created_by, and optional assigned_to and status_text.</li>
                        <li>The object saved (and returned) will include all of those fields (blank for optional no input) and also include created_on(date/time), updated_on(date/time), open(boolean, true for open, false for closed), and _id.</li>
                        <li>I can PUT /api/issues/project with a _id and any fields in the object with a value to object said object. Returned will be 'successfully updated' or 'could not update '+_id. This should always update updated_on. If no fields are sent return 'no updated field sent'.</li>
                        <li>I can DELETE /api/issues/project with a _id to completely delete an issue. If no _id is sent return '_id error', success: 'deleted '+_id, failed: 'could not delete '+_id.</li>
                        <li>I can GET /api/issues/project for an array of all issues on that specific project with all the information for each issue as was returned when posted.</li>
                        <li>I can filter my get request by also passing along any field and value in the query(ie. /api/issues/project?open=false). I can pass along as many fields/values as I want.</li>
                        <li>All 11 functional tests are complete and passing.</li>
                </ol>
                    
                <h3>Routes</h3>
                    <p>"/" create issue </p>
                    <p>"/issues"  list all issues </p>
                    <p>"/issues/id" show an issue</p>
                    <p>"/issues/edit/id" edit a issue in the form and update</p>
                    <p>"/issues/delete/id" delete a issue </p>
                   
                <div>
                    <h3>Create a Issue</h3>
                    <Form onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    createIssue
})(IssueCreate)