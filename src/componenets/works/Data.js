import TaskSchedularApp from '../../assets/work_task_schedular.jpg';
import WeatherApp from '../../assets/work_weather.jpg';
import UIImplementation from '../../assets/work_ui_implementation.jpg';
import Portfolio from '../../assets/work_portfolio.jpg';
import TodolistApp from '../../assets/work_todolist.jpg';
import RestApi from '../../assets/work_rest_api.jpg';

export const Data = [
	{
		id: 1,
		image: WeatherApp,
		title: 'Weather App',
		description:
			'The React Weather App (Weather4Cast) delivers real-time weather updates in a clean, easy-to-use interface. Users can search by city to view current conditions, hourly forecasts, and details like temperature, humidity, and wind speed. With features like a UV index and weather data for major cities, the app keeps users informed about the weather at a glance.',
		stacks: 'React Tailwind',
		github: 'https://github.com/KhalidHayKay/Weather4Cast',
		website: 'https://myweather4cast.netlify.app/',
	},
	{
		id: 2,
		image: TaskSchedularApp,
		title: 'Task Scheduler App',
		description:
			"The Task Scheduler App (Taskify) is a simple yet effective tool I designed to help individuals manage and organized their tasks. With it's easy-to-use interface, users can create, manage, categorize and prioritize daily to-dos and long-term projects. The app includes automated email notifications that alert users when a task is approaching its due date or becomes overdue.",
		stacks: 'PHP TypeScript Tailwind Symfony',
		github: 'https://github.com/KhalidHayKay/Taskify',
		website: null,
	},
	{
		id: 3,
		image: RestApi,
		title: 'Rest API',
		description:
			'Built to handle basic CRUD operations, this RESTful API allows users to rate experiences, leave comments, and view aggregated feedback. Designed for seamless integration, the API provides a reliable backend for managing customer feedback in real-time.',
		stacks: 'PHP',
		github: 'https://github.com/KhalidHayKay/Feedback-REST',
		website: null,
	},
	{
		id: 4,
		image: UIImplementation,
		title: 'UI Implementation',
		description:
			'This project involved implementing a simple, clean user interface based on a given design task. The focus was on translating design specifications into a responsive and visually appealing web interface, ensuring pixel-perfect accuracy and smooth user interactions.',
		stacks: 'HTML CSS',
		github: 'https://github.com/KhalidHayKay/willow_studio',
		website: 'https://haykay-willowstudio.netlify.app',
	},
	{
		id: 5,
		image: TodolistApp,
		title: 'Todolist App',
		description:
			'The Todo List App is a simple task management tool that uses local storage, eliminating the need for a database. Users can add, delete, edit, and archive their to-dos while also marking tasks as complete. With an intuitive interface and persistent data storage in the browser, the app ensures that users’ to-do lists are always accessible and up to date.',
		stacks: 'JavaScript HTML Sass',
		github: 'https://github.com/KhalidHayKay/todo-web-app',
		website: 'https://todo-webapk.netlify.app',
	},
	{
		id: 6,
		image: Portfolio,
		title: 'Portfolio Website',
		stacks: 'React CSS',
		description:
			"This Portfolio Website is designed to showcase the skills, projects, and services of a professional web developer. Built with React, it features a modern and clean design that reflects the developer's personal brand. The site includes sections for work experience, technical skills, and completed projects, offering a detailed overview of rendered. It is an ideal platform for professionals looking to present their work to potential clients and collaborators",
		github: 'https://github.com/KhalidHayKay/Portfolio',
		website: 'https://alamutukhalid.netlify.app',
	},
];
