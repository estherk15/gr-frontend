SEARCHRESULTS
- Allow for pagination and return more than 10 results.

FILTER / SORT
- Add filter sort functionality for search results

NAVHEADER
- Use React Router and Auth so the logout isn't a page refresh.

**REFACTOR**
- Context API / Redux : too much prop drilling

**STYLE**
- App.js : find a way to make the login error message appear on the screen by the form field.


COMPLETED TASKS
<!-- - Friday, you added a select feature to each book, but not the ability to add a book to selected list. -->
<!-- - Create a method in the backend to show a unique list of books in book serializer, so that MyBooks only shows a duplicate free list of books when you log in. -->
<!-- - Why does search for rat terrier break the program? -->
<!-- LOGIN -->
<!-- - Do you have to worry about clearing the state of the input fields depending on which form you're typing information? Like if you started typing in the new user form, and then changed to the login form, but clicked the new user submit form. You don't want to create a new user when  you meant to log yourself in? -->
<!-- LIST -->
<!-- - change list to props when you take hardcoded information out from state. -->
<!-- SEARCHRESULTS -->
<!-- - Write a function to clean the incoming googlebooks data that will only pass down the fields you want to display in the Book list/book container. -->
<!-- BOOK CONTENT CONTAINER -->
<!-- - there's an error because you're mapping through the array of authors but not giving it a key -->
<!-- - Once you search for a book it needs to go back to my books once you add a book? or something... right now you see search results and that's the only thing you can do... -->
<!-- LIST BUTTON -->
<!-- - Add the Read category eventually to the backend so each user has more than the 2 lists -->
<!-- GOOGLE API ADAPTER -->
<!-- - adapter for fetch book apis and chaNge data to match what you entered -->
<!-- - Also, to convert the data coming back from the db. You don't want the array of authors to be displayed as an array of authors, you want it to be displayed "Esther, Janice, James" NOT "EstherJaniceJames" -->


Class format:
// class GoogleAPIAdapter {
  // doSomething(){ //instance
  // }

  // static doSomething(){ //class
  // }

// export default GoogleAPIAdapter

  //
  // const inst = new GoogleAPIAdapter() //instance
  // inst.doSomething()

  // GoogleAPIAdapter.doSomething() //class
