//mport react and react dom lib
import React from 'react';
import ReactDom from 'react-dom';

import CommentDetails from './CommentDetails';
 
//create a react component
const App=function(){
    
    return (
    <div className="ui container comments">
    <CommentDetails author="Sam" timeAgo="Today at 6:35 AM"/>
    <CommentDetails author="Alex" timeAgo="Today at 4:10 PM"/>
    <CommentDetails author="Jane" timeAgo="Yesterday at 9:00 PM"/>
    </div>
    );
};



//take the react compoment and show it on the screen
ReactDom.render(
    <App />,document.querySelector('#root')
);