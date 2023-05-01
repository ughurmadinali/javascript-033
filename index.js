const users = [
    {
        userName: 'Alex',
        password: 202332,
    },
    {
        userName: 'Lewis',
        password: 233202,
    },
    {
        userName: 'Hardwell',
        password: 102003005,
    },
]

const allInputs = document.querySelectorAll('input')
const btn = document.querySelectorAll('.btn')
const error = document.querySelectorAll('.error')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let currentUser = {
        userName: allInputs[0].value,
        password: allInputs[1].value,
    }
    let userAvabile = (users.some((user) => {
        return user.userName === currentUser.userName && user.password === currentUser.password
    }));

    if(userAvabile){
        location.href = 'https://www.livescore.com/en/'
    }
    else{
        error.style.display = 'block'
    }
})