import React, { Component } from 'react';

import BgMask from '../../../bg-mask';

class Contacts extends Component {

    render() {

        return (
            <div className="mb:w-full w-400 relative flex flex-col items-center justify-center border border-white rounded p-2">
                <BgMask />
                <div className="z-20 font-bold">Address</div>
                <div className="z-20">NICOLAS APARTMENTS</div>
                <div className="z-20">Peristeras,  72200</div>
                <div className="z-20">2nd km Ierapetra- Sitia</div>
                <div className="z-20">Ierapetra, Crete, Greece</div>
                <br/>
                <div className="z-20">G.N.T.O. Reg.No:1040K123K2770501</div>
                <br/>
                <div className="z-20 font-bold">Contact</div>
                <br/>
                <div className="z-20">Tel: 0030 28420 24686</div>
                <div className="z-20">Mobile: 0030 6978272519</div>
                <div className="z-20">Email: eleni@nicolasapartments.gr</div>
                <br/>
                <div className="z-20">Reservation terms</div>
            </div>
        );
    };
}

export default Contacts;