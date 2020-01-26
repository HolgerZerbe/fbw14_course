#!/home/dci/.nvm/versions/node/v11.12.0/bin/node

console.log("Hallo Welt");

console.log(`
    Mit folgenden Parametern gestartet:
    ${process.argv}
    `);

for (argument of process.argv) {
    console.log(argument);
}

