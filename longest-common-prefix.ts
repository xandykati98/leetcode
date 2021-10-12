function longestCommonPrefix(strs: string[]): string {
    let smallest_string = strs.reduce((prev, curr) => {
        if (curr.length < prev.length) {
            return curr
        } else return prev
    }, strs[0]);

    let prefix_build = "";
    let prefix_index = 0;
    for (const _ of new Array(smallest_string.length)) {
        if (strs.every(str => str[prefix_index] === smallest_string[prefix_index])) {
            prefix_build+=smallest_string[prefix_index];
        } else {
            return prefix_build;
        }
        prefix_index++;
    }

    return prefix_build;
};