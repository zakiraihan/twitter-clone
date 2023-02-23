function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function fullnameFormattor(fullName){
  if (fullName.length > 39) return `${fullName.slice(0, 39)}...`;

  return fullName;
}

function statisticNumberFormattor(statisticNumber) {
  if (statisticNumber / 1000000 >=1 ) return `${(statisticNumber / 1000000).toFixed(1)}M`;
  if (statisticNumber / 10000 >= 1) return `${(statisticNumber / 1000).toFixed(1)}K`;

  return statisticNumber;
}

export {
  capitalizeFirstLetter,
  fullnameFormattor,
  statisticNumberFormattor
}