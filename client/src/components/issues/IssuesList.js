import React from 'react';
import {connect} from 'react-redux';
import {fetchIssues} from '../../actions';

class IssuesList extends React.Component {

    componentDidMount(){
       this.props.fetchIssues()
     }

     renderList(){
        return this.props.issues.map(issue=>{
            return (
                
                <div key={issue._id}>
                    {'{'} 
                        "_id":{issue._id},
                        "issue_title":{issue.title},
                        "issue_text":{issue.text},
                        "created_By":{issue.created},
                        "assigned_to":{issue.assigned}
                    {'}'}
                </div>
                
            )
        })
     }

    render(){
        return (
            <div>[{this.renderList()}]</div>
        )
    }
    
}

const mapPropsToState=(state)=>{
    
    return {
        issues: Object.values(state.issues)
        
    }
}

export default connect(mapPropsToState,{
    fetchIssues
})(IssuesList);