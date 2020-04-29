import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Form from './Form';
import IssueCreate from './issues/IssueCreate';
import IssueDelete from './issues/IssueDelete';
import IssueEdit from './issues/IssueEdit';
import IssueShow from './issues/IssueShow';
import IssuesList from './issues/IssuesList';

const App=()=>{
        return(
            <div>
               
                <BrowserRouter>
                    <h1>ISQA_4 - Issue Tracker</h1>
                    <Route path="/" exact component={IssueCreate}/>
                    <Route path="/issues" exact component={IssuesList}/>
                    <Route path="/issues/:id" exact component={IssueShow}/>
                    <Route path="/issues/edit/:id" exact component={IssueEdit}/>
                    <Route path="/issues/delete/:id" exact component={IssueDelete}/>
                </BrowserRouter>
            </div>
            
        )
}

export default App;