i-Rorschach - Basic Outline
	Displays Rorschach inkblots
	Allows visitors to comment

	TO DO:
		left off at THUNK lecture 30:00: https://www.youtube.com/watch?v=t2oR5hihOIU

	


APP STRUCTURE NOTES:
App - Connect Router in APP.JS -  review routing
  /         - homepage - links to /inkblots
	/inkblots   - inkblotList component - connected to store
				- inkblotCards - an individual inkblot in the list
				/inkblot/id - inkblotShow component - connected to store - the actual detail about the inkblot
						- inkblotDetail - inkblot
						- comments - comments
							- comment - comment
						- commentForm - connected to store

STATELESS COMPONENTS - need 5



	
