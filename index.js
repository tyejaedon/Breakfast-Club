// Global counter variable to track total checks
let count = [0,0,0,0,0];
let prices = [200,50,280,1200,120];
let calc = 0;
// Get check button elements (using a more efficient approach)
const checkButtons = document.querySelectorAll('#check1, #check2, #check3, #check4, #check5');
const cancel = document.querySelectorAll('#cancel1, #cancel2, #cancel3, #cancel4, #cancel5');
const total = document.getElementById('total');
const cart = document.getElementById('checkout');
total.textContent = 0;

// Get counter display elements (using the same approach)
const counterElements = document.querySelectorAll('#counter1, #counter2, #counter3, #counter4, #counter5');


const placement = document.getElementById('ordered')
function showimages(src,width,height) {
  var image = document.createElement('img');
  image.src = src;
  image.width = width;
  image.height = height;
cart.addEventListener('mouseenter',() =>{
  placement.style.opacity = '1';
  placement.appendChild(image);
});  
cart.addEventListener('mouseleave',()=>{
  placement.style.opacity = '0';

})
}
function removeimage(src) {
  var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (img.src.indexOf(src) > -1) {
        img.parentNode.removeChild(img);
    }
}

}






// Add a click event listener to each check button
checkButtons.forEach((checkButton, index) => {
  checkButton.addEventListener('click', () => {

    //previous value of the count used of validating 
    var prevcount = [count[0],count[1],count[2],count[3],count[4]]

    // Increment the  counter
        count[index] ++;
    // Update the corresponding counter display based on index
    counterElements[index].textContent = count[index];
// handling of image display at the checkout of items ordered
if(count[0] >prevcount[0]){
  showimages('assets/rice.jpeg',100,100);
  removeimage('assets/rice.jpeg');
}
if(count[1] >prevcount[1]){
  showimages('assets/chapati.png',100,100);
  removeimage('assets/chapati.png');
}
if(count[2] >prevcount[2]){
  showimages('assets/beef.png',100,100);
  removeimage();
}
if(count[3] >prevcount[3]){
  showimages('assets/chicken.png',100,100);
}
if(count[4] >prevcount[4]){
  showimages('assets/chips.jpeg',100,100);
}

    calc += prices[index];
    total.textContent = calc;
  });
});


cancel.forEach((cancel, index) => {
  cancel.addEventListener('click', () => {
    // Decrement the global counter
    if(count[index] > 0){
        count[index] --;
        counterElements[index].textContent = count[index];

        calc -= prices[index];
        total.textContent = calc;
    }

  
    
   
  });
});


