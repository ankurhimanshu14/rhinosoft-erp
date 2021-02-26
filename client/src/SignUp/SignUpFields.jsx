const SignUpFields = [
    {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
        helperId: 'fullName-helper-text',
        helperText: 'This field is required'
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        helperId: 'email-helper-text',
        helperText: 'This field is required'
    },
    {   name: 'username',
        label: 'Username',
        type: 'text',
        required: true,
        helperId: 'username-helper-text',
        helperText: 'Your username should be unique'
    },
    {   name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
        helperId: 'password-helper-text',
        helperText: 'Your password should be a combination of capital letters, lowercase letters, special characters and numbers'
    }
];

export default SignUpFields;