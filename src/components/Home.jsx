import React from 'react'
import Header from './Header'
import SliderComponent from './SlideComponent'
import Card from './Card'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
    const data = [
        {
            title: 'Faculty of Engineering and Technology',
            content: [
                'Parul Institute of Engineering and Technology',
                'Parul Institute of Technology'
            ],
            className: 'bg-gradient-to-r from-red-600 to-pink-700   hover:to-[#F28500]  hover:from-[#E30B5C]',
            path: '/foet'
        },
        {
            title: 'Faculty of Diploma Studies',
            content: [
                'Parul Institute of Engineering and Technology (DS)',
                'Parul Polytechnic Institute'
            ],
            className: 'hover:to-[#F28500]  hover:from-[#E30B5C]  bg-gradient-to-r from-sky-500 to-indigo-500',
            path: '/fod'
        },
        {
            title: 'Faculty of Management',
            content: [
                ' Parul Institute of Management & Research - PIMR',
                'Parul Institute of Engineering & Technology - MBA - PIET - MBA',
                'Parul Institute of Management (PGDM) - PIM - PGDM',
                'Parul Institute of Business Administration - PIBA'
            ],
            className: 'from-[#22cc19]  to-[#37c6c8]  bg-gradient-to-r hover:from-[#C319CC] hover:to-[#C83937]',
            path: '/foet'
        },
        {
            title: 'Faculty of Applied Sciences',
            content: [
                'Parul Institute of Applied Sciences - PIAS',
                'Parul Institute of Applied Sciences & Research - PIASR',
            ],
            className: 'bg-gradient-to-r from-red-600 to-pink-700   hover:to-[#F28500]  hover:from-[#E30B5C]',
            path: '/foet'
        },
        {
            title: 'Faculty of IT & Computer Science',
            content: [
                'Parul Institute of Computer Application - PICA',
                'Parul Institute of Engineering & Technology - MCA - PIET-MCA',
            ],
            className: 'hover:to-[#F28500]  hover:from-[#E30B5C]  bg-gradient-to-r from-sky-500 to-indigo-500',
            path: '/foet'
        },
        {
            title: 'Faculty of Pharmacy',
            content: [
                'Parul Institute of Pharmacy - PIP',
                'Parul Institute of Pharmacy and Research - PIPR',
                'School of Pharmacy - SOP'
            ],
            className: 'from-[#22cc19]  to-[#37c6c8]  bg-gradient-to-r hover:from-[#C319CC] hover:to-[#C83937]',
            path: '/foet'
        },
        {
            title: 'Faculty of Homeopethy',
            content: [
                'Jawaharlal Nehru Homoeopathic Medical College - JNHMC',
                'Rajkot Homoeopathic Medical College - RHMC',
                'Ahmedabad Homoeopathic Medical College - AHMC',
                'Parul Institute of Homoeopathic & Research - PIHR'
            ],
            className: 'bg-gradient-to-r from-red-600 to-pink-700   hover:to-[#F28500]  hover:from-[#E30B5C]',
            path: '/foet'
        },
        {
            title: 'Faculty of Medicine & Faculty of Nursing',
            content: ['Parul Institute of Public Health - PIPH',
                'Department of Paramedical and Health Sciences - DPMHS',
                'Parul Institute of Medical Science & Research - PIMSR',
                'Parul Institute of Nursing - PIN',
            ],
            className: 'hover:to-[#F28500]  hover:from-[#E30B5C]  bg-gradient-to-r from-sky-500 to-indigo-500',
            path: '/foet'
        },
        {
            title: 'Faculty of Physiotherapy',
            content: [
                'Parul Institute of Physiotherapy - PIPT',
                'Ahmedabad Physiotherapy College - APC',
            ],
            className: 'from-[#22cc19]  to-[#37c6c8]  bg-gradient-to-r hover:from-[#C319CC] hover:to-[#C83937]',
            path: '/foet'
        },
        {
            title: 'Faculty of Architecture & Planning',
            content: [
                'Faculty of Architecture & Research - PIAR'
            ],
            className: 'bg-gradient-to-r from-red-600 to-pink-700   hover:to-[#F28500]  hover:from-[#E30B5C]',
            path: '/foet'
        },
        {
            title: 'Faculty of Ayurved',
            content: [
                'Parul Institute of Ayurved - PIA',
                'Parul Institute of Ayurved & Research - PIAResearch'
            ],
            className: 'hover:to-[#F28500]  hover:from-[#E30B5C]  bg-gradient-to-r from-sky-500 to-indigo-500',
            path: '/foet'
        },
        {
            title: 'Faculty of Design & Faculty of Fine Arts & Faculty of Arts',
            content: [
                'Parul Institute of Design - PID',
                'Parul Institute of Fine Arts & Arts - PIFA',
                'Parul Institute of Arts - PIArts'
            ],
            className: 'from-[#22cc19]  to-[#37c6c8]  bg-gradient-to-r hover:from-[#C319CC] hover:to-[#C83937]',
            path: '/foet'
        },
        {
            title: 'Faculty of Law',
            content: [
                'Parul Institute of Law - PIL',
            ],
            className: 'bg-gradient-to-r from-red-600 to-pink-700   hover:to-[#F28500]  hover:from-[#E30B5C]',
            path: '/foet'
        },
        {
            title: 'Faculty of Social Work',
            content: [
                'Parul Institute of Social Work - PISW'
            ],
            className: 'hover:to-[#F28500]  hover:from-[#E30B5C]  bg-gradient-to-r from-sky-500 to-indigo-500',
            path: '/foet'
        },
        {
            title: 'Faculty of Commerce',
            content: [
                'Parul Institute of Commerce - PIC'
            ],
            className: 'from-[#22cc19]  to-[#37c6c8]  bg-gradient-to-r hover:from-[#C319CC] hover:to-[#C83937]',
            path: '/foet'
        },
        {
            title: 'Faculty of Agriculture',
            content: [
                'College of Agriculture - COA'
            ],
            className: 'bg-gradient-to-r from-red-600 to-pink-700   hover:to-[#F28500]  hover:from-[#E30B5C]',
            path: '/foet'
        },

        {
            title: 'Faculty of Hotel Management & Catering Technology',
            content: [
                'Parul Institute of Hotel Management & Catering Technology - PIHMCT',
            ],
            className: 'hover:to-[#F28500]  hover:from-[#E30B5C]  bg-gradient-to-r from-sky-500 to-indigo-500',
            path: '/foet'
        },
        {
            title: 'Faculty of Library and Information Science',
            content: [
                'Parul Institute of Library and Information Science - PILIS'
            ],
            className: 'from-[#22cc19]  to-[#37c6c8]  bg-gradient-to-r hover:from-[#C319CC] hover:to-[#C83937]',
            path: '/foet'
        },
    ]

    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    };
    return (
        <>
            <Header />
            <SliderComponent />
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-semibold mb-4">Faculty </h1>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
                    {data.map((item, index) => (
                        <div key={index} className='cursor-pointer' onClick={() => handleCardClick(item.path)}>
                            <Card key={index} title={item.title} content={item.content} className={item.className} />
                        </div>
                    ))}
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Home