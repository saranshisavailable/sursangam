import React, { useState } from 'react'
import logo from '../public/assets/Srutilaya Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsGithub, BsLinkedin, BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    return (
        <>
            <div className='fixed h-[80px] bg-[#000] w-full flex justify-between items-center text-gray-300 px-4 z-10'>
                <div className=''>
                    <img src={logo.src} alt="logo" className='h-[80px]' />
                </div>

                <ul className='hidden md:flex justify-evenly gap-12 items-center font-semibold font-body'>
                    <a href="#home"> <li>Home</li></a>
                    <a href="#about"> <li>About</li></a>
                    <a href="#Skills"><li>Artists</li></a>
                    <a href="#Work"> <li>Highlights</li></a>
                    <a href="#Contact"> <li>Contact</li></a>
                </ul>

                <div onClick={handleClick} className='md:hidden z-10'>
                    {nav ? <FaTimes /> : <FaBars />}
                </div>

                {/*mobile menu */}
                <ul className={!nav ? 'hidden' : 'md:hidden absolute  left-0 top-0 flex flex-col justify-center items-center h-screen w-full bg-[#0a192f] text-gray-300 text-4xl gap-12'}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>

                {/*social icons */}

                <div className='hidden md:block   fixed left-0 flex flex-col top-[35%]'>
                    <ul>
                        <li className='w-[160px] h-[60px] px-4 ml-[-100px] flex justify-between items-center bg-blue-600 hover:ml-[-10px] duration-300 '>
                            <a className='flex justify-between items-center w-full  '
                                href="/">
                                LinkedIn <BsLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] px-4 ml-[-100px] flex justify-between items-center bg-[#333333] hover:ml-[-10px] duration-300 '>
                            <a className='flex justify-between items-center w-full  '
                                href="/">
                                GitHub <BsGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] px-4 ml-[-100px] flex justify-between items-center bg-[#6FC2B0] hover:ml-[-10px] duration-300 '>
                            <a className='flex justify-between items-center w-full  '
                                href="/">
                                Email <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] px-4 ml-[-100px] flex justify-between items-center bg-[#565F69] hover:ml-[-10px] duration-300 '>
                            <a className='flex justify-between items-center w-full  '
                                href="/">
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>



        </>
    )
}

export default Navbar