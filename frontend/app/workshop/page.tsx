"use client"
import React, { useEffect, useState } from 'react';
import Card from '../../components/ui/card'
import FilterMenu from '@/components/FilterMenu';

async function getWorkshops() {
    const response = await fetch("http://localhost:1337/api/events?populate[workshop][populate][0]=preview_img&populate[workshop][populate][1]=tags");
    const data = await response.json();
    console.log(data.data)

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
            console.log("Initial data:", data);
        }

        fetchData();
    }, []);


    useEffect(() => {
        async function fetchData() {
            const data = await getWorkshops();
            setOriginalCards(data);
            setFilteredCards(data);
            console.log("Initial data:", data);
        }

        fetchData();
    }, []);

    const handleFilterChange = (filters) => {
        console.log('Filters changed:', filters);

        setFilteredCards((prevFilteredCards) => {
            const newFilteredCards = originalCards.filter((card) => {
                let isValid = true;
                console.log(card, "card");

                if (filters.locations.length > 0) {
                    const cardLocations = Array.isArray(card.attributes.location) ? card.attributes.location.map(tag => tag.toLowerCase()) : [card.attributes.location.toLowerCase()];
                    const filterLocations = filters.locations.map(tag => tag.toLowerCase());
                    if (!filterLocations.some(tag => cardLocations.includes(tag))) {
                        isValid = false;
                    }
                }

                if (filters.participants && parseInt(filters.participants) !== 0 && card.attributes.attendant_limit < parseInt(filters.participants)) {
                    isValid = false;
                }

                if (filters.duration && !card.attributes.workshop.data.attributes.tags.data.some(tag => tag.attributes.label === filters.duration)) {
                    isValid = false;
                }

                if (filters.tags.length > 0) {
                    const cardTags = card.attributes.workshop.data.attributes.tags.data.map(tag => tag.attributes.label.toLowerCase());
                    const filterTags = filters.tags.map(tag => tag.toLowerCase());
                    if (!filterTags.some(tag => cardTags.includes(tag))) {
                        isValid = false;
                    }
                }

                return isValid;
            });

            console.log("Filtered cards:", filteredCards);
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
                    <div className="flex flex-col items-left bg-black pb-3  w-full pt-8 ">
                        <h1 className="text-3xl mb-4 mx-6 text-left text-white relative pb-3">
                            Participer aux ateliers
                            <span className="absolute bottom-0 left-0 w-32 h-1 bg-white"></span>
                        </h1>
                        <p className="w-2/3 text-lg mb-4 mx-6 items-left text-brownText">Pour vous inscrire à un atelier, veuillez sélectionner celui qui vous intéresse dans la liste ci-dessous. Notez que si l'atelier est marqué comme Privé, vous devrez saisir un mot de passe pour accéder à l'inscription. Assurez-vous d'avoir le mot de passe à disposition avant de procéder. </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {filteredCards.map((card, index) => (
                                <Card key={index} href={`/workshop/${index + 1}`} tags={card.attributes.workshop.data.attributes.tags.data} title={card.attributes.name} places={card.attributes.attendant_limit} date={new Date(card.attributes.event_date).toLocaleDateString()} imageUrl={"http://localhost:1337" + card.attributes.workshop.data.attributes.preview_img.data.attributes.url} className='max-w-xs max-h-xs mx-6'></Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
