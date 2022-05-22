import {IUser} from "../../../models/IUser";
import {EventActionEnum, ISetEventsAction, ISetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const EventActions = {
	setGuests: (payload: IUser[]): ISetGuestsAction => ({type: EventActionEnum.SET_GUESTS,payload}),
	setEvents: (payload: IEvent[]): ISetEventsAction => ({type: EventActionEnum.SET_EVENTS,payload}),
	fetchGuests: () => async (dispatch: AppDispatch) => {
		try {
			const response = await UserService.getUsers()
			dispatch(EventActions.setGuests(response.data))
		} catch (e) {
			console.log(e)
		}
	},
	createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem('events') || '[]'
			const json = JSON.parse(events) as IEvent[];
			json.push(event);
			dispatch(EventActions.setEvents(json))
			localStorage.setItem('events', JSON.stringify(json))
		} catch (e) {
			console.log(e)
		}
	},
	fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem('events') || '[]'
			const json = JSON.parse(events) as IEvent[];
			const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
			dispatch(EventActions.setEvents(currentUserEvents))
		}
		catch (e) {
			console.log(e)
		}
	}
}