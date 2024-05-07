// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber
test('(NOT A STRING)9259301231 is not a phone number', () => {
  expect(isPhoneNumber(9259301231)).toBe(false);
});

test('(925)192-4432 is a phone number', () => {
  expect(isPhoneNumber("(925)192-4432")).toBe(true);
});

test('John is not a phone number', () => {
  expect(isPhoneNumber("John")).toBe(false);
});

test('91670434122 is a phone number', () => {
  expect(isPhoneNumber("(916)704-34122")).toBe(true);
});

// isEmail testing
test('testemail@gmail.com is an email', () => {
  expect(isEmail("testemail@gmail.com")).toBe(true);
});

test('testemail.com is not an email', () => {
  expect(isEmail("testemail.com")).toBe(false);
});

test('myemail1234@gmail.com is an email', () => {
  expect(isEmail("myemail1234@gmail.org")).toBe(true);
});

test('1@.net is not an email', () => {
  expect(isEmail("1@.ne")).toBe(false);
});

//isHexColor
test('#000000 is a hex color', () => {
  expect(isHexColor("#000000")).toBe(true);
});

test('12BA34 is a hex color', () => {
  expect(isHexColor("12BA34")).toBe(true);
});

test('#12G3AD is NOT a hex color', () => {
  expect(isHexColor("#12G3AD")).toBe(false);
});

test('000000 is NOT a hex color', () => {
  expect(isHexColor("Jacob")).toBe(false);
});

//isStrongPassword
test('aas is not a strong password', () => {
  expect(isStrongPassword('aaa')).toBe(false);
});

test('Password_1234_ is a strong password', () => {
  expect(isStrongPassword('Password_1234_')).toBe(true);
});

test('$@@Strongest$42 is not a strong password', () => {
  expect(isStrongPassword('$@@Strongest$42')).toBe(false);
});

test('Powell_110 is a strong password', () => {
  expect(isStrongPassword('Powell_110')).toBe(true);
});


//isDate
test('01/01/2003 is a date', () => {
  expect(isDate("01/01/2003")).toBe(true);
});

test('5/6/2024 is a date', () => {
  expect(isDate("5/6/2024")).toBe(true);
});

test('Jan. 6, 2024 is NOT a date', () => {
  expect(isDate("Jan. 6, 2024")).toBe(false);
});

test('Albert is NOT a date', () => {
  expect(isDate("Albert")).toBe(false);
});