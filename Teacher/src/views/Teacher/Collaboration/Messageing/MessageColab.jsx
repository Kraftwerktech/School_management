// App.js
import React from 'react';
import Message from './Messenger';
import Details from './Details';
import MessageList from './MessageList';

function MessageColab() {
  return (
    <div>
      <div className=' mt-4'>
        <span className=' text-[31px] font-bold'>Message</span>
      </div>
  <div className="flex gap-4 mr-10 h-screen">
        <div className='w-[28%] h-full'>
         <MessageList/>
        </div>
      <div className="w-[40%] h-full">
        <Message />
      </div>
      <div className="w-[28%] h-full">
        <Details />
      </div>
    </div>
    </div>
  
  );
}

export default MessageColab;
