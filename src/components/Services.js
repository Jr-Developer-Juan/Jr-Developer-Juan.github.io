import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Front-End',
    description: 'Manejo de Lenguaje de etiquetado (HTML), Manejo de Css, JavaScript',
    link: 'Leer Más',
  },
  {
    name: 'Frameworks',
    description: 'Manejo Basico de Frameworks como Angular y React, Framework de Css (Tailwind.CSS)',
    link: 'Leer Más',
  },
  {
    name: 'Python',
    description: 'Tengo proyectos creados en python. Inteligencia artificial que realiza ciertas tareas asignadas por reconocimiento de voz',
    link: 'Leer Más',
  },
  {
    name: 'PHP',
    description: 'Tengo proyecto creado en php sobre agencia de viajes, donde ofrecemos paquetes turisticos, atracciones turisticas etc.',
    link: 'Leer Más',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' style={{ backgroundSize: '50%', backgroundPositionY: '-20px' }}>
            <h2 className='h2 text-accent mb-15 mt-[30px]'>Lo Que Hago</h2>
            <h3 className='h3 max-w-[455px] mb-20'>Desarrollador Junior con conocimientos en desarrollo Front-End</h3>
            <button className='btn btn-sm'>Mis Trabajos</button>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex1'>
            <div>
              {services.map((services, index) => {

                const { name, description, link } = services

                return (
                  <div className='border-b border-white/20 h-[116px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font font-semibold'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='/' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                      <a href='/' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Services;
