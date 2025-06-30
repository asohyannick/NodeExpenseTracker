import * as Yup from 'yup';
import { FrequencyStatus, PaymentMethodStatus } from '../service/interfac/expense/expense.interfac';
import { TypeStatus } from '../service/interfac/notifications/notification.interfac';
import { TransactionType } from '../service/interfac/transaction/transaction.interfac';
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
const validateCreatedBudget = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    startDate: Yup.date().required('The start date must be provided'),
    endDate: Yup.date().required('The end date must be provided'),
    spentAmount: Yup.number().required('The  amount spent must be provided').integer().min(1),
    isActive: Yup.boolean().required('Budget active status must be provided').default(false),
});
const validateUpdatedBudget = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    startDate: Yup.date().required('The start date must be provided'),
    endDate: Yup.date().required('The end date must be provided'),
    spentAmount: Yup.number().required('The  amount spent must be provided').integer().min(1),
    isActive: Yup.boolean().required('Budget active status must be provided').default(false),
});
const validateCreatedNotification = Yup.object().shape({
    message: Yup.string().required('Message must be provided').trim(),
    type: Yup.mixed().required('Type status must be provided').oneOf(Object.values(TypeStatus)),
    isRead: Yup.boolean().required('Notification read status must be provided').default(false),
});
const validateUpdatedNotification = Yup.object().shape({
    message: Yup.string().required('Message must be provided').trim(),
    type: Yup.mixed().required('Type status must be provided').oneOf(Object.values(TypeStatus)),
    isRead: Yup.boolean().required('Notification read status must be provided').default(false),
});
const validateCreatedCurrency = Yup.object().shape({
    code: Yup.string().required('Currency code must be provided').trim(),
    name: Yup.string().required('Currency name must be provided').trim(),
    symbol: Yup.string().required('Currency symbol must be provided').trim(),
    exchangeRate: Yup.string().required('Currency exchange rate must be provided').trim(),
    isActive: Yup.boolean().required('Currency active status must be provided').default(false),
});
const validateUpdatedCurrency = Yup.object().shape({
    code: Yup.string().required('Currency code must be provided').trim(),
    name: Yup.string().required('Currency name must be provided').trim(),
    symbol: Yup.string().required('Currency symbol must be provided').trim(),
    exchangeRate: Yup.string().required('Currency exchange rate must be provided').trim(),
    isActive: Yup.boolean().required('Currency active status must be provided').default(false),
});
const validateCreatedTag = Yup.object().shape({
    name: Yup.string().required('The tag name must be provided').trim(),
    description: Yup.string().required('The tag description must be provided').trim(),
    color: Yup.string().required('The tag color must be provided').trim(),
});
const validateUpdatedTag = Yup.object().shape({
    name: Yup.string().required('The tag name must be provided').trim(),
    description: Yup.string().required('The tag description must be provided').trim(),
    color: Yup.string().required('The tag color must be provided').trim(),
});
const validateCreatedFAQ = Yup.object().shape({
    question: Yup.string().required('The question must be provided').trim(),
    answer: Yup.string().required('The answer  must be provided').trim(),
    category: Yup.string().required('The category must be provided').trim(),
    date: Yup.date().required('The date must be provided'),
});
const validateUpdatedFAQ = Yup.object().shape({
    question: Yup.string().required('The question must be provided').trim(),
    answer: Yup.string().required('The answer  must be provided').trim(),
    category: Yup.string().required('The category must be provided').trim(),
    date: Yup.date().required('The date must be provided'),
});

const validateCreatedFeedback = Yup.object().shape({
    message: Yup.string().required('The message must be provided').trim(),
    rating: Yup.number().required('The question must be provided').min(6, "The message must have a minimum of six characters long"),
});

const validateUpdatedFeedback = Yup.object().shape({
    message: Yup.string().required('The message must be provided').trim(),
    rating: Yup.number().required('The question must be provided').min(6, "The message must have a minimum of six characters long"),
});
const validateCreatedRecurringExpense = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    frequency: Yup.mixed().required('Frequency status must be provided').oneOf(Object.values(FrequencyStatus)),
    nextDueDate: Yup.date().required('The next due date must be provided'),
    description: Yup.string().required('The description must be provided').trim(),
    isActive: Yup.boolean().required('Recurring active status must be provided').default(false),
});
const validateUpdatedRecurringExpense = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    frequency: Yup.mixed().required('Frequency status must be provided').oneOf(Object.values(FrequencyStatus)),
    nextDueDate: Yup.date().required('The next due date must be provided'),
    description: Yup.string().required('The description must be provided').trim(),
    isActive: Yup.boolean().required('Recurring active status must be provided').default(false),
});
const validateCreatedTransaction = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    date: Yup.date().required('The date must be provided'),
    description: Yup.string().required('The description must be provided').trim(),
    type: Yup.mixed().required('Transaction type status must be provided').oneOf(Object.values(TransactionType)),
});
const validateUpdatedTransaction = Yup.object().shape({
    amount: Yup.number().required('The amount must be provided').integer().min(1),
    date: Yup.date().required('The date must be provided'),
    description: Yup.string().required('The description must be provided').trim(),
    type: Yup.mixed().required('Transaction type status must be provided').oneOf(Object.values(TransactionType)),
});
const validateCreatedUserProfile = Yup.object().shape({
    fullName: Yup.string().required('The full name must be provided').trim(),
    email: Yup.string().email('Email address must be provided').required('Email address must provided').trim(),
    phoneNumber: Yup.string().required('The phone number must be provided').trim(),
    profilePictureUrl: Yup.string().required('The profile picture URL must be provided').trim()
});

const validateUpdatedUserProfile = Yup.object().shape({
    fullName: Yup.string().required('The full name must be provided').trim(),
    email: Yup.string().email('Email address must be provided').required('Email address must provided').trim(),
    phoneNumber: Yup.string().required('The phone number must be provided').trim(),
    profilePictureUrl: Yup.string().required('The profile picture URL must be provided').trim()
});
export {
    validateUserRegistration,
    validateUserLoginRegistration,
    validateUpdatedUserRegistration,
    validateCreatedExpenses,
    validateUpdatedExpenses,
    validateCreatedCategory,
    validateUpdatedCategory,
    validateCreatedBudget,
    validateUpdatedBudget,
    validateCreatedNotification,
    validateUpdatedNotification,
    validateCreatedCurrency,
    validateUpdatedCurrency,
    validateCreatedTag,
    validateUpdatedTag,
    validateCreatedFAQ,
    validateUpdatedFAQ,
    validateCreatedFeedback,
    validateUpdatedFeedback,
    validateCreatedRecurringExpense,
    validateUpdatedRecurringExpense,
    validateCreatedTransaction,
    validateUpdatedTransaction,
    validateCreatedUserProfile,
    validateUpdatedUserProfile
}