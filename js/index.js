function toggleMenu() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
  }
  
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

// hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
// })
  
//footer setup
const body = document.body; //reference to the <body> elemnt
const footerElement = document.createElement('footer'); //new footer element
body.appendChild(footerElement);
const today = new Date(); // new date obj
const thisYear = today.getFullYear(); //current year from the date obj 
const footer = document.querySelector('footer'); //select the <footer> element form the DOM
const copyright = document.createElement('p'); // new <p> element
copyright.innerHTML = `&copy; ${thisYear} Neesha Magar`; //inner HTML 
footer.appendChild(copyright); //appending the <p> to the footer

//append skills to the #skills section
const skills = ['JavaScript', 'HTML', 'CSS', 'SQL', 'GIT'];
const skillsSection = document.getElementById('skills'); //using getElementById
// const skillsList = skillsSection.querySelector('ul');

//forloop to iterate over skills array
// for (let i =0; i < skills.length; i++) {
//     const skillItem= document.createElement('li'); //new <li> element
//     skillItem.textContent = skills[i]; //set text
//     skillsList.appendChild(skillItem); //add to <ul>
// }
const form = document.forms['leave_message'];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    //get form name
    const name = form['usersName'].value;
    const email = form['usersEmail'].value;
    const message = form['usersMessage'].value;

   console.log(name);
   console.log(email);
   console.log(message);
   
   const messageSection = document.getElementById("message");
   const messageList = messageSection.querySelector("ul");
   const newMessage = document.createElement("li");

   newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessahe}</span>`;


   const removeButton = document.createElement("button"); //button element
   removeButton.innerText = "remove";  //set inner text to  "remove" 
   removeButton.setAttribute("type","button"); //set the type attribute to button

   removeButton.addEventListener("Click", function(){  //added eventListner to remove button
    const entry = removeButton.parentNode; //find parent element
    entry.remove(); //removes entry ele from DOM
   });

   newMessage.appendChild(removeButton);
   messageList.appendChild(newMessage);

   form.reset();
})
