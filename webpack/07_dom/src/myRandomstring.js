export const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const randomstring = (n) => {
    let result ='';
    for (let i = 0; i<n; i++) {
        result += alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return result
}

// CommonJS export


// module.exports = {
//     alphabet:alphabet,
//     randomstring:randomstring
// }