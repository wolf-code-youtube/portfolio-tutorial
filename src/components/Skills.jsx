import React from 'react';

const Skills = () => {
    return (
        <div className='pb-48 pt-24' id="skills">
            <div className='text-6xl text-center font-thin p-14'>
                Skills
            </div>
            <div className='flex p-10 font-bold text-2xl justify-center gap-20'>
                <div className='bubble3 text-blue-200'>
                    Python
                </div>
                <div className='bubble1 text-yellow-500'>
                    Javascript
                </div>
                <div className='bubble2 text-green-800'>
                    CSS
                </div>
                <div className='bubble1 text-red-500'>
                    HTML
                </div>
                </div>
                <div className='flex flex text-2xl p-10 font-bold justify-center gap-20'>
                <div className='bubble1 text-green-500'>
                    React
                </div>
                <div className='bubble2 text-blue-500'>
                    Typescript
                </div>
                <div className='bubble3 text-orange-500'>
                    Java
                </div>
                <div className='bubble2 text-yellow-800'>
                    Express
                </div>

            </div>
            <div className='flex flex text-2xl p-10 font-bold justify-center gap-20'>
                <div className='bubble2 text-slate-500'>
                    php
                </div>
                <div className='bubble3 text-pink-500'>
                    Figma
                </div>
                <div className='bubble2 text-purple-500'>
                    SQL
                </div>
                <div className='bubble1 text-red-800'>
                    swift
                </div>

            </div>

        </div>
    );
}

export default Skills;
