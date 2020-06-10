import React, { Component } from 'react';

import { connect } from 'react-redux';

class MessangerModalOptions extends Component {

    render() {

        const idx = localStorage.getItem("indexMessage");

        const { item1, item1Action, item2, item2Action, item3, item3Action, item4, item4Action } = this.props;

        console.log('idxMessageModal: ', idx);

        return (
            <div
                className="z-30 fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center h-full">
                <div
                    className="
                    z-30 fixed top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90 flex flex-col justify-center items-center p-2">
                </div>
                <div
                    className="
                    z-40 w-300 h-300 rounded flex flex-col
                    justify-center items-center bg-yellow-400 text-gray-900 font-bold">
                    <div
                        onClick={() => item1Action()}
                        className="
                        w-full h-full flex justify-center items-center border-b border-gray-900
                        cursor-pointer">
                        {item1}
                    </div>
                    <div
                        onClick={() => item2Action(idx)}
                        className="
                        w-full h-full flex justify-center items-center border-b border-gray-900
                        cursor-pointer">
                        {item2}
                    </div>
                    <div
                        onClick={() => item3Action()}
                        className="
                        w-full h-full flex justify-center items-center border-b border-gray-900
                        cursor-pointer">
                        {item3}
                    </div>
                    <div
                        onClick={() => item4Action()}
                        className="
                        w-full h-full flex justify-center items-center border-b border-gray-900
                        cursor-pointer text-red-600">
                        {item4}
                    </div>
                </div>
            </div>
        );

    };
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MessangerModalOptions);