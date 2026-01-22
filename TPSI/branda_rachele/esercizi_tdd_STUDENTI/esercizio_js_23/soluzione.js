export const abbreviazione = (str) => {
    str = str.split(" ")
    return `${str[0].toUpperCase().charAt(0)}${str[0].slice(1)} ${str[1].toUpperCase().charAt(0)}.`
}

