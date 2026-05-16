const dateDisplay = document.getElementById('dateDisplay');
const showDateBtn = document.getElementById('showDateBtn');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

showDateBtn.addEventListener('click',()=>{
    const now = new Date();

    const dayName = daysOfWeek[now.getDay()];
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() is zero-based
    const date = now.getDate();
  
    dateDisplay.textContent = `Today is ${dayName}, ${year}/${month}/${date}`;
});