const MONTH_FIX_VALUE = 1;
const ADD_PREFIX_BREAKPOINT = 10;

const addPreffixZero = (value: number): string => (value < ADD_PREFIX_BREAKPOINT ? `0${value}` : `${value}`);

const formatDateUtil = (date: Date): string => {
  const day = date.getDate();
  const month = addPreffixZero(date.getMonth() + MONTH_FIX_VALUE);
  const year = addPreffixZero(date.getFullYear());

  return `${year}-${month}-${day}`;
};

export default formatDateUtil;
