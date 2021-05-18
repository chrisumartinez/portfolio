export const Experiences = [
	{
		id: "1",
		imageName: "sbcc",
		position: "Student Development Specialist, MESA",
		location: "Santa Barbara, CA",
		duration: "Jan 2020 - Present",
		company: "Santa Barbara City College",
		description: [
			"• Mentor a select group of CS students by teaching basic coding habits, introducing industry tools, and guiding them through continous development of a legacy codebase.",

			"• Assist the program director with general support of 2 STEM oriented student organizations: SHPE and SACNAS.",
			"• Advise STEM students in progressing in extracurriculars by revising personal statements and reviewing internship applications.",
		],
	},
	{
		id: "2",
		imageName: "parabug",
		position: "Software Engineer",
		location: "Monterey, CA",
		duration: "Aug 2018 - Feb 2019",
		company: "Parabug",
		description: [
			"Deployed responsive, web application service to replace existing labor intesive quote system.",
			"Implemented client/serverside testing for user input and compiled data into JSON necessary for an accurate quote.",
			"Established a product roadmap with a vision of executing a refined and scalable product for the client",
			"Integrated Node.js/Javascript frameworks such as NodeMailer, Toastr, OAuth, and Google Maps API",
			"Generated an automatic email system to streamline job requests containing KML/PDF files from client input ot the company.",
		],
	},
	{
		id: "3",
		imageName: "sbcc",
		position: "Software Engineer",
		location: "Santa Barbara, CA",
		duration: "Nov 2015 - April 2016",
		company: "Santa Barbara City College: MESA",
		description: [
			"Constructed prototypes of UI and SQL Databases.",
			"Implemented concise, minimal UI for seamless user interactions that is tailored to the client.",
			"Integrated an SQL database to store local data in a portable location for the ease of the client",
		],
	},
];

export const Skills = [
	{
		Languages: "Python, Node.js, Java, Javascript, React",
		Other: "Git, SQL, Agile",
	},
];

export const Projects = [
	{
		title: "Heartbeats",
		keywords: ["Swift", "Apple API", "Spotify API"],
		description:
			"Developed  a Mobile iOS Application that communicates with the apple watch to play different genres  of  music according to the BPM. Developed and Tested UI elements for a simpler design. Integrated Spotify's API to allow users to sign into the app with Spotify.",
	},
	{
		title: "DigiCard",
		keywords: ["Kotlin", "Java"],
		description:
			"An Android Application that virtualizes business cards for networking. Enhanced UI for a detailed, user experience. Collaborated with colleagues to detail clear specifications within a constrained timeline. ",
	},
	{
		title: "Flix",
		keywords: ["Swift"],
		description:
			"An iOS application that utilizes a third party API to show recent released movies  and their information. Iterated through design process by receiving feedback for UI,  prototyping in increasing fidelity,  and testing across various devices.",
	},
];

export const Education = [
	{
		imageUrl: "../src/images/sbcc.jpeg",
		location: "Santa Barbara, CA",
		startDate: "Aug 2011",
		endDate: "May 2016",
		institution: "Santa Barbara City College",
		major: "Computer Science",
		studyType: "AS in Computer Science",
	},
	{
		imageUrl: "./images/csumb.png",
		location: "Monterey, CA",
		startDate: "Aug 2016",
		endDate: "May 2018",
		institution: "California State University, Monterey Bay",
		major: "Computer Science",
		studyType: "BS in Computer Science",
	},
	{
		imageUrl: "./images/codepath.jpeg",
		location: "Monterey, CA",
		startDate: "Aug 2018",
		endDate: "Dec 2018",
		institution: "CodePath iOS Bootcamp",
	},
];
