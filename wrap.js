function wrap(string, columnNum) {
    let modSting = ''
    for (let i = 0; i < string.length; i++) {
        if (i % columnNum === 0 && i !==0) {
            modSting += '\n'
        }
        modSting += string[i]
    }
    return modSting
}
module.exports = wrap;