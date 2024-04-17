import React from 'react'
import image1 from '../assets/organization.jpg';
import image2 from '../assets/package.jpg';
import paypal from '../assets/company/paypal.jpg'
import pratilipi from '../assets/company/pratilipi.jpg'
import servicenow from '../assets/company/servicenow.jpg'
import sifive from '../assets/company/sifive.jpg'
import tas from '../assets/company/tas.jpg'
import tcs from '../assets/company/tcs.jpg'
import mahindra from '../assets/company/mahindra.jpg'
import tek from '../assets/company/tek.jpg'
import watchguard from '../assets/company/watchguard.jpg'
import wipro from '../assets/company/wipro.jpg'
import zs from '../assets/company/zs.jpg'
// import banner from '../assets/placement1.jpg'

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
            title: '₹10',
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

    //     const companies = [
    //         {
    //             [image: ''],
    //         [image:'']
    // },
    //     ]
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
            {/* <div>
                {companyLogos.map((logo, index) => (
                    <div key={index} className="px-4">
                        <Image src={logo.url} alt='' />
                    </div>
                ))}
            </div> */}
        </>
    )
}

export default Placement