import React from 'react'

function User({details}) {
    return (
        <div className="p-8 m-6 border">
            <h2 className="text-2xl text-gray-800 dark:text-white">{details.name}</h2>
            <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">{details.gender}</p>
            <p className="text-xl pb-4 text-gray-500 dark:text-gray-200 font-light">Membership Level: {details.status}</p>
            <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Add Friend</button>
        </div>
    )
}


export default User