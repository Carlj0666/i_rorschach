i-Rorschach - Basic Outline
	Displays Rorschach inkblots

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