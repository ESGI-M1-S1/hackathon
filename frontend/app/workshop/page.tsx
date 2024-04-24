"use client"
import React from 'react';
import { Card, Pagination } from 'flowbite-react';
import FilterMenu from '@/components/FilterMenu'



const cardsData = [
    {
        title: 'Card 1',
        description: 'Description 1',
        startingDate: '19/05/2024',
        endingDate: '19/05/2024',
        tags: ['Vin Blanc', 'Rosé', 'Chacuterie'],
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        title: 'Card 1',
        description: 'Description 1',
        startingDate: '19/05/2024',
        endingDate: '19/05/2024',
        tags: ['Vin Blanc', 'Rosé', 'Chacuterie'],
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        title: 'Card 1',
        description: 'Description 1',
        startingDate: '19/05/2024',
        endingDate: '19/05/2024',
        tags: ['Vin Blanc', 'Rosé', 'Chacuterie'],
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        title: 'Card 1',
        description: 'Description 1',
        startingDate: '19/05/2024',
        endingDate: '19/05/2024',
        tags: ['Vin Blanc', 'Rosé', 'Chacuterie'],
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        title: 'Card 1',
        description: 'Description 1',
        startingDate: '19/05/2024',
        endingDate: '19/05/2024',
        tags: ['Vin Blanc', 'Rosé', 'Chacuterie'],
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

];

const Page = () => {
    const handleFilterChange = (filters) => {
        console.log('Filters changed:', filters);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
                <div className="flex w-full">
                    <FilterMenu onFilterChange={handleFilterChange}></FilterMenu>
                    <div className='w-full'>
                        <h1 className="text-3xl font-bold mb-4 mx-6 text-center">Participer aux ateliers</h1>
                        <p className="text-lg mb-4 mx-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae necessitatibus</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {cardsData.map((card, index) => (
                                <Card key={index} imgSrc={card.imgSrc} className='max-w-xs max-h-xs mx-6'>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.startingDate}</p>
                                        <div className="mb-3 flex flex-wrap">
                                            {card.tags.map((tag, index) => (
                                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                                            ))}
                                        </div>
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;