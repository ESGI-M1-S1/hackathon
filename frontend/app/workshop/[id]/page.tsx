'use client';
import React, { useState } from 'react';

const cardsData = [
    {
        id: 1,
        title: 'Card 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        attendant_limit: 10,
        location: 'Paris',
        duration: '1h',
        date: '2024-12-12'
    },
    {
        id: 2,
        title: 'Card 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        attendant_limit: 10,
        location: 'Paris',
        duration: '1h',
        date: '2024-12-12'
    },
    {
        id: 3,
        title: 'Card 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        attendant_limit: 10,
        location: 'Paris',
        duration: '1h',
        date: '2024-12-12'
    },
    {
        id: 4,
        title: 'Card 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imgSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        attendant_limit: 10,
        location: 'Paris',
        duration: '1h',
        date: '2024-12-12'
    }
];

function Page({ params }: { params: { id: string } }) {
    const card = cardsData.find((card) => card.id === Number(params.id));
    const [formData, setFormData] = useState({
        event: params.id,
        email: '',
        first_name: '',
        last_name: '',

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            data: formData
        };
        fetch('http://localhost:1337/api/registrations/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100">
        <div className="max-w-xl p-6 md:mr-8">
            <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
            <img src={card.imgSrc} className="w-full rounded-lg" alt={card.title} />
            <p className="text-lg mt-4">{card.description}</p>
            <div className="flex justify-between mt-4">
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-lg">{card.attendant_limit}</p>
                </div>
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-lg">{card.location}</p>
                </div>
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-lg">{card.duration}</p>
                </div>
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-lg">{card.date}</p>
                </div>
            </div>
        </div>
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md md:ml-8 mt-8 md:mt-0 mb-4">
            <h2 className="text-3xl font-bold mb-4">Participer à l'atelier</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="firstname" className="text-lg font-semibold">Prénom</label>
                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastname" className="text-lg font-semibold">Nom</label>
                    <input type="email" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-semibold">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Participer</button>
            </form>
        </div>
    </div>
    
    );
};
export default Page;
