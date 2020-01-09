// Write your code here!

// Remove the element DOM node 'main#main'
document.getElementById("main").remove();
// ALTERNATIVE:
// document.querySelector('main#main').remove();
// main.remove()

// Create a new element and assign it to the newHeader variable 
const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent = "<p>Amy is the champion!</p>"