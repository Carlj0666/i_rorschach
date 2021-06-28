i-Rorschach - Basic Outline
	Displays Rorschach inkblots
	Allows visitors to comment

inkblot/Comment associations:
	An inkblot has many comments
	A comment belongs to an inkblot

	GET
		Fetch -
		Draws a random inkblot and displays it
		Fetch -
		Shows inkblot comments when clicked

	POSTER
		Comments on an inkblot

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


TO DO NOTES:


	
