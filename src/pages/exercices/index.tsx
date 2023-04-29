import React from 'react'
import axios from 'axios';
import {GetServerSideProps} from 'next'
export default function index(props:any) {
  console.log(props);
  
  return (
    <h1>index</h1>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('Function called');
  const options = {
    method: 'GET',
    url: 'https://exerciseapi3.p.rapidapi.com/search/muscles/',
    headers: {
      'X-RapidAPI-Key': 'afc281dbdemsh0b409a71d0c331cp1688c6jsnb45ac18297a0',
      'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
    }
  };

  try {
    
    const res = await axios.request(options);
    console.log('mmmmmmmmm', res);

     const data = res.data;
     return {
      props: {
        user: data,
      },
    };
    
  } catch (error) {
    console.log(error);
    return {
      props: {
        user: "hi",
      },
    };
  }
}