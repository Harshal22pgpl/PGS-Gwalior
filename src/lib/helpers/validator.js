export const validator = (state, formateErr, bypassKey) => {
    let result = '';
    let isFirst = true;

    for (const [key, value] of Object.entries(state)) {
        if (value === '' && !bypassKey.includes(key)) {
            if (!isFirst) {
                result += ', ';
            }
            result += key;
            isFirst = false;
        }
    }

    if (result !== '') {
        return formateErr(result)
    } else {
        return true;
    }
};
