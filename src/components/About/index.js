import { useEffect, useState } from 'react'
import {
  faAws,
  faDocker,
  faGitAlt,
  faGitlab,
  faKaggle,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p align='center'>
            I'm highly motivated individual with an excellent eye for detail and have proven to be adaptable, reliable and well organized. I am hard working with the ability to work both alone or as a part of a team in order to complete tasks on time and to a high standart. 
          </p>
          <p align="center">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. I am able to communicate effectively at all levels due to my communication skills both verbal and written. 
          </p>
          <p align="center">
            I am able to prioritise to meet demanding deadlines while maintaining a positive attitude, enjoy meeting new people and consider myself very with clients/customers alike. 
          </p>
          <p align="center">Looking forward to start working in a new and exciting career within an established company.</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGitlab} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faKaggle} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About