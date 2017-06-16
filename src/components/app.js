import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';


BigCalendar.momentLocalizer(moment);
export default class App extends Component {

	onSpecifiedEvent(event) {
		var message = event.title + " majlis will be held on " + event.start.toLocaleDateString();
		
		if (event.title.includes("(K)")) {
			message += ". This is a Khushali majlis."
		}
		else if (event.title.includes("(B)")) {
			message += ". Beej will be observed on this day."
		}
		alert (message);
	}

	render() {
		return (
			<BigCalendar
				style={{height: 550}}
				{...this.props}
				events={events}
				views={["month", "agenda"]}
				defaultDate={new Date(2017, 1, 1)}
				onSelectEvent={event => this.onSpecifiedEvent(event)}
			/>
		)
	}
}