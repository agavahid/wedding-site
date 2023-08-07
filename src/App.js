import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layouts/mainLayout/mainLayout';
import Home from './pages/home/home';
import Wedding from './pages/weddingSection/wedding';
import SinglePage from './pages/singlePage/singlePage';
import ComingSoon from './components/comingSoon/comingSoon';
import Login from './components/login/login';
import UserProfileLayout from './layouts/userPofileLayout/userProfileLayout';
import Settings from  './components/settings/settings';
import LikedList from './components/likedList/likedList';
import Messages from './components/messages/messages';
import Profile from './components/profile/profile';
import Register from './components/register/register';
import ProtectedRoute from './components/protectedRoute/protectedRoute';


function App() {
 
  return (
    <MainLayout>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/:slug" element={<SinglePage/>} preventScrollReset={true}/>
        <Route path="/:slug/:urlid" element={<Wedding/>} preventScrollReset={true}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/comingSoon' element={<ComingSoon/>}/>
        <Route path='/profile' element={<ProtectedRoute><UserProfileLayout/></ProtectedRoute>}>
          <Route path='account' element={<Profile/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='likedList' element={<LikedList />}/>
          <Route path='messages' element={<Messages/>}/>
          <Route path='' element={<Navigate to={'settings'}/>}/>
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
