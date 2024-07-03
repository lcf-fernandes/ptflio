import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
          {/**
           *  UI: Spotlights
           *  Link: https://ui.aceternity.com/components/spotlight
          */}
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
          {/* ----  Spotlights End */}

          {/**
           *  UI: grid
           *  change bg color to bg-black-100 and reduce grid color from
           *  0.2 to 0.03
         */}
        <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
          {/* ----  Grid End */}


        <div className='flex justify-center relative my-20 z-10'>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              O Poder da Web Dinâmica com Next.js
            </p>

            {/**
              * UI: Text Generate Effect
              * Link: https://ui.aceternity.com/components/text-generate-effect
              *  change md:text-6xl, add more responsive code
            */}
            <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transformando Conceitos em uma Experiência Exclusiva'
            />
            {/* ----  Text Generate Effect End */}


            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Opa! Aqui é o Leandro, um desenvolvedor Next.JS</p>

            <a href="#about">
              <MagicButton
              title="Mostrar meu trabalho"
              // Icon from: https://react-icons.github.io/react-icons/
              icon={<FaLocationArrow />}
              position='right'
            />
            </a>

          </div>
        </div>
    </div>
  )
}

export default Hero