import React from 'react'
import { graphql } from 'gatsby'
import '../styles.css'
import { Header } from '../components/Header'
import {
  FaLinkedin,
  FaTelegramPlane,
  FaGithub,
  FaFlag,
  FaStar,
} from 'react-icons/fa'

export default function About({ data }) {
  const { experience } = data.site.siteMetadata
  return (
    <>
      <Header />
      <div className="w-full lg:w-200 m-auto px-4 md:px-0">
        <p className="text-white mb-8">
          Entusiasta del desarrollo web con más de 5 años de experiencia y
          desempeñándome los 2 últimos como arquitecto de software en la fintech
          PagoEfectivo, he pasado como desarrollador frontend, líder frontend y
          arquitecto.
        </p>

        <div>
          <div className="text-white flex items-center mb-7">
            <FaLinkedin size="25" className="mr-7" />
            <a href="https://www.linkedin.com/in/wilsonft" target="_blank">
              https://www.linkedin.com/in/wilsonft
            </a>
          </div>
          <div className="text-white flex items-center mb-7">
            <FaTelegramPlane size="25" className="mr-7" />
            wilsonft83@gmail.com
          </div>
          <div className="text-white flex items-center mb-7">
            <FaGithub size="25" className="mr-7" />
            <a href="https://github.com/wilsson" target="_blank">
              https://github.com/wilsson
            </a>
          </div>
        </div>

        <h2 className="text-white text-2xl font-bold mb-8">Experiencia</h2>

        <div
          className="ml-4 text-white border-l-4"
          style={{ borderColor: '#262626' }}
        >
          {experience.map(({ title, company, time }, key) => (
            <div className="flex mb-9" key={key}>
              <div className="-ml-4 mr-4 h-8 w-8 bg-black rounded-full flex justify-center items-center">
                <FaFlag size="15" />
              </div>
              <div className="flex flex-col">
                {title} - {company}
                <span className="text-sm text-gray-400">
                  {time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-white text-2xl font-bold mb-8">Proyectos OSS</h2>

        <div className="mb-8">
          <a
            href="https://github.com/wilsson/create-webpack-application"
            target="_blank"
            className="flex bg-black text-white items-start p-4 rounded-md mb-5 relative"
          >
            <div className="flex items-center absolute top-4 right-4">
              <FaStar className="text-yellow-300 mr-1.5" /> 12
            </div>
            <FaGithub size="25" className="mr-5" />
            <div className="flex-1">
              <div>create-webpack-application</div>
              <div className="text-sm text-gray-400">
                Easily create a basic webpack application.
              </div>
            </div>
          </a>
          <a
            href="https://github.com/wilsson/papyrum"
            target="_blank"
            className="flex bg-black text-white items-start p-4 rounded-md mb-5 relative"
          >
            <div className="flex items-center absolute top-4 right-4">
              <FaStar className="text-yellow-300 mr-1.5" /> 17
            </div>
            <FaGithub size="25" className="mr-5 shrink" />
            <div className="flex-1">
              <div>papyrum</div>
              <div className="text-sm text-gray-400">
                Papyrum is a tool that will help you in the creation of your
                design system, style guide or in the documentation of your
                project based on react.
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        experience {
          title
          company
          time
        }
      }
    }
  }
`