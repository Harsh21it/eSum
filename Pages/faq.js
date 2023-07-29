import React from 'react';
import MainLayout from '../Layout/MainLayout';

function Faq() {
    return (
        <MainLayout>
        <div className='py-10 overflow-x-hidden'>
        <div className='py-12 animate-marquee whitespace-nowrap text-green-400' style={{'font-family': 'Bungee Outline'}}>
            <span className='mx-8 text-8xl'>FAQs</span>
            <span className='mx-8 text-8xl'>FAQs</span>
            <span className='mx-8 text-8xl'>FAQs</span>
            <span className='mx-8 text-8xl'>FAQs</span>
            <span className='mx-8 text-8xl'>FAQs</span>
        </div></div>
            <h1>this is the faq</h1>
        </MainLayout>
    );
}

export default Faq;