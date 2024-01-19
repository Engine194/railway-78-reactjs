const countToSix = () => {
    let i = 0;
    const timerId = setInterval(() => {
        i++;
        console.log(`count: ${i}`);
        if (i === 6) {
            clearInterval(timerId);
        }
    }, 1000);
};

const result = countToSix();
console.log('result...', result);
