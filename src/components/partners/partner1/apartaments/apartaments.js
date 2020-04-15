import React, { Component } from 'react';

import { connect } from 'react-redux';
import BgMask from '../../../bg-mask';

class Apartaments extends Component {

    state = {
        deluxeBalconyStudio: false,
        studio: false,
        poolSideMaisonette: false,
        gardenViewMaisonette: false,
        twoRoomApartment: false,
    };

    onToggleDeluxeBalconyStudio = () => {
        this.setState({deluxeBalconyStudio: !this.state.deluxeBalconyStudio});
    };

    onToggleStudio = () => {
        this.setState({studio: !this.state.studio});
    };

    onTogglePoolSideMaisonette = () => {
        this.setState({poolSideMaisonette: !this.state.poolSideMaisonette});
    };

    onToggleGardenViewMaisonette = () => {
        this.setState({gardenViewMaisonette: !this.state.gardenViewMaisonette});
    };

    onToggleTwoRoomApartment = () => {
        this.setState({twoRoomApartment: !this.state.twoRoomApartment});
    };

    render() {

        const { apartamentsPhotos } = this.props;
        const { deluxeBalconyStudio, studio, poolSideMaisonette, gardenViewMaisonette, twoRoomApartment } = this.state;

        return (
            <div
                className="
                flex flex-col justify-center items-center w-full text-center">
                <div
                    className="
                    mb-2 p-1 relative flex justify-center flex-col mb:items-center border border-white rounded">
                    <div
                        className="z-20 mb-2">
                        Accommodation - kitchenette - fridge, hotplates, cooking utensils,
                        filter coffee machine, hairdryer, WC with shower, terrace or balcony, TV,  A/C
                    </div>
                    <div className="z-20">
                        Outdoor area - outdoor swimming pool with diving board, children’s pool,
                        treehouse play area, outdoor breakfast, and dining area, WC,
                        shower, steps leading to the beach, parking area garden –
                        flowering oleander, herbs, olive trees, palm trees, pomegranate, and fig trees.
                    </div>
                    <BgMask />
                </div>
                <div
                    className="
                    relative flex flex-col justify-center items-center border border-white rounded px-1 mb-2">
                    <BgMask />
                    <div className="z-20 text-2xl font-bold m-1">Deluxe balcony Studio</div>
                    <div className="z-20 w-11/12 flex justify-center flex-col items-center">
                        {!deluxeBalconyStudio ?
                            <img
                                className="border-2 border-white rounded"
                                alt=""
                                src={apartamentsPhotos[0]}/> : null}
                        {
                            deluxeBalconyStudio ?
                                <div className="flex flex-col justify-center items-center w-full">
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[0]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[1]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[2]}/>
                                </div> : null
                        }
                        <div
                            onClick={() => this.onToggleDeluxeBalconyStudio()}
                            className="text-red-500 font-bold cursor-pointer">
                            { !deluxeBalconyStudio ? `More...` : `Less...` }
                        </div>
                        <div>
                            The DELUXE BALCONY STUDIO on the first floor of the building overlooking the pool is stylish,
                            modern and comfortable with spectacular views of the sea,
                            pool and garden from the oversized balcony.
                        </div>
                    </div>
                </div>
                <div
                    className="
                    relative flex flex-col justify-center items-center border border-white rounded px-1 mb-2">
                    <BgMask />
                    <div className="z-20 text-2xl font-bold m-1">Studio</div>
                    <div className="z-20 w-11/12 flex justify-center flex-col items-center">
                        {!studio ?
                            <img
                                className="border-2 border-white rounded"
                                alt=""
                                src={apartamentsPhotos[3]}/> : null}
                        {
                            studio ?
                                <div className="flex flex-col justify-center items-center w-full">
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[3]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[4]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[5]}/>
                                </div> : null
                        }
                        <div
                            onClick={() => this.onToggleStudio()}
                            className="text-red-500 font-bold cursor-pointer">
                            { !studio ? `More...` : `Less...` }
                        </div>
                        <div>
                            7 STUDIOS in total each uniquely different and all with sea view.
                            Beautifully situated with a private outdoor terrace or balcony overlooking the sea.
                            All STUDIOS consist of comfortable and stylish accommodation with spectacular views.
                        </div>
                    </div>
                </div>
                <div
                    className="
                    relative flex flex-col justify-center items-center border border-white rounded px-1 mb-2">
                    <BgMask />
                    <div className="z-20 text-2xl font-bold m-1">Pool side Maisonette</div>
                    <div className="z-20 w-11/12 flex justify-center flex-col items-center">
                        {!poolSideMaisonette ?
                            <img
                                className="border-2 border-white rounded"
                                alt=""
                                src={apartamentsPhotos[6]}/> : null}
                        {
                            poolSideMaisonette ?
                                <div className="flex flex-col justify-center items-center w-full">
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[6]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[7]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[8]}/>
                                </div> : null
                        }
                        <div
                            onClick={() => this.onTogglePoolSideMaisonette()}
                            className="text-red-500 font-bold cursor-pointer">
                            { !poolSideMaisonette ? `More...` : `Less...` }
                        </div>
                        <div>
                            The three MAISONETTES are comfortable split-level open apartments.
                            They all have Air Conditioning upstairs as well as a flat screen TV.
                        </div>
                    </div>
                </div>
                <div
                    className="
                    relative flex flex-col justify-center items-center border border-white rounded px-1 mb-2">
                    <BgMask />
                    <div className="z-20 text-2xl font-bold m-1">Garden view Maisonette</div>
                    <div className="z-20 w-11/12 flex justify-center flex-col items-center">
                        {!gardenViewMaisonette ?
                            <img
                                className="border-2 border-white rounded"
                                alt=""
                                src={apartamentsPhotos[9]}/> : null}
                        {
                            gardenViewMaisonette ?
                                <div className="flex flex-col justify-center items-center w-full">
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[9]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[10]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[11]}/>
                                </div> : null
                        }
                        <div
                            onClick={() => this.onToggleGardenViewMaisonette()}
                            className="text-red-500 font-bold cursor-pointer">
                            { !gardenViewMaisonette ? `More...` : `Less...` }
                        </div>
                        <div>
                            The MAISONETTE situated in the main building overlooks the oleander garden and pool
                            from the terrace and the sea from the balcony upstairs.
                            This MAISONETTE sleeps a family up to 4 persons and has 2 single beds downstairs
                            and a queen size bed upstairs.
                        </div>
                    </div>
                </div>
                <div
                    className="
                    relative flex flex-col justify-center items-center border border-white rounded px-1 mb-2">
                    <BgMask />
                    <div className="z-20 text-2xl font-bold m-1">Two-room Apartment</div>
                    <div className="z-20 w-11/12 flex justify-center flex-col items-center">
                        {!twoRoomApartment ?
                            <img
                                className="border-2 border-white rounded"
                                alt=""
                                src={apartamentsPhotos[12]}/> : null}
                        {
                            twoRoomApartment ?
                                <div className="flex flex-col justify-center items-center w-full">
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[12]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[13]}/>
                                    <img
                                        className="mb-2 border-2 border-white rounded"
                                        alt=""
                                        src={apartamentsPhotos[14]}/>
                                </div> : null
                        }
                        <div
                            onClick={() => this.onToggleTwoRoomApartment()}
                            className="text-red-500 font-bold cursor-pointer">
                            { !twoRoomApartment ? `More...` : `Less...` }
                        </div>
                        <div>
                            Both 2ROOM APARTMENTS are situated next to each other in the middle of
                            the main building facing the Tree House with garden and sea views.
                            One has been adapted in some areas for Wheelchair access.
                            Both are suitable for couples or a family.
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        apartamentsPhotos: state.partner1State.apartamentsPhotos
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Apartaments);