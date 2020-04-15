

export const initialPartner1State = {
    partner1Test: "partner1StateIsReady!",
    homeText: "A unique oasis paradise boldly perched on Peristeras Hill on the outskirts of Ierapetra where the sun , the sea, the pool, the garden and the hosts of  Nicolas Apartments invitingly entice and ensure a majestic, enchanting , romantic , unforgettable getaway.\n" +
    "\n" +
    "Nicolas Holiday Apartments, a sea side location on the South Coast of Crete, east of Ierapetra , which is the southern most town in Europe  having the sunniest, warmest disposition all the year round. Exceptional for family holidays, for quiet, majestic, quality time,  far from the bustling city life, relaxing, swimming, snorkeling, wining, dining and tasting local home made delicacies. Weddings, Birthdays, Proposals, Surprise Parties all have happened here successfully catered for by the Nicolas Team.\n" +
    "\n" +
    "The charming, self-contained holiday apartments made up of STUDIOS, 2ROOM APARTMENTS and MAISONETTES have been lovingly improved over the years and boast modern bathrooms and quaint, cosy interiors.  \n" +
    "\n" +
    "The swimming pool and children’s pool is a swimmer’s delight. The depth, the length and the diving board combination plus the endless views to the sea are the essence of a perfect, fun-filled holiday destination in a family  friendly , relaxing atmosphere.\n" +
    "\n" +
    "This immaculate, well-kept hotel rental east of Ierapetra , 20metres above sea level offering spectacular views of the Mediterranean Sea with breathtaking views of pristine, sparkling clear waters  and the colourful surroundings of the lush oleander and olive tree gardens from every holiday apartment, contribute to a relaxing, wind-down experience ensuring  a memborable stay. Steps lead to the crystal clear waters of Peristeras Beach to an accessible bay weather permitting.\n" +
    "\n" +
    "Home made meals are available on the premises in the eating area above the pool. Breakfast, with home made jams and local delicacies can be enjoyed overlooking the pool and sea on a daily basis with an abundance of variety. Dinner is a friendly get together with traditional home cooking , freshly made daily using olive oil picked by the hosts and fresh, local ingredients. Every morning the daily menu is announced for those joining the evening meal , pre-ordering is essential.  \n" +
    "\n" +
    "Ask for tips and ideas for daily tours that are hideaways and favourites among the locals. We know the best places and will share them with you so you can enjoy the secrets of wonderful East Crete.\n" +
    "\n" +
    "Close to us -\n" +
    "\n" +
    "Shopping and activities\n" +
    "\n" +
    "Bakery  -  Food Store - Petrol Station and Cafe Services -  Bus Stop\n" +
    "\n" +
    "Go-Carts, Horse Riding,  Beach, Taverna\n" +
    "\n" +
    "Beach walk to Ierapetra\n" +
    "\n" +
    "Supermarkets\n" +
    "\n" +
    "Saturday Morning Street Market\n" +
    "……….and so much more to see and do\n" +
    "\n" +
    "We look forward to making your visit and stay at Nicolas Apartments a yearning to always come back!",
    homePhotos: [
        "https://www.nicolasapartments.gr/assets/photos/thumb__8302c-IMG_0934.JPG",
        "https://www.nicolasapartments.gr/assets/photos/thumb__f2e00-83927596_2843128685753515_4447247564797902848_n.jpg",
        "https://www.nicolasapartments.gr/assets/photos/thumb__5c24a-IMG_0928.JPG",
        "https://www.nicolasapartments.gr/assets/photos/thumb__6a8a1-84059251_2929255213772780_6012051931965423616_n.jpg",
        "https://www.nicolasapartments.gr/assets/photos/thumb__4f374-69427995_648131382344614_6920411663661268992_n.jpg",
        "https://www.nicolasapartments.gr/assets/photos/thumb__3bc77-IMG_0925.JPG",
        "https://www.nicolasapartments.gr/assets/photos/thumb__ae241-IMG_0282.JPG"
    ],
    apartamentsPhotos: [
        "https://media-cdn.tripadvisor.com/media/photo-w/10/c6/17/b6/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/10/c6/17/96/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/11/d0/71/2d/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/11/d0/71/f1/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/10/c6/18/a1/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/10/c6/18/80/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/10/c6/17/df/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/10/c6/18/93/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/18/c9/5b/ac/guest-room.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/18/c9/5b/a1/guest-room.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/18/c9/5b/97/guest-room.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/17/fa/af/25/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/13/d7/d8/aa/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/d7/d8/ee/mitsis-laguna-resort.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-w/17/6a/77/5d/mitsis-laguna-resort.jpg"
    ],
    currentMonth: null,
    startMonth: null,
    endMonth: null,
    startOfRest: null,
    startOfRestError: false,
    endOfRest: null
};

export const partner1Reducer = (state, action) => {

    if (state === undefined) {
        return initialPartner1State;
    }

    switch (action.type) {

        case "PARTNER_1_STATE_TEST_SAGA":
            console.log('partner1 reducer test: ', state);
            return state;
        case "GET_CURRENT_MONTH_SAGA":
            return {
                ...state,
                currentMonth: action.payload
            };
        case "GET_START_MONTH_SAGA":
            return {
                ...state,
                startMonth: action.payload
            };
        case "GET_END_MONTH_SAGA":
            return {
                ...state,
                endMonth: action.payload
            };
        case "GET_START_OF_REST_SAGA":
            return {
                ...state,
                startOfRest: action.payload
            };
        case "START_OF_REST_ERROR_SAGA":
            return {
                ...state,
                startOfRestError: action.payload
            };

        default:
            return state;
    }
};