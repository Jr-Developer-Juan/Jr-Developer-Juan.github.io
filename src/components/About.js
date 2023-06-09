import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[560px] mix-blend-lighten bg-top mt-[-80px]'>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 mt-[-60px]'>
            <h2 className='h2 text-accent'>Sobre Mi.</h2>
            <h3 className='h3 mb-4'>Soy Desarrollador Junior Front-End, Me gustan las tecnologias como JavaScript, Python. Frameworks como React, Angular</h3>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {
                    InView ?
                      <CountUp start={0} end={19} duration={7} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Años <br /></div>
              </div>
              <div>
                <div className=' text-center text-[40px] font-tertiary text-gradient'>
                  {
                    InView ?
                      <CountUp start={0} end={6} duration={8} /> : null}
                  +
                </div>
                <div className='font-primary text-center text-sm tracking-[2px]'>Meses de <br /> Experiencia</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                  {
                    InView ?
                      <CountUp start={0} end={2} duration={5} /> : null}
                  K+

                </div>
                <div className='font-primary text-sm tracking-[2px]'>Seguidores<br /></div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contactame</button>
              <a href='/' className='text-gradient btn-link'>
                Mi Portafolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


  );
};

export default About;
