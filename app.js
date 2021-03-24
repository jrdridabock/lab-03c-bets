const betHighButton = document.getElementById('bet-high');
const betLowButton = document.getElementById('bet-low');
const cashAvailble = document.getElementById('present-cash');
const betAmount = document.getElementById('bet-amount')

let cashAvailable = 1000;
cashDisplay.textContent = cashAvailable;



betHighButton.addEventListener('click', () => {
    if(cashAvailable === 0) { 
        alert('Insufficient cash to bet.');
        return;
    }
})

betLowButton.addEventListener('click', () => {
    if(cashAvailable === 0) { 
        alert('Insufficient cash to bet.');
        return;
    }
})


