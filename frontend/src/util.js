export const API_URL = 'http://localhost:8000/api/transactions';

export function currencyformatIN(num) {
  num = num.toString();
  let afterPoint = '';
  if (num.indexOf('.') > 0)
    afterPoint = num.substring(num.indexOf('.'), num.length);
  num = Math.floor(num);
  num = num.toString();
  let lastThree = num.substring(num.length - 3);
  let otherNumbers = num.substring(0, num.length - 3);
  if (otherNumbers !== '') lastThree = ',' + lastThree;
  return (
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint
  );
}
