const intro = userInfo => {
    console.log(`Hi, mein Name ist ${userInfo.firstName} ${userInfo.lastName} und meine E-Mail ist ${userInfo.email}. Ich wurde geboren in ${userInfo.birthYear}.`)
}

module.exports.intro = intro;