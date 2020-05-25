import React from 'react';

const ModalMessage = ({ message, action }) => {

    return (
        <div className="z-30 fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center h-full">
            <div className="
            z-30 fixed top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90 flex flex-col justify-center items-center p-2">
            </div>
            <div className="relative w-300 h-300 flex flex-col justify-center items-center">
                <div className="
                absolute z-40  top-0 right-0 bottom-0 left-0 flex flex-col border border-white rounded
                justify-center items-center">
                    <div className="z-40 font-bold">{message}</div>
                    <div className="flex justify-center mt-20">
                        <div
                            onClick={() => action(false)}
                            className="z-40 cursor-pointer flex flex-col justify-center items-center w-24 h-12 bg-blue-600 rounded">
                            Ok
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalMessage;