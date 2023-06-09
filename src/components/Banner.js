import React from 'react';
// import Image from '../assets/avatar.svg';
// import { FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (<section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>

    <div className='container mx-auto'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{ once: false, amount: 0.7 }}
        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
          JUAN <span>RESTREPO</span>
        </motion.h1>
        <motion.div
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='text-white mr-4'>Yo Soy</span>
          <TypeAnimation sequence={[
            'Desarrollador',
            2000,
            'Front-End',
            2000,
            'Junior',
            2000,
            'React',
            2000,
          ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity} />
        </motion.div>
        <motion.p
        variants={fadeIn('up', 0.4)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>Soy Juan Restrepo, Desarrollador junior, apacionado por aprender cosas nuevas, capacidad de aprender y entender rapidamente, excelente trabajador en equipo, Me gusta aportar ideas y brindar soluciones.</motion.p>
        <motion.div
        variants={fadeIn('up', 0.6)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          <button className='btn btn-lg'>Contactame!</button>
          <a href='/' className='text-gradient btn-link'>Mi Portafolio</a>
        </motion.div>
        {/* <motion.div
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{ once: false, amount: 0.7 }} className='flex text-[30px] mt-[-30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='/'><FaFacebook /></a>
          <a href='/'><FaGithub /></a>
          <a href='/'><FaWhatsapp /></a>
        </motion.div> */}
      </div>
    </div>
  </section>
  );
};

export default Banner;

