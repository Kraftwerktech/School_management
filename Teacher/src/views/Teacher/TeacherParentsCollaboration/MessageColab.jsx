// App.js
import React from 'react';
import Message from './Messenger';
import Details from './Details';
import MessageList from './MessageList';

function MessageColab() {
  return (
    <div className="flex gap-4 h-screen">
        <div className='w-[27.5%]'>
         <MessageList/>
        </div>
      <div className="w-[45%]">
        <Message />
      </div>
      <div className="w-[27.5%] h-full">
        <Details />
      </div>
    </div>
  );
}

export default MessageColab;
