import './App.css';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import React, {useState,useEffect} from 'react';
import cat from './Images/animals/cat.gif';
import dog from './Images/animals/dog.gif';
import deer from './Images/animals/deer.gif';
import loader from './Images/loader.gif';

function App() {
  const [loading, setLoading]=useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div>
    {
      loading ?
      <div className='h-screen w-full bg-slate-100 border-2 border-slate-700'>
        <div className='flex justify-center pt-[40vh]'>
          <img src={cat} className='scale-50 pl-[20vw]' loading={loading} alt="preloader"/>
          <img src={dog} className='scale-50 -mx-24' loading={loading} alt="preloader"/>
          <img src={deer} className='scale-50 pr-[20vw]' loading={loading} alt="preloader"/>
        </div>
        <div className='flex justify-center'>
          <img src={loader} className=' text-slate-600 w-52' alt="loading text"/>
        </div>
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
