import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
    return (
        <section className='bg-[#f6fff7]'>
            <div className="mx-auto lg:mx-20 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt=""
                            src="/onlineCare.jpg"
                            className="absolute inset-0 h-full w-full object-cover rounded-sm"
                            width={800}
                            height={800}
                        >
                        </Image>
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Find and Mark <span className='text-primary'> Appointment</span> with Favorite Doctor</h2>

                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                            quidem quam repellat.
                        </p>

                        <a
                            className="mt-8 inline-block rounded"
                        >
                             <Button size={'lg'}> Get Started Now</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection