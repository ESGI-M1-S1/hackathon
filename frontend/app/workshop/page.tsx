import React from 'react';
import { Pagination } from 'flowbite-react';
import Link from 'next/link';
import Card from '../../components/ui/card';

const cardsData = [
    {
        title: 'Card 1',
        description: 'Description 1',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    },
    {
        title: 'Card 2',
        description: 'Description 2',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    }
    ,
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    }
    ,
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/1920_St_Johann_Sepia_Aquarell.jpg/1200px-1920_St_Johann_Sepia_Aquarell.jpg'
    }
];

const Page = () => {
    return (
        <div className="flex flex-col items-center bg-black pb-3 pt-3">
            <h1 className="text-3xl font-bold mb-4 mx-6 text-brownText">Participer aux ateliers</h1>
            <p className="text-lg mb-4 mx-6 text-brownText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae necessitatibus</p>
            <div className="flex flex-wrap justify-center gap-6">
                {cardsData.map((card, index) => (
                    <Card key={index} href={`/workshop/${index + 1}`} imageUrl={card.imgSrc} title={card.title} description={card.description} className='max-w-xs max-h-xs mx-6'></Card>
                ))}
            </div>
        </div>
    );
};

export default Page;
