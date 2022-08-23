import {states} from '../theme';

// email validation utils
export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// formart currency
export const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = '.',
  thousands = ',',
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};

export const AsyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index);
  }
};

export const getStateCountry = (json) => {
  const location = {
    state: 'Lagos',
    country: '',
  };
  let addInfo = json.address_components.reverse();
  for (let i = 0; i < addInfo.length; i++) {
    if (addInfo[i].types[0] === 'country') {
      location.country = addInfo[i]?.long_name;
      continue;
    }
    if (addInfo[i]?.types[0] === 'administrative_area_level_1') {
      //this is the object you are looking for state
      location.state =
        typeof states[addInfo[i].long_name] !== 'undefined'
          ? states[addInfo[i].long_name]
          : addInfo[i]?.long_name.replace('State', '').trim();
    }
  }
  return location;
};
