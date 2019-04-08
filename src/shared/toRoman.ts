// taken form https://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/
export const numberToRoman = (value: number) => {
    let result = '';
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (let i = 0; i <= decimal.length; i++) {
        while (value % decimal[i] < value) {
            result += roman[i];
            value -= decimal[i];
        }
    }
    return result;
}

export const centuryToRoman = (value: number) => {
    const sign = Math.sign(value);
    const num = Math.abs(value);
    if (sign <= 0) {
        return `${numberToRoman(num + 1)} BCE`
    }

    return numberToRoman(num);
}
