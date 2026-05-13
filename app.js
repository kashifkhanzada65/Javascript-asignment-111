const loginHandler = () => {
    
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (!email.value || !password.value) {
        alert('requied field are missing!')
        return
    }

    const getUser = JSON.parse(localStorage.getItem('users')) || []

    const findUser = getUser.find((user) => {
        if (user.email === email.value && user.password === password.value) {
            return true
        }
    })

    if (!findUser) {
        alert('Invalid email or password')
        return
    }

    email.value = ''
    password.value = ''
    localStorage.setItem('loginUser' , JSON.stringify(findUser))
    alert('login successfully!')
    location.replace('./dashboard.html')



}
