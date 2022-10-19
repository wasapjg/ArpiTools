import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

export const validateName = (name, isOptional = false) => {
  if (isEmpty(name) && !isOptional) {
    return 'Name is required';
  }
  return '';
};

export const validateType = (type, isOptional = false) => {
  if (isEmpty(type) && !isOptional) {
    return 'Type is required';
  }
  return '';
};

export const validateEmail = (email, isOptional = false) => {
  if (isEmpty(email) && !isOptional) {
    return 'Email is required';
  }
  if (!isEmail(email)) {
    return 'invalid email';
  }
  return '';
};

export const validatePassword = (password, isOptional = false) => {
  if (isEmpty(password) && !isOptional) {
    return 'Password is required';
  }
  if (!isLength(password, {min: 6, max: undefined})) {
    return 'Password must be at least 6 characters';
  }
  return '';
};

export const validateConfirmPassword = (password, confirmPassword, isOptional = false) => {
  if (isEmpty(confirmPassword) && !isOptional) {
    return 'Confirm password is required';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return '';
};

export const validateCodeArpi = (code, isOptional = false) => {
  if (isEmpty(code) && !isOptional) {
    return 'Code is required';
  }
  if (!isLength(code, {min: 8, max: 8})) {
    return 'Code must be 8 characters';
  }
  return '';
};

export const validateRuc = (code, isOptional = false) => {
  if (isEmpty(code) && !isOptional) {
    return 'RUC is required';
  }
  if (!isLength(code, {min: 13, max: 13})) {
    return 'RUC must be 13 characters';
  }
  return '';
};

export const validatePhone = (phone, isOptional = false) => {
  if (isEmpty(phone) && !isOptional) {
    return 'Phone is required';
  }
  const regex = /^(\+593|0)([2-7]|9[2-9])\d{7}$/;
  if(regex.test(phone)){
    return ''
  }
  return 'Phone is invalid';
};

