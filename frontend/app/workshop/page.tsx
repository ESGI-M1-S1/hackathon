"use client"
import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import FilterMenu from '@/components/FilterMenu';

async function getWorkshops() {
    const response = await fetch("http://localhost:1337/api/events?populate[workshop][populate][0]=tags");
    const data = await response.json();
    return data.data;
}

const Page = () => {
    const [originalCards, setOriginalCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getWorkshops();
            setOriginalCards(data);
            setFilteredCards(data);
            console.log("Initial data:", data); // Log initial data
        }

        fetchData();
    }, []);

    const handleFilterChange = (filters) => {
        console.log('Filters changed:', filters);

        setFilteredCards((prevFilteredCards) => {

            const newFilteredCards = originalCards.filter((card) => {
                let isValid = true;

                if (filters.locations.length > 0 && !filters.locations.includes(card.attributes.location)) {
                    isValid = false;
                }

                if (filters.participants && parseInt(filters.participants) !== 0 && card.attributes.attendant_limit < parseInt(filters.participants)) {
                    isValid = false;
                }

                if (filters.duration && !card.attributes.workshop.data.attributes.tags.data.some(tag => tag.attributes.label === filters.duration)) {
                    isValid = false;
                }

                // if (filters.dateRange.startDate && filters.dateRange.endDate) {
                //     const cardStartDate = new Date(card.attributes.visibility_date);
                //     const cardEndDate = new Date(card.attributes.registration_limit_date);
                //     const startDate = new Date(filters.dateRange.startDate);
                //     const endDate = new Date(filters.dateRange.endDate);
                //     if (cardStartDate < startDate || cardEndDate > endDate) {
                //         isValid = false;
                //     }
                // }

                if (filters.tags.length > 0) {
                    const cardTags = card.attributes.workshop.data.attributes.tags.data.map(tag => tag.attributes.label.toLowerCase());
                    const filterTags = filters.tags.map(tag => tag.toLowerCase());
                    if (!filterTags.some(tag => cardTags.includes(tag))) {
                        isValid = false;
                    }
                }

                return isValid;
            });

            console.log("Filtered cards:", newFilteredCards);
            return newFilteredCards;
        });
    };

    const resetFilters = () => {
        setFilteredCards(originalCards);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
                <div className="flex w-full">
                    <FilterMenu onFilterChange={handleFilterChange} onReset={resetFilters}></FilterMenu>
                    <div className='w-full'>
                        <h1 className="text-3xl font-bold mb-4 mx-6 text-center">Participer aux ateliers</h1>
                        <p className="text-lg mb-4 mx-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae necessitatibus</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {filteredCards.map((card, index) => (
                                <Card key={index} imgSrc={card.imgSrc} className='max-w-xs max-h-xs mx-6'>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.attributes.name}</h5>
                                        </a>
                                        <div className='flex items-center my-2'>
                                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/3697/3697758.png" alt="" />
                                            <p className="px-2 font-normal text-gray-700 dark:text-gray-400">{card.attributes.attendant_limit} places disponibles</p>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/3816/3816653.png" alt="" />
                                            <p className="px-2 font-normal text-gray-700 dark:text-gray-400">35 €</p>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/2370/2370264.png" alt="" />
                                            <p className="px-2 font-normal text-gray-700 dark:text-gray-400">{new Date(card.attributes.event_date).toLocaleDateString()}</p>
                                        </div>
                                        <div className='flex items-center my-2'>
                                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/8600/8600557.png" alt="" />
                                            <p className="px-2 font-normal text-gray-700 dark:text-gray-400">{card.attributes.location}</p>
                                        </div>
                                        <div className="mb-3 flex flex-wrap">
                                            {card.attributes.workshop.data.attributes.tags.data && card.attributes.workshop.data.attributes.tags.data.map((tag, index) => (
                                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag.attributes.label}</span>
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
