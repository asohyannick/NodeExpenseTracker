import * as Yup from 'yup';
const validateUserRegistration = Yup.object().shape({
    firstName: Yup.string().required('lasttName must be provided').trim(),
    lasttName: Yup.string().required('lasttName must be provided').trim(),
    email: Yup.string().email('Email address must be provided').required('Email address must provided').trim(),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must be at least six characters long'),
    isAdmin: Yup.boolean().required('Admin status must be provided').default(false),
});

const validateUpdatedUserRegistration = Yup.object().shape({
    firstName: Yup.string().required('lasttName must be provided').trim(),
    lasttName: Yup.string().required('lasttName must be provided').trim(),
    email: Yup.string().email('Email address must be provided').required('Email address must provided').trim(),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must be at least six characters long'),
    isAdmin: Yup.boolean().required('Admin status must be provided').default(false),
});

export {
    validateUserRegistration,
    validateUpdatedUserRegistration
}