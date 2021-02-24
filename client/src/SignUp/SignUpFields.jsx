const SignUpFields = [
    {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        helperId: 'fullName-helper-text',
        helperText: 'Enter your full name here'
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        helperId: 'email-helper-text',
        helperText: 'Enter your official email here'
    },
    {   name: 'username',
        label: 'Username',
        type: 'text',
        helperId: 'username-helper-text',
        helperText: 'Your username should be unique'
    },
    {   name: 'password',
        label: 'Password',
        type: 'password',
        helperId: 'password-helper-text',
        helperText: 'Your password should be a combination of capital letters, lowercase letters, special characters and numbers'
    }
];

export default SignUpFields;