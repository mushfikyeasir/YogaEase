import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseInstructors from '../Custom Hooks/UseInstructors';
import './PopularInstrcutors.css'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';
import Aos from 'aos';
const PopularInstructors = () => {
    const [instructors] = UseInstructors();
    // console.log(instructors);
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div>
           <div className='bg-slate-900'>
            <AnimatedTitle title="| Popular Choches"></AnimatedTitle>
            </div>
            <div className='mt-10'>
                <h1 className='text-black text-center uppercase text-3xl font-semibold'>Team Of Expert Coaches</h1>
                <p className='text-center text-black'>Expert team of coaches helps you succeed in any goal,<br />
                    personalized guidance and motivation provided!</p>
            </div>
            <div className='grid gap-3 lg:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    instructors.slice(0, 3).map((sigleInstructors) =>
                        <div className="box" key={sigleInstructors._id} data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" >
                            <div className="Inscard">
                                <div className="imgBox">
                                    <img src={sigleInstructors.image} alt="some image" />
                                </div>
                                <div className="details">
                                    <h2>{sigleInstructors.name} </h2>
                                </div>
                            </div>
                        </div>


                    )}

            </div>
        </div>


    );
};

export default PopularInstructors;