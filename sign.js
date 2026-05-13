const signupHandler = () => {
    const email = document.getElementById('email')
    const password = document.getElementById('password')


    if (!email.value || !password.value) {
        alert('requied field are missing!')
        return
    }

    const userDetail = {
        email: email.value,
        password: password.value,
    }

    const users = localStorage.getItem('users')

    if (!users) {

        localStorage.setItem('users', JSON.stringify([userDetail]))
        alert('User Signup!')

    } else {

        const userData = JSON.parse(users)

        const findEmail = userData.find((user) => {
            if (user.email === email.value) {
                return true
            }
        })

        if (findEmail) {
            alert('Email address already exist')
            return
        }

        userData.push(userDetail)
        localStorage.setItem('users', JSON.stringify(userData))

        alert('User Signup!')

    }

    email.value = ''
    password.value = ''
    location.href = './index.html'

}
