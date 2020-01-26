module.exports = (array) => {
    let word = array[0].split('');
    console.log(word);
    let result = []

    for (let j = 0; j < word.length; j++) {
        let character = word[j];
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === character) {
                count++;
            }   
        }
        result.push({letter: character,
                    pcs: count   });

        // wordstring = word.join(``);
        // let help = wordstring.split(character);
        // word = help.join(``);

    }
console.log(result)

}