/* 1 - Adicione à página o título "Paleta de Cores" e uma paleta contendo quatro cores distintas */
const createPalette = () => {
    const numberOfColors = 4;
    const palette = document.getElementById('color-palette');
    for (let indexTd = 0; indexTd < numberOfColors; indexTd += 1) {
        const colors = document.createElement('td');
        palette.appendChild(colors);
        colors.classList.add('color');
    }
    for (let indexColors = 0; indexColors < palette.children.length; indexColors += 1) {
        const tdColors = palette.children[indexColors];
        tdColors.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
};
createPalette();


/* 2 - Adicione à página um quadro contendo 25 pixels, sendo que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel */
const createBoard = () => {
    const boardSize = 5;
    const pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < boardSize; index += 1) {
        const element = document.createElement('tr');
        pixelBoard.appendChild(element);

    }
    const columns = document.getElementById('pixel-board').children;
    for (let indexTrTag = 0; indexTrTag < columns.length; indexTrTag += 1) {
        for (let indexTdTag = 0; indexTdTag < boardSize; indexTdTag += 1) {
            const elementTd = document.createElement('td');
            columns[indexTrTag].appendChild(elementTd);
            elementTd.classList.add('pixel');
        }
    }
};
createBoard();

/* 3 - Crie uma função para selecionar uma cor na paleta de cores */
const palette = document.getElementById('color-palette');
const board = document.getElementsByClassName('pixel');
let arrayColor = [];
let arrayColorIndex = [];
const selectColor = () => {
    for (let indexColor = 0; indexColor < palette.children.length; indexColor += 1) {
        palette.children[indexColor].addEventListener('click', function (event) {
            const selectedColor = palette.querySelector('.selected');

            if (selectedColor) {
                selectedColor.classList.remove('selected');
            }

            const clickedColor = event.currentTarget;
            clickedColor.classList.add('selected');
            // salva clickedColor.style.backgroundColor no local storage
        });
    }
};
/* 4 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores */
const paintColor = () => {

    for (let index = 0; index < board.length; index += 1) {
        board[index].addEventListener("click", function (event) {
            const selectedColor = palette.querySelector('.selected');
            if (selectedColor) {
                const elementBoard = event.currentTarget;
                elementBoard.style.backgroundColor = selectedColor.style.backgroundColor;
                arrayColor.push(elementBoard.style.backgroundColor);
                arrayColorIndex.push(index);
                saveBoard();
            }
        });
    }
};

selectColor();
paintColor();

/* 5 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco */
const btnClear = document.getElementById('clear-board');
const cleanBoard = () => {
    const board = document.getElementsByClassName('pixel');
    for (let index = 0; index < board.length; index += 1) {
        board[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
};
btnClear.addEventListener('click', cleanBoard);

/* 6 - Adicione um botão para gerar cores aleatórias para a paleta de cores */
const btnColor = document.getElementById('button-random-color');
const randomColor = () => {
    const palette01 = document.getElementsByClassName('color');
    for (let indexColors = 0; indexColors < palette01.length; indexColors += 1) {
        const tdColors = palette01[indexColors];

        tdColors.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

};
btnColor.addEventListener('click', randomColor);

/* 7 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage **/
const saveBoard = () => {
    let infRgb = JSON.stringify(arrayColor);
    /* passa string */
    let boardIndexes = JSON.stringify(arrayColorIndex);
    localStorage.setItem("pixelBoard", infRgb);
    localStorage.setItem("pixelBoardIndex", boardIndexes);
};

const loadBoard = () => {
    let infRgb = localStorage.getItem("pixelBoard");
    let boardIndexes = localStorage.getItem("pixelBoardIndex");
    if (infRgb !== null){
        /* parse = retorna o tipo 
        JSON = ESCRITA EM OBJ QUE POSSUI METODOS, SALVA DADOS EM OBJ*/
        let InfRgbArray = JSON.parse(infRgb);
        let boardIndexesArray = JSON.parse(boardIndexes);
        const board = document.getElementsByClassName('pixel');
        for (let colors = 0; colors < InfRgbArray.length; colors += 1) {
            const index = boardIndexesArray[colors];
            board[index].style.backgroundColor = InfRgbArray[colors];
        }
    }
}
loadBoard();

let teste = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log(teste);
