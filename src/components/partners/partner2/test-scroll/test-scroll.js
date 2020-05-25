import React from 'react';

import BgMask from '../../../bg-mask/index';

const list = [
    {
        id: 'a',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'b',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'c',
        firstname: 'Jave',
        lastname: 'Favidds',
        year: 1991,
    },
    {
        id: 'd',
        firstname: 'Jave',
        lastname: 'Favidds',
        year: 1991,
    },
    {
        id: 'e',
        firstname: 'Jave',
        lastname: 'Favidds',
        year: 1991,
    },
    {
        id: 'f',
        firstname: 'Jave',
        lastname: 'Favidds',
        year: 1991,
    },
    {
        id: 'g',
        firstname: 'Jave',
        lastname: 'Favidds',
        year: 1991,
    },
];

const List = () => {

    const refs = list.reduce((acc, value) => {
        acc[value.id] = React.createRef();
        return acc;
    }, {});

    const handleClick = id =>
        refs[id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    return (
    <div className="relative w-full">
        <ul className="w-full flex flex-col justify-center items-center">
            <div className="text-white z-20 font-bold">SCROLLING ELEMENT</div>
            {list.map(item => (
                <li
                    className="
                    z-20 text-white m-1 p-1 border border-white bg-indigo-700 focus: bg-indigo-800 hover:bg-indigo-800
                    rounded flex flex-col justify-center items-center"
                    key={item.id}>
                    <button
                        type="button"
                        className=""
                        onClick={() => handleClick(item.id)}>
                        Scroll Item {item.id} Into View
                    </button>
                </li>
            ))}
        </ul>

        <ul className="w-full flex flex-col justify-center items-center">
            {list.map(item => (
                <li
                    className="
                    z-20 text-white m-1 p-1 border border-white
                    rounded flex flex-col justify-center items-center"
                    key={item.id}
                    ref={refs[item.id]}>
                    <div>{item.id}</div>
                    <div>{item.firstname}</div>
                    <div>{item.lastname}</div>
                    <div>{item.year}</div>
                </li>
            ))}
        </ul>
        <BgMask />
    </div>
    );
};

export default List;

// const test1 = (
//     <div className="relative w-full">
//         <ul className="w-full flex flex-col justify-center items-center">
//             {list.map(item => {
//
//                 const ref = React.createRef();
//
//                 const handleClick = () =>
//                     ref.current.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start',
//                     );
//
//                 return (
//                     <li
//                         ref={ref}
//                         className="
//                             z-20 text-white m-1 p-1 border border-white
//                             rounded flex flex-col justify-center items-center"
//                         key={item.id} >
//                         <div>{item.id}</div>
//                         <div>{item.firstname}</div>
//                         <div>{item.lastname}</div>
//                         <div>{item.year}</div>
//                         <button type="button" onClick={handleClick}>
//                             Scroll Into View
//                         </button>
//                     </li>
//                 );
//             })}
//                 </ul>
//                 <BgMask/>
//                 </div>
// );
