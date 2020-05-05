import React from 'react';
import { SocialIcon } from 'react-social-icons';

const footer = {
    height: '50px',
    marginTop: '25px',
    color: 'var(--highlight)',
    textAlign: 'center',
}

const social = {
    width: '30px',
    height: '30px',
    marginRight: 10,

}

export default function Footer () {
    return (
        <footer style={footer}>
            <SocialIcon url="https://www.linkedin.com/in/antraymond/" bgColor='var(--base2)' style={social}/>
            <SocialIcon url="https://github.com/ajraymond27" bgColor='var(--base2)' style={social}/>
            <SocialIcon url="https://www.instagram.com/ajraymond27/?hl=en" bgColor='var(--base2)' style={social}/>
            <SocialIcon url="http://ajraymond27@gmail.com" bgColor='var(--base2)' style={social}/>
        </footer>
    )
}