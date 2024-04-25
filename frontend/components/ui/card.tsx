import React from 'react';
import Link from 'next/link';

interface CardProps {
    href: string;
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ href, title, description, imageUrl }) => {
    return (
        <div className="max-w-xs bg-white border border-orange-400 shadow dark:bg-gray-800 dark:border-yellow-700 p-3">
            <a href="#">
                <img src={imageUrl} alt="" />
            </a>
                  <Link href={href} passHref className="text-center">
                    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
            <div className="p-5">
                <div className="flex gap-3 my-3">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/8600/8600557.png" alt="" />{description}
                </div>
                <div className="flex gap-3 my-3">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/3816/3816653.png" alt="" />{description}
                </div>
                <div className="flex gap-3 my-3">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/1040/1040005.png" alt="" />{description}
              </div>
                <div className="flex gap-3 my-3">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/3697/3697758.png" alt="" />{description + ' €'}
                </div>
                <ul className="flex justify-center">
                    <li className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Link href={href} passHref>
                            Prendre ma place
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
