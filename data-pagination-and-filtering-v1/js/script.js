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
 let firstStudent = (page * 9) - 9
 let lastStudent = (page * 9)
   // select the element with a class of `student-list` and assign it to a variable
 let studentList = document.querySelector('.student-list')
   // set the innerHTML property of the variable you just created to an empty string
 studentList.innerHTML = ''
   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++){
      if (firstStudent <= i && i < lastStudent) {
         const li = document.createElement("LI")
         const div = document.createElement("DIV")
         const img = document.createElement("IMG")
         const h3 = document.createElement("H3")
         const span = document.createElement ("SPAN")
         const div2 = document.createElement ("DIV")
         const span2 = document.createElement ("SPAN")

         li.className = "student-item cf"
         div.className = "student-details"
         img.className = "avatar"
         span.className = "email"
         div2.className = "joined-details"
         span2.className = "date"

         h3.textContent = `${data[i].name.first} ${data[i].name.last}`
         span.textContent = `${data[i].email}`
         img.src = `${data[i].picture.large}`
         span2.textContent = `${data[i].registered.date}`

         studentList.appendChild(li)
         li.appendChild(div)
         div.appendChild(img)
         div.appendChild(h3)
         div.appendChild(span)
         li.appendChild(div2)
         div2.appendChild(span2)

         // studentList.insertAdjacentHTML('beforeend',  )
         }
         
      }
       
   }

   showPage(data, 1)
     // inside the loop create a conditional to display the proper students
       // inside the conditional:
         // create the elements needed to display the student information
         // insert the above elements
 


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions


/*
Code that I'm not sure will work as i want it to 
*/

// const li = document.createElement("LI")
// const div = document.createElement("DIV")
// const img = document.createElement("IMG")
// const h3 = document.createElement("H3")
// const span = document.createElement ("SPAN")
// const div2 = document.createElement ("DIV")
// const span2 = document.createElement ("SPAN")

// li.className = "student-item cf"
// div.className = "student-details"
// img.className = "avatar"
// span.className = "email"
// div2.className = "joined-details"
// span.className = "date"

// document.body.appendChild(li)
// li.appendChild(div)
// div.appendChild(img)
// div.appendChild(h3)
// div.appendChild(span)
// li.appendChild(div2)
// div2.appendChild(span2)
// }