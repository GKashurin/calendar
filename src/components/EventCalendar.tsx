import {Badge, Calendar} from "antd";
import {IEvent} from "../models/IEvent";
// @ts-ignore
import React, {FC} from "react";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
interface EventCalendarProps {
	events: IEvent[]
}
// @ts-ignore
const EventCalendar: FC<EventCalendarProps> = (props) => {
	function dateCellRender(value: Moment) {
		const formatedDate = formatDate(value.toDate())
		const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
		return (
			<div className='events'>
				{currentDayEvents.map((item, index) => <div key={index}>{item.description}</div>)}
			</div>
		)
	}
	return (
		<Calendar dateCellRender={dateCellRender}/>


	);
};

// @ts-ignore
export default EventCalendar;