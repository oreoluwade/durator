const createFiniteArray = (start, stop, step) => {
    const newArray = [];
    for (let i = start; i <= stop; i += step) {
        newArray.push(i);
    }
    return newArray;
};

export const MONTH_OPTIONS = [
    { str: 'January', num: '01' },
    { str: 'February', num: '02' },
    { str: 'March', num: '03' },
    { str: 'April', num: '04' },
    { str: 'May', num: '05' },
    { str: 'June', num: '06' },
    { str: 'July', num: '07' },
    { str: 'August', num: '08' },
    { str: 'September', num: '09' },
    { str: 'October', num: '10' },
    { str: 'November', num: '11' },
    { str: 'December', num: '12' }
];

const thirtyOneDayMonths = [
    'January',
    'March',
    'May',
    'July',
    'August',
    'October',
    'December'
];

const thirtyDayMonths = ['April', 'June', 'September', 'November'];

export const getDayOptions = (month, year) => {
    let options;
    if (thirtyOneDayMonths.includes(month)) {
        options = createFiniteArray(1, 31, 1);
    } else if (thirtyDayMonths.includes(month)) {
        options = createFiniteArray(1, 30, 1);
    } else {
        if (year % 4 === 0) {
            options = createFiniteArray(1, 29, 1);
        } else {
            options = createFiniteArray(1, 28, 1);
        }
    }

    return options;
};

export const getYearOptions = () => {
    let years = [];
    for (let y = 1; y <= 120; y += 1) {
        years.push(new Date().getFullYear() - y + 1);
    }

    return years;
};
