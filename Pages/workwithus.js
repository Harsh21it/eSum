import React from 'react';
import MainLayout from '../Layout/MainLayout';

function WorkwithUs() {
    return (
        <div>
            <MainLayout>
            <div className='py-10 overflow-x-hidden'>
            <div className='py-12 animate-marquee whitespace-nowrap text-green-400' style={{'font-family': 'Bungee Outline'}}>
            <span className='mx-8 text-8xl'>WorkWithUS</span>
            <span className='mx-8 text-8xl'>WorkWithUS</span>
            <span className='mx-8 text-8xl'>WorkWithUS</span>
            <span className='mx-8 text-8xl'>WorkWithUS</span>
            <span className='mx-8 text-8xl'>WorkWithUS</span>
            </div></div>
                <h1 className='text-lg'>Hi there!</h1>
            </MainLayout>
        </div>
    );
}

export default WorkwithUs;