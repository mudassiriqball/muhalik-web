import React from 'react'
import { Navbar, Image } from 'react-bootstrap'

export default function Toolbar() {
    return (
        <div className='toolbar'>
            <Navbar bg='success' className='navbar' >
                <div className='mr-auto'></div>
                <Navbar.Brand href='/index' className='d-inline-flex align-items-center'>
                    <div className='display_in_md_lg'>
                        <Image src="muhalik.jpg" className='mr-2 ml-1' thumbnail roundedCircle fluid style={{ width: '60px', minWidth: '60px', margin: '0%' }} />
                    </div>
                    <h2 className=" text_animation">Mahaalk<span className='mr-3' style={{ fontSize: '20px' }}>@2020</span></h2>
                </Navbar.Brand>
                <div className='mr-auto'></div>
                <div className='mr-auto'></div>
                <div className='mr-auto'></div>
                <div className='mr-auto'></div>
            </Navbar>
            <style type="text/css">{`
                .toolbar .navbar{
                    // background: white
                }
                .toolbar .text_animation{
                    animation: mymove 5s infinite;
                    color: white;
                    margin: 0%;
                }
                @keyframes mymove {
                    50% {text-shadow: 10px 15px 3px white}
                }
            `}</style>
        </div >
    )
}
