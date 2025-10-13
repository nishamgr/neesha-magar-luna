const body = document.body; //reference to the <body> elemnt
 
const footerElement = document.createElement('footer'); //new footer element

body.appendChild(footerElement);
const today = new Date(); // new date obj
const thisYear = today.getFullYear(); //current year from the date obj
const footer = document.querySelector('footer'); //select the <footer> element form the DOM
const copyright = document.createElement('p'); // new <p> element

copyright.innerHTML = `&copy; ${thisYear} Neesha Magar`; //inner HTML 

body.appendChild(copyright); //appending the <p> to the footer

//array of strings
const skills = ['JavaScript', 'HTML', 'CSS', 'SQL', 'GIT'];

const skillsSection = document.getElementById('skills'); //using getElementById
const skillsList = skillsSelectiion.querySelector('ul');

//forloop to iterate over skills array
for (let i =0; i < skills.length; i++) {
    const skills = DocumentType.createElement('li'); //new <li> element
    skills.textContent = skills[i]; //set text
    skillsList.appendChild(skill); //add to <ul>

}