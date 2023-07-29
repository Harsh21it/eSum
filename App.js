import './App.css';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import React, {useState,useEffect} from 'react';
import loader from './Images/loader.gif';

function App() {
  const [loading, setLoading]=useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
    {
      loading ?
      <div className='items-center'>
          <img src={loader} className='mt-48 md:mt-0 md:h-screen w-screen absolute z-0' alt="loading text"/>
          <h1 className='absolute text-5xl text-black md:text-white animate-bounce md:animate-pulse z-11 left-40 bottom-64 md:top-96 md:left-96 md:ml-72 font-bold'>loading</h1>
      </div>
      :
      <MainLayout>
      <Home />
      </MainLayout>
    }
    </div>
  );
}

export default App;
