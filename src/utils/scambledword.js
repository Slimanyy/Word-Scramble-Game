export const scrambleWord = (word) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
};
