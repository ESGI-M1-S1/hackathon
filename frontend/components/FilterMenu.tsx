"use client"
import React, { useState } from 'react';
import DateRangePicker from "@/components/ui/DateRangePicker";

const FilterMenu = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        locations: [],
        participants: '',
        dateRange: {
            startDate: new Date(),
            endDate: new Date()
        },
        tags: [],
        duration: ''
    });

    const durationOptions = [
        { label: '1h à 2h', value: '1h-2h' },
        { label: '2h à 3h', value: '2h-3h' },
        { label: '3h+', value: '3h+' }
    ];

    const tagList = ['Vin blanc', 'Rosé', 'Charcuterie', 'Fromage', 'Vin rouge', 'Dégustation'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = {
            ...filters,
            [name]: value
        };

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleDateRangeChange = (ranges) => {
        const updatedFilters = {
            ...filters,
            dateRange: {
                startDate: ranges.selection.startDate,
                endDate: ranges.selection.endDate
            }
        };

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleTagChange = (e) => {
        const { value } = e.target;
        const updatedFilters = {
            ...filters,
            tag: value
        };

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleTagClick = (selectedTag) => {
        const updatedFilters = {
            ...filters,
            tags: [...filters.tags, selectedTag],
            tag: ''
        };

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleTagRemove = (tagToRemove) => {
        const updatedFilters = {
            ...filters,
            tags: filters.tags.filter(tag => tag !== tagToRemove)
        };

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleDurationChange = (e) => {
        const { value } = e.target;
        const updatedFilters = {
            ...filters,
            duration: value
        };

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleLocationChange = (e) => {
        const { value, checked } = e.target;
        let updatedLocations = [...filters.locations];

        if (checked && !updatedLocations.includes(value)) {
            updatedLocations.push(value);
        } else {
            updatedLocations = updatedLocations.filter(loc => loc !== value);
        }

        const updatedFilters = {
            ...filters,
            locations: updatedLocations
        };

        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const filteredTags = tagList.filter(tag =>
        !filters.tags.includes(tag) &&
        tag.toLowerCase().includes(filters.tag ? filters.tag.toLowerCase() : '')
    );

    return (
        <div className="sticky left-0 top-0 h-screen w-[22rem] bg-gray-200 p-4 shadow-lg z-20 overflow-y-auto">
            <h3 className="mb-4 text-center font-extrabold">Filtres</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Localisation :</label>
                {['Idrac', 'Sciences U'].map((location, index) => (
                    <div key={index} className="flex items-center mr-4">
                        <input
                            id={location}
                            type="checkbox"
                            name="locations"
                            value={location}
                            checked={filters.locations.includes(location)}
                            onChange={handleLocationChange}
                            className="mr-2 my-2"
                        />
                        <label htmlFor={location} className="text-sm text-gray-600">{location}</label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <label htmlFor="participants" className="block text-sm font-medium text-gray-600">Places disponibles :</label>
                <input
                    id="participants"
                    name="participants"
                    value={filters.participants}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    type="number"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="dateRange" className="block text-sm font-medium text-gray-600  my-2">À partir de</label>
                <DateRangePicker
                    startDate={filters.dateRange.startDate}
                    endDate={filters.dateRange.endDate}
                    onChange={handleDateRangeChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="tag" className="block text-sm font-medium text-gray-600">Tag:</label>
                <div className="relative">
                    <input
                        id="tag"
                        name="tag"
                        value={filters.tag}
                        onChange={handleTagChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="@"
                    />
                    {filters.tag && (
                        <ul className="absolute top-full left-0 right-0 z-10 bg-white border rounded-md shadow-md">
                            {filteredTags.map((tag, index) => (
                                <li key={index} className="cursor-pointer p-2 hover:bg-gray-100" onClick={() => handleTagClick(tag)}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex flex-wrap mt-2">
                    {filters.tags.map((tag, index) => (
                        <div key={index} className="bg-blue-500 text-white p-2 rounded-md m-1 flex items-center">
                            <span className="mr-2">{tag}</span>
                            <button type="button" onClick={() => handleTagRemove(tag)} className="text-white">
                                &#10005;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterMenu;
