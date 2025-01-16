const input = document.querySelector("#favchap");
const button = document.querySelector ("button");
const list = document.querySelector ("___"); /*In your blank js file, declare three (3) variables that hold references to the input, button, and list elements*/

const li = document.createElement ("li"); /*Create a li element that will hold each entries chapter title and an associated delete button.*/
/*We identified this variable as li, however, that was just for simplicity.
The variable identifier/name did not have to be named the same as the element being created.*/


const deletButton = document.createElement ("button");

li.textContent = input.Value;
/*textContent is preferred over innerHTML because it is more secure.
However, if you need to include HTML tags, then you would use innerHTML.
textContent will not render HTML tags. It will display the tags as text.
Why is the value property used?

Because the input variable references an HTML input text field and that is what is wanted, i.e., the user's entry. Here is the HTML that was provided: <input type="text" id="favchap" placeholder="Alma 5"> */

deletButton.textContent =  "x";

li.append(deletButton); /*Append the li element variable with the delete button.*/
list.append(li); /*Append the li element variable to the unordered list in your HTML.*/

