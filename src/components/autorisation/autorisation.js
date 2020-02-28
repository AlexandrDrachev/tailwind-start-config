import React from 'react';

const Autorisation = () => {

    return (
        <div className="flex justify-center p-2">
            <div className="flex flex-col justify-center items-center w-500 h-300 mb:w-320 mb:h-250 border bg-white rounded-md">
                <div className="m-2 flex flex-col justify-center items-center">
                    <input className="bg-gray-300 m-3 rounded border border-gray-400" type="text" placeholder="login"/>
                    <input className="ml-5 bg-gray-300 rounded border border-gray-400" type="password" placeholder="password"/>
                    <div className="w-full">
                        <label className="ml-10 my-4 flex items-center justify-start">
                            <input className="bg-gray-200 mr-2" type="checkbox"/>
                            Save me
                        </label>
                    </div>
                </div>
                <div className="m-2 flex flex-wrap justify-center items-center">
                    <button
                        className="mx-3 px-2 py-1 border-2 border-gray-500 bg-blue-500 rounded text-white font-bold hover:bg-blue-600">Registration</button>
                    <button
                        className="mx-3 px-2 py-1 border-2 border-gray-500 bg-green-500 rounded text-white font-bold hover:bg-green-600">Autorisation</button>
                    <button
                        className="m-2 px-4 py-1 border-2 border-gray-500 bg-yellow-500 rounded text-blue-700 font-bold hover:bg-yellow-600">I'm a guest</button>
                </div>
            </div>
        </div>
    );
};

export default Autorisation;