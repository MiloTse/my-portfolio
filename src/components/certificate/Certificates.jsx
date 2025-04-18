import {useEffect, useState} from "react";

function Certificates() {
    const [certificates, setCertificates] = useState([]);
    useEffect(() => {
        fetch('/api/certificates.json')
            .then((res) => res.json())
            .then((data) => {
                setCertificates(data);
            });
    })
    return (
        <section id='certificates' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
                <div
                    data-aos='fade-up'
                    data-aos-delay='200'
                    className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                    <h1 data-aos='fade-right' data-aos-delay='500'
                        className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Certificates</h1>
                    <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                        {certificates.description}
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Certificates;
