i-Rorschach - Basic Outline
	Displays Rorschach images
	Allows visitors to comment

Image/Comment associations:
	An image has many comments
	A comment belongs to an image

	GET
		Fetch -
		Draws a random image and displays it
		Fetch -
		Shows image comments when clicked

	POSTER
		Comments on an image

APP STRUCTURE NOTES
    Image cards container - displays everything
        Image Card -  Displays imgs, form and subbmitted comments
            Form to submit comments (no users)
            Image - image
                Comment card - comment

STATELESS COMPONENTS - need 5
home 
about 
nav bar ?
picture cards

Started coding for thunk in index file (commented out), and also (imageCardActions file...createted imageCardReducer file, no code yet), research...Thunk, implement

Vids to study
21:49 - Friday pod - https://www.youtube.com/watch?v=WdgryU-QYiA
36:32 - 42:00 THUNK - https://www.youtube.com/watch?v=t2oR5hihOIU

TO DO NOTES:


2) Consider needed reducers and actions
3) fetch the data from the back end
4) Implement THUNK



APP LAYOUT MAP

App - Connect Router in APP.JS -  review routing
  /         - homepage - links to /images
	/images   - imageList component - connected to store
				- imageCards - an individual image in the list
				/image/id - imageShow component - connected to store - the actual detail about the image
						- imageDetail - image
						- comments - comments
							- comment - comment
						- commentForm - connected to store
	
