import React from 'react'
import image1 from '../assets/organization.jpg';
import image2 from '../assets/package.jpg';
// import banner from '../assets/placement1.jpg'
import { Carousel } from 'react-multi-carousel';

const companyLogos = [
    { name: "Justdial", url: image1 },
    { name: "nagarro", url: image1 },
    { name: "servicenow", url: image1 },
    { name: "L&T Technology Services", url: image1 },
    { name: "PayPal", url: image1 },
    { name: "KPIT", url: image1 },
    { name: "Microsoft", url: image1 },
    { name: "NTT DATA", url: image1 },
    { name: "Pratilipi", url: image1 },
    { name: "SiFive", url: image1 },
    { name: "TATA", url: image1 },
    { name: "ADVANCED SYSTEMS", url: image1 },
    { name: "TATA CONSULTANCY SERVICES", url: image1 },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function Placement() {
    const details = [
        {
            image: image1,
            title: '450+',
            package: '',
            content: 'Participating Organization',
        },
        {
            image: image2,
            title: '₹13',
            package: 'LPA',
            content: 'Average Package',
        },
        {
            image: image2,
            title: '₹1.2',
            package: 'Crore PA',
            content: 'Highest Package Offered',
        },
        {
            image: image2,
            title: '₹26.20',
            package: 'LPA',
            content: 'Top 10 percentile Average Package',
        },
    ]


    return (
        <>
            <div className='font-[Poppins]'>
                <div>
                    <h1 className='text-[32px] font-bold  text-blue-700 '>Placement Scenario Btech</h1>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {details.map((detail, index) => (
                            <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
                                <img className='h-[60px] w-[60px]' src={detail.image} alt="" />
                                <div className='px-6 py-4'>
                                    <div className=' text-[40px] font-normal mb-2'>{detail.title} <small className='text-[20px]'>{detail.package}</small></div>
                                    <p className='text-gray-700 text-base'>
                                        {detail.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {/* image */}
                </div>
            </div >


            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
            >
                {companyLogos.map((logo, index) => (
                    <div key={index} className="px-4">
                        <Image src={logo.url} alt={logo.name} />
                    </div>
                ))}
            </Carousel>
        </>
    )
}

export default Placement