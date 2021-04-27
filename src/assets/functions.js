export const logging = (message, component) => {
    console.log(message, component)
};

export const range = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
};