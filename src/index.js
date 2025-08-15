//import react and react dom lib
import React from 'react';
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

//create a react component
const App = function(){
    
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails author={faker.person.fullName()} timeAgo="Today at 6:35 AM"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author={faker.person.fullName()} timeAgo="Today at 4:10 PM"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author={faker.person.fullName()} timeAgo="Yesterday at 9:00 PM"/>
            </ApprovalCard>
        </div>
    );
};

//take the react compoment and show it on the screen
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);