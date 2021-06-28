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

APP STRUCTURE NOTES
    inkblot cards container - displays everything
        inkblot Card -  Displays imgs, form and subbmitted comments
            Form to submit comments (no users)
            inkblot - inkblot
                Comment card - comment

STATELESS COMPONENTS - need 5
home 
about 
nav bar ?
picture cards

Started coding for thunk in index file (commented out), and also (inkblotCardActions file...createted inkblotCardReducer file, no code yet), research...Thunk, implement

Vids to study
21:49 - Friday pod - https://www.youtube.com/watch?v=WdgryU-QYiA
36:32 - 42:00 THUNK - https://www.youtube.com/watch?v=t2oR5hihOIU

TO DO NOTES:


2) Consider needed reducers and actions
3) fetch the data from the back end
4) Implement THUNK



APP LAYOUT MAP

App - Connect Router in APP.JS -  review routing
  /         - homepage - links to /inkblots
	/inkblots   - inkblotList component - connected to store
				- inkblotCards - an individual inkblot in the list
				/inkblot/id - inkblotShow component - connected to store - the actual detail about the inkblot
						- inkblotDetail - inkblot
						- comments - comments
							- comment - comment
						- commentForm - connected to store
	
