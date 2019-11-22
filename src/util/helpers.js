export const calculateMoment = () => {
    const today = new Date();
    const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
    const time = `${today.getHours()}:${normalizeSegment(
        today.getMinutes()
    )}:${normalizeSegment(today.getSeconds())}`;

    return {
        date,
        time
    };
};

const normalizeSegment = input => {
    // Prepend single digit minute and seconds with zero
    return String(input).length === 1 ? `0${input}` : input;
};
