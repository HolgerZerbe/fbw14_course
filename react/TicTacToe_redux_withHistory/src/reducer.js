const myFirstColor = "rgb(195, 212, 37)";
const mySecondColor = "rgb(238, 121, 12)";
const initialCellBackground = [myFirstColor, myFirstColor, myFirstColor, myFirstColor, myFirstColor, myFirstColor, myFirstColor, myFirstColor, myFirstColor];
const initialXOrO = ["", "", "", "", "", "", "", "", ""];

const initialState = {
    xOrO: [...initialXOrO],
    cellBackground: [...initialCellBackground],
    currentPlayer: "X",
    lastPlayer:null,
    winner: null,
    endOfGame: false,
    history : [["", "", "", "", "", "", "", "", ""]]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RESET':
            return {
                ...state,
                xOrO: [...initialXOrO],
                currentPlayer: "X",
                lastPlayer:null,
                winner: null,
                endOfGame: false, 
                cellBackground: [...initialCellBackground],
                history : [["", "", "", "", "", "", "", "", ""]]                
            }

        case 'CLICKSET':
            if (state.endOfGame || state.xOrO[action.value] !=="") {
                return state
            }
            let newXOrO = [...state.xOrO] 
            newXOrO[action.value]=state.currentPlayer;
            if (state.currentPlayer==="X") { 
                state.currentPlayer="O";
                state.lastPlayer="X"
            } else {
                state.currentPlayer="X";
                state.lastPlayer="O"
            }
            let newHistory=[...state.history]
            let actuelHistory=[...newXOrO]
            
            newHistory.push(actuelHistory)

            return {
                ...state,
                xOrO: [...newXOrO],
                history: [...newHistory]
            }

        case 'END' : 
            let newCellBackground= [...state.cellBackground];
            newCellBackground[action.valueIndex1] = mySecondColor;
            newCellBackground[action.valueIndex2] = mySecondColor;
            newCellBackground[action.valueIndex3] = mySecondColor;
            
            return {
            ...state,
                winner: action.valueWinner,
                endOfGame: true, 
                cellBackground: [...newCellBackground]     
            }
        case 'GOBACK' :
            let newHistoryForGoBack = [];
            for (let i=0; i <= action.value; i++) {
                newHistoryForGoBack.push(state.history[i])
            }
            let newCurentPlayer;
            if (action.value%2) {
                newCurentPlayer = "O"
            } else {
                newCurentPlayer = "X"
            }
            return { 
                ...state,
                winner: null,
                endOfGame: false,
                history: [...newHistoryForGoBack],
                xOrO: newHistoryForGoBack[newHistoryForGoBack.length-1],
                currentPlayer: newCurentPlayer,
                cellBackground: [...initialCellBackground]
            }
        default:
            return state
    }
}

export default reducer;
