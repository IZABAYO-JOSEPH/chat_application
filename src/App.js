import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/loginForm';
import './App.css';
import ChatFeed from './components/ChatFeed'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
  return(

    <ChatEngine
     height="100vh"
     projectID = {"481d3aef-7203-4025-a878-3a0cd071961f"}
     userName = {localStorage.getItem('username')}
     userSecret = {localStorage.getItem('password')}
     renderChatFeed={(chatAppProps)=><ChatFeed { ...chatAppProps} /> }
     />
)
}

export default App;