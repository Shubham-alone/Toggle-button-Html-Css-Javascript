let  getButton = document.getElementById('river');

let  Current_mode = 'light';

getButton.addEventListener('click', () => {
    if (Current_mode === 'light') {
        Current_mode = 'dark';
        document.body.style.backgroundColor = 'red';
    } else {
        Current_mode = 'light';
        document.body.style.backgroundColor = 'grey';
    }
})