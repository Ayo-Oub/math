import { Link } from "react-router"
import '../styles/home.css'
import srEx1 from '../assets/fichier/exRaci.pdf'

export default function Home() {
     return (
          <div className='home-container'>
               
               <div className='links-container'>
                    <h2>Racine carrées</h2>
                    <div className='links'>
                         <a className="home-link" href={srEx1} download>Télécharger la série N1</a>
                    </div>

              
               </div>

          </div>
     )
}
