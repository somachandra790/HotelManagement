import { ActionTypes, HotelAction } from "../Actions/hotels.actions";
import Hotel from "../Models/hotel";

export interface HotelState {
    hotels: Hotel[];
    loading: boolean;
    error: string | any;
}

const initialState: HotelState = {
    hotels: [

    ],
    loading: false,
    error: ""
}

export function HotelsReducer(state: HotelState = initialState, action: HotelAction) {
    let updatedHotels : Hotel[] = [];
    let index : number;

    switch (action.type) {

        case ActionTypes.GET_HOTELS:
            return {
                ...state,
                loading: true
            }

        case ActionTypes.GET_HOTELS_SUCCESS:
            return {
                ...state,
                hotels: action.payload,
                loading: false
            }
        case ActionTypes.GET_HOTELS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case ActionTypes.ADD_HOTEL:
            return {
                ...state,
                hotels: [...state.hotels, action.payload],
                loading: false
            }

        case ActionTypes.DELETE_HOTEL:
            updatedHotels = [...state.hotels]
            index = updatedHotels.findIndex(hotel => hotel.id === action.payload)
            updatedHotels.splice(index, 1)
            return {
                ...state,
                hotels: [...updatedHotels],
                loading: false
            }

        case ActionTypes.UPDATE_HOTEL:
            updatedHotels = [...state.hotels]
            index = updatedHotels.findIndex(hotel => hotel.id === action.payload.id)
            updatedHotels.splice(index, 1, action.payload)
            return {
                ...state,
                hotels: [...updatedHotels],
                loading: false
            }
        default:
            return state;
    }
}
