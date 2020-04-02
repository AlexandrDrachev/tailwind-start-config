import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../bg-mask';

class Partners extends Component {

    render() {

        return (
            <div className="font-doHyeon flex flex-col items-center w-full text-white">
                <div className="flex w-full justify-center mb:flex-wrap">
                    <div className="relative font-spicyRice flex justify-center w-300 h-300 text-4xl
                    items-center border border-white rounded">
                        <BgMask />
                        <div className="z-20 flex flex-col justify-center items-center">
                            <div>Partner 1</div>
                            <div className="text-base">component is still in development...</div>
                        </div>
                    </div>
                    <div className="relative mx-5 mb:my-2 mb:mx-0 font-abrilFatface flex justify-center w-300 h-300 text-4xl
                    items-center border border-white rounded">
                        <div className="z-20 flex flex-col justify-center items-center">
                            <div>Partner 2</div>
                            <div className="text-base">component is still in development...</div>
                        </div>
                        <BgMask />
                    </div>
                    <div className="relative font-fredokaOne flex justify-center w-300 h-300 text-4xl
                    items-center border border-white rounded">
                        <div className="z-20 flex flex-col justify-center items-center">
                            <div>Partner 3</div>
                            <div className="text-base">component is still in development...</div>
                        </div>
                        <BgMask />
                    </div>
                </div>
            </div>
        );
    };
}

export default connect()(Partners);