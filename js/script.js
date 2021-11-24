// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste




// Assegno al bottone un evento al click, secondo il quale richiama il risultato della funzione optionSelected
const playBtn = document.getElementById('play-button').addEventListener('click', startGame);


// Griglia generata se l'utente sceglie la Option Easy dalla Select (100 numeri -> da 1 a 100)
function startGame() {
    // Seleziono dall'html il grid principale che conterrà poi tutti i quadratini
    const myGrid = document.getElementById('grid');
    myGrid.innerHTML = '';

    // Vado a prendermi la scelta dell'utente per capire che tipo di griglia devo generare, in base al valore della Select
    const levelSelected = document.getElementById('select-level').value;
    // console.log(levelSelected);

    // Ora che ho preso il valore della select devo capire quanti box andare a creare e che dimensione devono avere in base alla griglia
    // Quindi creo due variabili, una che conterrà il numero di box, e una con la dimensione di ogni singolo box
    let maxSquareNum;
    let thisSquareDimension;

    // In base al valore della select creo tot quadratini che avranno tot dimensioni
    if(levelSelected === 'easy'){
        maxSquareNum = 100;
        thisSquareDimension = 10;
    } else if(levelSelected === 'normal'){
        maxSquareNum = 81;
        thisSquareDimension = 9;
    } else if(levelSelected === 'hard'){
        maxSquareNum = 49;
        thisSquareDimension = 7;
    }

    for(let i = 1; i <= maxSquareNum; i++){
        const newGeneratedSquare = createThisSquare(i, thisSquareDimension);

        newGeneratedSquare.addEventListener('click', handleSquareClick);

        myGrid.appendChild(newGeneratedSquare);
        
    }
}


// Funzione che al click del singolo box aggiunge la classe active con sfondo blu e colore del testo bianco
function handleSquareClick(){
    this.classList.add('active');
}


// Funzione che crea ogni singolo box all'interno del grid principale
function createThisSquare(squareNumber, squareDimension) {
    const thisSquare = document.createElement('div');
    thisSquare.classList.add('square');
    thisSquare.innerHTML = `<span>${squareNumber}</span>`;

    thisSquare.style.width = `calc(100% / ${squareDimension})`;
    thisSquare.style.height = `calc(100% / ${squareDimension})`;

    return thisSquare;
}