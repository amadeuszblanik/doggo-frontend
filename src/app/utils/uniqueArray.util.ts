const uniqueArray = <T = any>(arrayValues: T[]): T[] => Array.from(new Set(arrayValues));

export default uniqueArray;
