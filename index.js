// Write your code here!

// Remove the element DOM node 'main#main'
document.querySelector('main#main').remove();
// ALTERNATIVE:
// main.remove()

// Create a new element and assign it to the newHeader variable 
const newHeader = document.createElement('h1');
newHeader.id = 'victory'
// newHeader.className = 'victory' //tests pass without this
newHeader.innerHTML = "<p>Amy is the champion!</p>"