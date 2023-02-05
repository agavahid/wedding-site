
import {  useNavigate } from "react-router-dom"; 
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/features/loginValue/loginValue';
import { useEffect } from "react";
import { Cookies } from 'react-cookie';
import React from 'react';


const ProtectedRoute = ({ children }) => {

  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(cookies.get('userToken')) {
      dispatch(setLogin()) // async
    }else{
      navigate('/')
    }
  },[])

 
  if(cookies.get('userToken')) {
    return children
  }
  
  return false;
};

export default ProtectedRoute