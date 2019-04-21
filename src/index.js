//mport react and react dom lib
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';
 import ApprovalCard from './ApprovalCard'
//create a react component
const App=function(){
    
    return (
    <div className="ui container comments">
    <ApprovalCard>
    <CommentDetails author={faker.name.findName()} timeAgo="Today at 6:35 AM"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetails author={faker.name.findName()} timeAgo="Today at 4:10 PM"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetails author={faker.name.findName()} timeAgo="Yesterday at 9:00 PM"/>
    </ApprovalCard>
    </div>
    );
};



//take the react compoment and show it on the screen
ReactDom.render(
    <App />,document.querySelector('#root')
);