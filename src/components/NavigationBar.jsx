import React from 'react';

const NavigationBar = () => {
    return (
        <div className="block lg:flex  flex-grow  h-[42px] items-center justify-center flex-wrap  w-screen bg-purple-900">
            <div className="text-base  text-center lg:flex-grow  align-middle justify-center  w-full h-full">
                <a href="#responsive-header" className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6">
                    ALUMNI SUPPORT
                </a>
                <a href="#responsive-header" className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6">
                    NEWS & STORIES
                </a>
                <a href="#responsive-header" className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6">
                    EVENTS
                </a>
                <a href="#responsive-header" className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6">
                    BATCHMATES
                </a>
                <a href="#responsive-header" className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6">
                    FIND ALUMNI
                </a>
                <a href="#responsive-header" className="block mt-2 lg:inline-block  text-gray-200 hover:text-white mr-6">
                    CAREERS
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6">
                    ABOUT
                </a>
            </div>
        </div>
    );
};

export default NavigationBar;