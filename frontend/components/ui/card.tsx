import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/Button';

interface CardProps {
    href?: string;
    title?: string;
    location?: string;
    date?: string;
    places?: string;
    imageUrl?: string;
    price?: string;
    isPrivate?: boolean;
    tags?: any;
}

const Card: React.FC<CardProps> = ({
    href = '#',
    title = 'Card 1',
    location = 'Paris',
    date = '2024-12-12',
    places = '40',
    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg',
    price = '35',
    isPrivate = true,
    tags = []
}) => {
    return (
        <div className="max-w-xs bg-black border border-brown border-2 shadow dark:bg-gray-800 dark:border-yellow-700 p-3">

            <div>
                {isPrivate == true && (
                    <span className="text-brownText px-2 py-1 bg-brown flex w-fit">
                        <svg className="w-6 h-6 text-brownText dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                        </svg>

                        Privé</span>
                )}
                <a href="#">
                    <img src={imageUrl} alt="" className="filter grayscale-0" />
                </a>
            </div>

            <Link href={href} passHref className="text-center">
                <h5 className="my-3 text-2xl font-bold tracking-tight text-brownText dark:text-white">{title}</h5>
            </Link>
            <div>
                <div className="flex gap-3 my-3 text-brown">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>

                    <svg className="w-6 h-6 text-brown dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                    </svg>

                    {location}
                </div>
                <div className="flex gap-3 my-3 text-brown">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <svg className="w-6 h-6 text-brown dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                    </svg>{date}
                </div>
                <div className="flex gap-3 my-3 text-brown">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <svg className="w-6 h-6 text-brown dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                    </svg>
                    {places}
                </div>
                <div className="flex gap-3 my-3 text-brown">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <svg className="w-6 h-6 text-brown dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 12A2.5 2.5 0 0 1 21 9.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 1 0 5V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    </svg>
                    {price + ' €'}
                </div>
                <div className="mb-3 flex flex-wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-brown rounded-full px-3 py-1 text-sm  text-white mr-2 mb-2">{tag.attributes.label}</span>
                    ))}
                </div>

                <ul className="flex justify-center">
                    <Button text='Prendre ma place' link={href}></Button>
                </ul>
            </div>
        </div>
    );
};

export default Card;
