i-Rorschach - Basic Outline
	Displays Rorschach inkblots
	Allows visitors to comment

	TO DO:
		left off at THUNK lecture 43:59: https://www.youtube.com/watch?v=t2oR5hihOIU

		1) Get into form build next

APP STRUCTURE NOTES:
App - Connect Router in APP.JS 
  /         - homepage - links to /inkblotList
	/inkblots   - inkblotList component - connected to store
				- inkblot - Individual inkblot render linked via props
	/about		- About Page

STATELESS COMPONENTS - need 5
	
-> APP 	-> HomePage
	   	-> Index
		-> NavBar
		-> Inkblot
		-> Reducer