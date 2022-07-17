export const PASSWORD_MIN_CHARS = 8;
export const PASSWORD_MAX_CHARS = 24;
export const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const PASSWORD_RULE_MESSAGE = 'Password should have 1 upper case, lowcase letter along with a number and special character.';
