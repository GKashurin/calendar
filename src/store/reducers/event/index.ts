import {EventAction, EventActionEnum, IEventState} from "./types";

const initialState:IEventState = {
	events: [],
	guests: []
}

export default function EventReducer(state = initialState, action: EventAction): IEventState {
	switch (action.type) {
		case EventActionEnum.SET_GUESTS:
			return {...state, guests: action.payload}
		case EventActionEnum.SET_EVENTS:
			return {...state, events: action.payload}
		default:
			return state
	}
}