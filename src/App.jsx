import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, link, Route } from 'react-router-dom'
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import { login, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import Widget from './Widget';

function App() {
  const user = useSelector(selectUser)
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  useEffect(() => {
    auth.onAuthStateChanged(user =>{
      if(user){
        dispatch(login({
          displayname: user.displayName,
          email: user.email,
          // photoUrl: photoUrl
        }))
      }
    })
  }, []);
  const dispatch = useDispatch()
  return (
    <Router>
      {!user? 
      <Login/>
      :
      <div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Routes>
      <Route path='/mail' element={<Mail/>}/>
      <Route path='/' element={<EmailList/>}/>
      </Routes>
      <Widget/>
      </div>
      {sendMessageIsOpen && <SendMail/>}
      </div>
      }

    </Router>
  );
}

export default App;
