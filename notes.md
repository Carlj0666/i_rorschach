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

(X) 1) Create new InkblotCard with fetched data
() 2) Show coments in inkblot card
() 3) Click an inkblot (or buton etc) and display the inkblot show
() 4) 
	
APP -> HomePage
	-> INDEX
		
	-> FORM