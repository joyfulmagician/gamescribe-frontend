const ValidateUtil = {
    validateName: (name) => {
        if (!name)
            return {
                state: false,
                message: 'Please enter your name'
            }

        return {
            state: true,
            message: ''
        };
    },
    validateEmail: (email) => {
        if (!email)
            return {
                state: false,
                message: 'Please enter your email'
            }
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!pattern.test(email)) {
            return {
                state: false,
                message: 'Valid email required'
            }
        }
        return {
            state: true,
            message: ''
        };
    },
    validatePassword: (password) => {
        if (!password)
            return {
                state: false,
                message: 'Please enter your password'
            }
        return {
            state: true,
            message: ''
        };
    },
    validatePhoneNumber: (phoneNumber) => {
        if (!phoneNumber)
            return {
                state: false,
                message: 'Please enter your Phone number'
            }
        var pattern = /^\d{10}$/;
        if (!pattern.test(phoneNumber)) {
            return {
                state: false,
                message: 'Valid Phone number required'
            }
        }
        return {
            state: true,
            message: ''
        };

    }
}

export { ValidateUtil }