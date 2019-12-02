export const calculateMoment = () => {
    const today = new Date();
    const time = `${today.getHours()}:${normalizeSegment(
        today.getMinutes()
    )}:${normalizeSegment(today.getSeconds())}`;

    return {
        time,
        dayOfWeek: getDayString(today),
        day: today.getDate(),
        month: getMonth(today),
        suffix: getDaySuffix(today.getDate()),
        year: today.getFullYear()
    };
};

export const normalizeSegment = input => {
    // Prepend single digit minute and seconds with zero
    return String(input).length === 1 ? `0${input}` : input;
};

export const getDayString = date => {
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    return daysOfWeek[date.getDay()];
};

export const getMonth = date => {
    const monthsOfTheYear = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return monthsOfTheYear[date.getMonth()];
};

export const getDaySuffix = day => {
    let suffix;
    const stringifiedDayNumber = String(day);
    const dayLength = stringifiedDayNumber.length;

    if (dayLength === 2 && String(day[0]) === 1) {
        suffix = 'td';
    } else if (stringifiedDayNumber[dayLength - 1] === '1') {
        suffix =
            dayLength === 2 && stringifiedDayNumber.startsWith('1')
                ? 'th'
                : 'st';
    } else if (stringifiedDayNumber[dayLength - 1] === '2') {
        suffix =
            dayLength === 2 && stringifiedDayNumber.startsWith('1')
                ? 'th'
                : 'nd';
    } else if (stringifiedDayNumber[dayLength - 1] === '3') {
        suffix =
            dayLength === 2 && stringifiedDayNumber.startsWith('1')
                ? 'th'
                : 'rd';
    } else {
        suffix = 'th';
    }

    return suffix;
};
