const { assignCategoryToWord } =  require('../../utils/assignCategoryToWord')

test('Number category is added to word that starts with numbers', () => {
  const response = assignCategoryToWord('123number')
  expect(response).toBe('Number')
})

test('Date category is added correct', () => {
  const response = assignCategoryToWord('12.3.2022')
  expect(response).toBe('Date')
})

test('No category is added to word that does not belong to any category', () => {
  const response = assignCategoryToWord('aurinkoinen')
  expect(response).toBe('')
})

test('Number category is added to word that is only numbers', () => {
  const response = assignCategoryToWord('1234567890')
  expect(response).toBe('Number')
})

test('Number category is added to word that end with numbers', () => {
  const response = assignCategoryToWord('hello1234')
  expect(response).toBe('Number')
})

test('Number category is added to word that end with numbers', () => {
  const response = assignCategoryToWord('hello1234')
  expect(response).toBe('Number')
})

test('Number category is added to word that has numbers in the middle', () => {
  const response = assignCategoryToWord('hello1234bye')
  expect(response).toBe('Number')
})

test('Programming languages are assigned category Technology', () => {
  const response = assignCategoryToWord('java')
  expect(response).toBe('Technology')
})

