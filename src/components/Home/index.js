import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'a', 'd', 'i']
    const jobArray = ['D', 'a', 't', 'a',' ', 'S', 'c', 'i', 'e', 'n', 't', 'i', 's', 't']

   useEffect(() => {
           setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
   },[])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i</span>
                    <span className={letterClass}>,</span>
                    <br />
                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'</span>
                    <span className={letterClass}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Machine Learning / Deep Learning / Computer Vision / Python(Programming Language)</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        
        <Loader type='pacman' />
        </>
    )

}
export default Home