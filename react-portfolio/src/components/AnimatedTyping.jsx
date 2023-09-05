"use client"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function AnimatedTyping() {
    const [ typing ] = useTypewriter({
        words: [' a Full-Stack Developer', ' a Web Designer', ' what your team is missing'],
        loop: {},

    })
    return(
        <p style={{margin: '5px'}}>
            I'm 
            <span style={{fontStyle: 'italic'}}>
                {typing}
            </span>
            <Cursor cursorStyle='<'/>
        </p>
    )
}
