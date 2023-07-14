import React from 'react';
import MainLayout from '../Layout/MainLayout';
import Achintya from '../Images/Team/Core-members/achintya.JPG';
import parinati from '../Images/Team/Core-members/parinati.png';
import Ankit from '../Images/Team/Executive council/Ankit_bhora.jpg';
import Arsh_singh from '../Images/Team/Executive council/Arsh_singh.jpg';
import Ayush_kr_Gupta from '../Images/Team/Executive council/Ayush_kr_Gupta.jpg';
import Deepu from '../Images/Team/Executive council/Deepu.jpg';
import Divyanshu from '../Images/Team/Executive council/Divyanshu_bhatt.jpg';
import Diya from '../Images/Team/Executive council/Diya_Bhatt.jpg';
import Gurnoor from '../Images/Team/Executive council/Gurnoor.jpg';
import Harveen from '../Images/Team/Executive council/Harveen_Kaur.jpg';
import Kanishka from '../Images/Team/Executive council/Kanishka.jpg';
import Krishna from '../Images/Team/Executive council/Krishna.jpg';
import Livisha from '../Images/Team/Executive council/Livisha.jpg';
import Masoom from '../Images/Team/Executive council/Masoom Ansari.png';
import Nazim from '../Images/Team/Executive council/Nazim.jpg';
import Neha from '../Images/Team/Executive council/Neha_singh.jpg';
import Rahul_ from '../Images/Team/Executive council/Rahul_.jpg';
import Rinshul_Goel from '../Images/Team/Executive council/Rinshul_Goel.jpg';
import Samridhi from '../Images/Team/Executive council/Samridhi.jpg';
import Sana_khan from '../Images/Team/Executive council/Sana_khan.jpg';
import Vanshika_goswami from '../Images/Team/Executive council/Vanshika_goswami.jpg';
import Vanshika from '../Images/Team/Executive council/Vanshika.jpg';


function OurTeam() {
    return (
        <MainLayout>
        <section id="our-team">
        <div className="flex-col">
            <div className="flex justify-center items-center p-16 text-3xl">Core Council</div>
            <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-2 justify-center">
                <div className="mx-auto p-16">
                    <div className="flex-coll">
                        <img src={Achintya} className="w-48 rounded-lg lg:w-auto" alt="Achintya" />
                        <p className="flex justify-center text-2xl p-4">Achintya</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={parinati} className="w-48 rounded-lg lg:w-auto" alt="parinati" />
                        <p className="flex justify-center text-2xl p-4">Parinati</p>    
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-col">
            <div className="flex justify-center items-center p-16 text-3xl">Executive Council</div>
            <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-3">
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Ankit} className="w-48 rounded-lg lg:w-auto" alt="Ankit" />
                        <p className="flex justify-center text-2xl p-4">Ankit</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Arsh_singh} className="w-48 rounded-lg lg:w-auto" alt="Arsh_singh" />
                        <p className="flex justify-center text-2xl p-4">Arsh Singh</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Ayush_kr_Gupta} className="w-48 rounded-lg lg:w-auto"
                            alt="Ayush_kr_Gupta"  />  
                            <p className="flex justify-center text-2xl p-4">Ayush Kr Gupta</p>  
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Deepu} className="w-48 rounded-lg lg:w-auto" alt="Deepu" />
                        <p className="flex justify-center text-2xl p-4">Deepu</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Divyanshu} className="w-48 rounded-lg lg:w-auto"
                            alt="Divyanshu" />
                            <p className="flex justify-center text-2xl p-4">Divyanshu</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Diya} className="w-48 rounded-lg lg:w-auto" alt="Diya" /> 
                        <p className="flex justify-center text-2xl p-4">Diya</p>   
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Gurnoor} className="w-48 rounded-lg lg:w-auto" alt="Gurnoor" />
                        <p className="flex justify-center text-2xl p-4">Gurnoor</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Harveen} className="w-48 rounded-lg lg:w-auto" alt="Harveen" />
                        <p className="flex justify-center text-2xl p-4">Harveen</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Kanishka} className="w-48 rounded-lg lg:w-auto" alt="Kanishka" />
                        <p className="flex justify-center text-2xl p-4">Kanishka</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Krishna} className="w-48 rounded-lg lg:w-auto" alt="Krishna" />
                        <p className="flex justify-center text-2xl p-4">Krishna</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Livisha} className="w-48 rounded-lg lg:w-auto" alt="Livisha" />
                        <p className="flex justify-center text-2xl p-4">Livisha</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Masoom} className="w-48 rounded-lg lg:w-auto" alt="Masoom" />
                        <p className="flex justify-center text-2xl p-4">Masoom</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Nazim} className="w-48 rounded-lg lg:w-auto" alt="Nazim" /> 
                        <p className="flex justify-center text-2xl p-4">Nazim</p>  
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Neha} className="w-48 rounded-lg lg:w-auto" alt="Neha" />
                        <p className="flex justify-center text-2xl p-4">Neha</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Rahul_} className="w-48 rounded-lg lg:w-auto" alt="Rahul_" />
                        <p className="flex justify-center text-2xl p-4">Rahul</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Rinshul_Goel} className="w-48 rounded-lg lg:w-auto"
                            alt="Rinshul_Goel" />
                            <p className="flex justify-center text-2xl p-4">Rinshul Goel</p>    
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Samridhi} className="w-48 rounded-lg lg:w-auto" alt="Samridhi" /> 
                        <p className="flex justify-center text-2xl p-4">Samridhi</p>                      
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Sana_khan} className="w-48 rounded-lg lg:w-auto" alt="Sana_khan" />
                        <p className="flex justify-center text-2xl p-4">Sana Khan</p>                        
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Vanshika} className="w-48 rounded-lg lg:w-auto" alt="Vanshika" />
                        <p className="flex justify-center text-2xl p-4">Vanshika</p>                        
                    </div>
                </div>
                <div className="mx-auto p-16">
                    <div className="flex-col">
                        <img src={Vanshika_goswami} className="w-48 rounded-lg lg:w-auto"
                            alt="Vanshika_goswami" /> 
                            <p className="flex justify-center text-2xl p-4">Vanshika Goswami</p>   
                    </div>
                </div>
            </div>
        </div>
    </section>
        </MainLayout>
    );
}

export default OurTeam;