import React from 'react';
import {connect} from 'react-redux';
import {fetchIssue} from '../../actions';

class IssueShow extends React.Component {
    
    componentDidMount(){
        this.props.fetchIssue(this.props.match.params.id)
    }

        render(){
            if(!this.props.issue){
                return <div>Loading...</div>
            }
            
            const {_id, title, text, created, assigned}= this.props.issue
            return (
                <div>
                    {'{'}
                        "_id":{_id},
                        "issue_title":{title},
                        "issue_text":{text},
                        "created_By":{created},
                        "assigned_to":{assigned}
                    {'}'}  
                </div>
            )
        }
        
    
    
}

const mapPropsToState=(state,ownProps)=>{
    console.log('ownProps', ownProps)
    return {
        issue: state.issues[ownProps.match.params.id]
    }
}

export default connect(mapPropsToState,{
    fetchIssue
})(IssueShow);