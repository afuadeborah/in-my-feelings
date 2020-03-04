import React from 'react';
import { FaGithub, FaTwitter }  from 'react-icons/fa';


// This component is just here for display so we use a function component

const Footer = () => {


    return(
        <footer>
            <p>
                <a href="http://www.afuadeborahcodes.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                tabIndex="0"
                >Afua Deborah
                </a> 
                Juno College 2020 
            </p>

            <p>Hotline Bling:</p>

            <a href="https://github.com/afuadeborah"
            target="_blank" 
            rel="noopener noreferrer" 
            tabIndex="0"
            aria-hidden="true"
            title= "@afuadeborah on Github"
            alt="Go to afuadeborah on Github"
            >
                <FaGithub />
            </a>
            
            <a href="https://twitter.com/afuadeborah_"
            target="_blank" 
            rel="noopener noreferrer" 
            tabIndex="0"
            aria-hidden="true"
            title="@afuadeborah_ on Twitter"
            alt="Go to afuadeborah on Twitter"
            >
                <FaTwitter />
            </a>
            
        </footer>
    )

}


export default Footer;