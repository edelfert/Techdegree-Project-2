/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
 let firstStudent = (page * 9) - 9;
 let lastStudent = (page * 9);
   // select the element with a class of `student-list` and assign it to a variable
 let studentList = document.querySelector('.student-list')
   // set the innerHTML property of the variable you just created to an empty string
 studentList.innerHTML = '';
   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++){
      if (firstStudent <= i && i < lastStudent) {
        //create elements to display student information
         const li = document.createElement("LI");
         const div = document.createElement("DIV");
         const img = document.createElement("IMG");
         const h3 = document.createElement("H3");
         const span = document.createElement ("SPAN");
         const div2 = document.createElement ("DIV");
         const span2 = document.createElement ("SPAN");
        //make elements have respective class names.
         li.className = "student-item cf";
         div.className = "student-details";
         img.className = "avatar";
         span.className = "email";
         div2.className = "joined-details";
         span2.className = "date";
        // add data to elements using loop
         h3.textContent = `${data[i].name.first} ${data[i].name.last}`;
         span.textContent = `${data[i].email}`;
         img.src = `${data[i].picture.large}`;
         span2.textContent = `${data[i].registered.date}`;
        // add elements to the page
         studentList.appendChild(li);
         li.appendChild(div);
         div.appendChild(img);
         div.appendChild(h3);
         div.appendChild(span);
         li.appendChild(div2);
         div2.appendChild(span2);

         // studentList.insertAdjacentHTML('beforeend',  )
         }
         
      }
       
   }

/*
Create the `addPagination` function
Add page numbers and change data based on number clicked. 
*/

function addPagination (list) {
  //create variable to store page numbers needed & select link-list class
  const buttons = (list.length / 9) + 1;
  const elementUl = document.querySelector(".link-list");
  //set Ul to blank string
  elementUl.innerHTML = '';
  // loop over variable for number of pages needed 
  for (let i = 1; i <= buttons; i++) {
    //create elements for buttons 
    const li = document.createElement('LI');
    const buttonElement = document.createElement('BUTTON');
    //change button string dynamically 
    buttonElement.type = "button";
    buttonElement.innerHTML = i;
     if (buttonElement.innerHTML === "1") {
      buttonElement.className = "active";
    } 
    // add elements to page 
    elementUl.appendChild(li);
    li.appendChild(buttonElement);

    //click event to change data on number clicked
    buttonElement.addEventListener('click', (e) => { 
      
      const buttons = document.querySelector(".active") 
      buttons.className = ""
      const target = e.target;

      target.className = "active";

      showPage(data, target.innerHTML)
      
       })
      
  }
}

// Call functions
showPage(data, 1)
addPagination(data)
