i-Rorschach - Basic Outline
	Displays Rorschach inkblots
	Allows visitors to comment

	TO DO:
		left off at THUNK lecture 43:59: https://www.youtube.com/watch?v=t2oR5hihOIU

		1) Get into form build next

APP STRUCTURE NOTES:
App - Connect Router in APP.JS -  review routing
  /         - homepage - links to /inkblots
	/inkblots   - inkblotList component - connected to store
				- inkblotCard - an individual inkblot in the list
				/inkblot/id - inkblotShow component - connected to store - the actual detail about the inkblot
						- inkblotDetail - inkblot
						- comments - comments "list"
							- comment - comment
						- commentForm - connected to store

STATELESS COMPONENTS - need 5
	
-> APP 	-> HomePage
	   	-> INDEX
		-> NavBar
		-> Inkblot
		

		Left off woring on POST error from backend, something to do with create action in the controller

		inkblotCardActions.js:29 POST http://127.0.0.1:3001/inkblots 500 (Internal Server Error)

		Rails as an api (REVIEWED BUT NO ANSWERS) - https://www.youtube.com/watch?v=SJlvydXVHcg
		MAYBE JS CRUD?