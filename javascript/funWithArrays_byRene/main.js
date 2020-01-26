console.log(`funWithArrays_byRene`);

// FB-Silumator:

// 1. Ball
// Spielfeld
// 22 Spieler in 2 Mannschaften
// Kommentator
// Schiedsrichter

// 1. Baue 2 Arrays mit 11 Spielern
const hertha = {
    tore: 0,
    name: "Hertha BSC",
    spieler: [`Klaus Peter`, `Rudi Elfer`, `Manne Schwalbe`, `Carsten Anstoß`, `Alle Neuner`, `Tante Käthe`, `Andy Latte`, `Rummenigges Knie`, `Franz Freistoß`, `Ecki Ecke`, `Sepp Herberger`]
};
const union = {
    tore: 0,
    name: "1. FC Union",
    spieler: [
        "Richard Fliegenfänger",
        "Rudy Blutgrätsche",
        "Jens Vorstopper",
        "Werner Planlos",
        "Peter Fusspilz",
        "Tony Verteiler",
        "Günther Einnetzer",
        "Lukas Vollspann",
        "Hans Pike",
        "Klaus Abstauber",
        "Thomas Knipser"
    ]
};
// Array mit Aktionen

const spielAktionen = [{
        name: "hält",
        typ: "torwart"
    },
    {
        name: "zieht ab",
        typ: "aktion"
    },
    {
        name: "passt auf",
        typ: "interaktion-eigen"
    },
    {
        name: "foult",
        typ: "interaktion-fremd"
    },
    {
        name: "schießt",
        typ: "aktion"
    }
];
//Array mit Ergebnissen(von Aktionen)
const aktionsErgebnisse = [
    {
      name: "trifft",
      typ: "tor"
    },
    {
      name: "trifft die Latte",
      typ: "vorbei"
    }
  ];
const ergo = [];

// 2. Spielzug

const randomSelect = array => {
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
};

const spielzug = (teamAct, teamReact, aktionen, ergebnisse) => {
    let currentPlayerAct = randomSelect(teamAct.spieler);
    let currentPlayerReact = randomSelect(teamReact.spieler);
    let currentAktion = randomSelect(spielAktionen);
    let currentResult = randomSelect(aktionsErgebnisse);
    if (currentAktion.typ === "interaktion-eigen") {
        return `${currentPlayerAct} von ${teamAct.name} ${currentAktion.name} ${randomSelect(teamAct.spieler)}`;
    } else if (currentAktion.typ === "interaktion-fremd") {
        return `${currentPlayerAct} von ${teamAct.name} ${currentAktion.name} ${currentPlayerReact} von ${teamReact.name}`;
    } else if (currentAktion.typ === "aktion") {
        if (Math.round(Math.random())===0){
        return `${currentPlayerAct} von ${teamAct.name} ${currentAktion.name} und ${aktionsErgebnisse[0].name}`;}
        else {return `${currentPlayerAct} von ${teamAct.name} ${currentAktion.name} und ${aktionsErgebnisse[1].name}`;}
    } else {
        return currentPlayerAct + " von " + teamAct.name + " " + currentAktion.name;
    }

};

// 3. Spielablauf
const spielAblauf = (teamAct, teamReact) => {
    if (Math.round(Math.random()) === 0) {
        return spielzug(teamAct, teamReact, spielAktionen,aktionsErgebnisse);
    } else {
        return spielzug(teamReact, teamAct, spielAktionen, aktionsErgebnisse);
    }
}


setInterval(() =>

    console.log(spielAblauf(hertha, union)), 3000);