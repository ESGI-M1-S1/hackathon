'use client'
import React, { useState } from "react";
import axios from 'axios';

const Page = async () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const strapiAPIUrl = process.env["STRAPI_API_URL"];

    try {
        const response = await axios.get(`${strapiAPIUrl}/events`);
        setEvents(response.data);
    } catch (err) {
        // Type casting or specific error handling (recommended)
        setError(err as Error); // Cast to Error type
    } finally {
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading ? (
                <p>Loading events...</p>
            ) : error ? (
                <p>Error fetching events: {error.message}</p>
            ) : (
                events.map((event) => (
                    <div key={event.id}>{event.title}</div>
                ))
            )}
        </div>
    );
};

export default Page;
