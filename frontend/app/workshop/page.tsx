import React from 'react';
import { Pagination } from 'flowbite-react';
import Link from 'next/link';
import Card from '../../components/ui/card';

const cardsData = [
    {
        title: 'Card 1',
        description: 'Description 1',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Card 2',
        description: 'Description 2',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    ,
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    ,
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Card 3',
        description: 'Description 3',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const Page = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4 mx-6">Participer aux ateliers</h1>
            <p className="text-lg mb-4 mx-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae necessitatibus</p>
            <div className="flex flex-wrap justify-center gap-6">
                {cardsData.map((card, index) => (
                    <Card key={index} href={`/workshop/${index + 1}`} imageUrl={card.imgSrc} title={card.title} description={card.description} className='max-w-xs max-h-xs mx-6'></Card>
                ))}
            </div>
        </div>
    );
};

export default Page;
