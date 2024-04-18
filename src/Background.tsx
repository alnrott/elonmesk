import React, { useEffect, useRef, useState } from 'react';
import './Background.css';
import Questens from './components/questens';
import Dament from './components/dament';
const sound1 = require('./assets/sound1.mp3');
const sound2 = require('./assets/sound2.mp3');
const sound3 = require('./assets/sound3.mp3');

const sounds = [sound1, sound2, sound3];

const Background: React.FC = () => {
    const cursorDotRef = useRef<HTMLDivElement | null>(null);
    const cursorOutlineRef = useRef<HTMLDivElement | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
    const [currentSoundIndex, setCurrentSoundIndex] = useState(0);

    const openModal = (type: any) => {
        setModalType(type);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalType(null);
    };


    const playSound = () => {
        if (!audioElement) {
            const audio = new Audio(sounds[currentSoundIndex]);
            setAudioElement(audio);
            audio.play();
            audio.onended = () => {
                setAudioElement(null);
            };
        } else {
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
                setAudioElement(null);
            }
        }
    };

    const handleClick = () => {
        if (audioElement && !audioElement.paused) {
            audioElement.pause();
        } else {
            playSound();
            setCurrentSoundIndex((prevIndex) => (prevIndex + 1) % sounds.length);
        }
    };


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
            <div className='responsive'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'>
                    <h1>MOOSK</h1>

                </div>

                <div className="cursor-outline" ref={cursorOutlineRef} data-cursor-outline></div>
                <div className='box'>
                    <div className='eye'></div>
                    <div className='eye'></div>
                </div>
            </div>
            <div className="video-frame">
                <video width="100%" height="100%" controls>
                    <source src="elon.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="mint">
                <button className="glow-on-hover" type="button" onClick={() => openModal('dament')}>da ment</button>
                <button className="glow-on-hover" type="button" >X</button>
                <button className="glow-on-hover" type="button" onClick={() => openModal('questens')}>questens</button>
            </div>
            {modalOpen && modalType === 'questens' && <Questens onClose={closeModal} />}
            {modalOpen && modalType === 'dament' && <Dament onClose={closeModal} />}
            <div id='mesk' onClick={handleClick}>
            <span style={{ position: 'absolute', top: 100, right: 20, color: 'white', fontSize: "40px", fontWeight: '900', padding: '5px' }}>TOCH ME</span>
            </div>
            <div id='mesk-mobile'>
            </div>
        </>
    );
};

export default Background;