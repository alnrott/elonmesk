import React, { useEffect, useRef, useState } from 'react';
import './Background.css';

type Dot = {
    left: number;
    top: number;
    opacity: number;
    id: string;
};

const Background: React.FC = () => {
    const [dots, setDots] = useState<Dot[]>([]);
    const cursorDotRef = useRef<HTMLDivElement | null>(null);
    const cursorOutlineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const postX = e.clientX;
            const postY = e.clientY;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${postX}px`;
                cursorDotRef.current.style.top = `${postY}px`;
            }

            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.animate(
                    {
                        left: `${postX}px`,
                        top: `${postY}px`,
                    },
                    { duration: 500, fill: "forwards" }
                );
            }
            eyeball(e);

        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const eyeball = (event: MouseEvent) => {
        const eye = document.querySelectorAll('.eye');

        eye.forEach((eye) => {
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radians = Math.atan2(event.pageX - x, - event.pageY - y);
            let rotation = (radians * (180 / Math.PI) * -1) + 270;
            (eye as HTMLElement).style.transform = "rotate(" + rotation + "deg)";
        });
    };

    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='title'>

                <span>
                    ELOWN MOOSK                </span>
            </div>
            <div className="cursor-outline" ref={cursorOutlineRef} data-cursor-outline></div>
            <div className='box'>
                <div className='eye'></div>
                <div className='eye'></div>
            </div>
            <div id='mesk'></div>
        </>
    );
};

export default Background;