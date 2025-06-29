import * as Yup from 'yup';
import { FrequencyStatus, PaymentMethodStatus } from '../service/interfac/expense/expense.interfac';
const validateUserRegistration = Yup.object().shape({
    firstName: Yup.string().required('first name must be provided').trim(),
    lasttName: Yup.string().required('last name must be provided').trim(),
    email: Yup.string().email('Email address must be provided').required('Email address must provided').trim(),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must be at least six characters long'),
    isAdmin: Yup.boolean().required('Admin status must be provided').default(false),
});

const validateUserLoginRegistration = Yup.object().shape({
    firstName: Yup.string().required('first name must be provided').trim(),
    lasttName: Yup.string().required('last name must be provided').trim(),
    email: Yup.string().email('Email address must be provided').required('Email address must provided').trim(),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must be at least six characters long'),
    isAdmin: Yup.boolean().required('Admin status must be provided').default(false),
});

const validateUpdatedUserRegistration = Yup.object().shape({
    firstName: Yup.string().required('first name must be provided').trim(),
    lasttName: Yup.string().required('last name must be provided').trim(),
    email: Yup.string().email('Email address must be provided').required('Email address must provided').trim(),
    password: Yup.string().required('Password must be provided').trim().min(6, 'Password must be at least six characters long'),
    isAdmin: Yup.boolean().required('Admin status must be provided').default(false),
});

const validateCreatedExpenses = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    description: Yup.string().required('The description must be provided').trim(),
    paymentMethod: Yup.mixed().required('One payment method must be provided').oneOf(Object.values(PaymentMethodStatus)),
    receiptUrl: Yup.array().required('The receipt urls must be provided').of(Yup.string().trim()),
    tags: Yup.array().required('The tags  must be provided').of(Yup.string().trim()),
    recurring: Yup.boolean().required('The ocurring status must be provided').default(false),
    frequency: Yup.mixed().required('One frequency must be provided').oneOf(Object.values(FrequencyStatus)),
    date: Yup.date().required('The date must be provided'),
});

const validateUpdatedExpenses = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    description: Yup.string().required('The description must be provided').trim(),
    paymentMethod: Yup.mixed().required('One payment method must be provided').oneOf(Object.values(PaymentMethodStatus)),
    receiptUrl: Yup.array().required('The receipt urls must be provided').of(Yup.string().trim()),
    tags: Yup.array().required('The tags  must be provided').of(Yup.string().trim()),
    recurring: Yup.boolean().required('The ocurring status must be provided').default(false),
    frequency: Yup.mixed().required('One frequency must be provided').oneOf(Object.values(FrequencyStatus)),
    date: Yup.date().required('The date must be provided'),
});
const validateCreatedCategory = Yup.object().shape({
    name: Yup.string().required('Category name must be provided').trim(),
    description: Yup.string().required('The description must be provided').trim(),
    icon: Yup.string().required('The category icon must be provided').trim(),
    color: Yup.string().required('Category color must be provided').trim(),
    isActive: Yup.boolean().required('Category active status must be provided').default(false),
});
const validateUpdatedCategory = Yup.object().shape({
    name: Yup.string().required('Category name must be provided').trim(),
    description: Yup.string().required('The description must be provided').trim(),
    icon: Yup.string().required('The category icon must be provided').trim(),
    color: Yup.string().required('Category color must be provided').trim(),
    isActive: Yup.boolean().required('Category active status must be provided').default(false),
});
export {
    validateUserRegistration,
    validateUserLoginRegistration,
    validateUpdatedUserRegistration,
    validateCreatedExpenses,
    validateUpdatedExpenses,
    validateCreatedCategory,
    validateUpdatedCategory,
}