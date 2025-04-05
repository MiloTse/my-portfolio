import photo from '../../assets/photo.png'
import {useEffect, useState} from "react";
import Navbar from "../navbar/Navbar";
function Hero() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/api/hero.json')
            .then(res => res.json())
            .then(setData);
    }, []);
    if (!data) {return <div>Loading...</div>;}
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
            <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600
            via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'
            >
            </div>
            <Navbar />
            <section
            data-aos='fade-up'
            data-aos-delay='250'
            className='text-white body-font z-10'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                    mb-16 md:mb-0 items-center text-center relative'>

                    <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>
                      Hi, I'm  {data.personal_info.preferred_name}
                    </h1>
                    <p className='mb-8 leading-relaxed'>
                        {data.personal_info.summary}
                     </p>
                    </div>
                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                       <img src={photo} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
