// Global counter variable to track total checks
let count = [0,0,0,0,0];
let prices = [200,50,280,1200,120];
let calc = 0;
// Get check button elements (using a more efficient approach)
const checkButtons = document.querySelectorAll('#check1, #check2, #check3, #check4, #check5');
const cancel = document.querySelectorAll('#cancel1, #cancel2, #cancel3, #cancel4, #cancel5');
const total = document.getElementById('total');
total.textContent = 0;

// Get counter display elements (using the same approach)
const counterElements = document.querySelectorAll('#counter1, #counter2, #counter3, #counter4, #counter5');


// Add a click event listener to each check button
checkButtons.forEach((checkButton, index) => {
  checkButton.addEventListener('click', () => {
    // Increment the global counter
        count[index] ++;
    // Update the corresponding counter display based on index
    counterElements[index].textContent = count[index];
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
