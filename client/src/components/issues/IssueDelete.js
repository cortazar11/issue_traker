import React from 'react';
import {connect} from 'react-redux';
import {fetchIssue, deleteIssue} from '../../actions';

class IssueDelete extends React.Component {

    componentDidMount(){
        this.props.fetchIssue(this.props.match.params.id)
        this.props.deleteIssue(this.props.match.params.id)
    }
    

    render(){
        return (
            <div>
                <h3>Record {this.props.match.params.id} deleted</h3>
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
    deleteIssue
})(IssueDelete);