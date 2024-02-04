
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};



createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

/* Exercício 1 – Crie um calendário dinamicamente */
const createCalendar = () => {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const days = document.getElementById('days');
    const dates = document.createElement('li');
    days.appendChild(dates);
    dates.classList.add('day');
    dates.innerHTML = `${decemberDaysList[index]}`;
    if (dates.innerText === '4' || dates.innerText === '11' || dates.innerText === '18') {
      dates.classList.add('friday');
    } else if (dates.innerText === '24' || dates.innerText === '31') {
      dates.setAttribute('class', 'day holiday');
    } else if (dates.innerText === '25') {
      dates.classList.add('friday', 'holiday');

    }
  }
};

createCalendar();

/* Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday" */
const btnH = document.getElementById('btn-holiday');

const receiveClick = () => {
  const dates = document.getElementById('days');
  for (let index = 0; index < dates.children.length; index += 1) {
    if (dates.children[index].style.backgroundColor === "rgb(159, 161, 167)") {
      dates.children[index].style.backgroundColor = "rgb(238, 238, 238)";
    } else if (dates.children[index].className == 'day friday holiday' || dates.children[index].className == 'day holiday') {
      dates.children[index].style.backgroundColor = "#9fa1a7";
    }
  }
}
btnH.addEventListener('click', receiveClick);

/* Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras */
const btnF = document.getElementById('btn-friday');
const numberDay = document.getElementById('days').children[5].innerText;
const numberDayInt = Number(numberDay);
const receiveClickFriday = () => {
  let weeks = 0;
  const dates = document.getElementById('days');
  for (let index = 0; index < dates.children.length; index += 1) {
    if (dates.children[index].innerText === "😎") {
      const soma = numberDayInt + (weeks * 7);
      weeks += 1;
      dates.children[index].innerText = soma;
    }
    else if (dates.children[index].className == 'day friday' || dates.children[index].className == 'day friday holiday') {
      dates.children[index].innerText = "😎";
    }
  }
}

btnF.addEventListener('click', receiveClickFriday);

/* Exercício 4 – Implemente duas funções que criem um efeito de "zoom" */
const zoom = () => {
  const daysList = document.getElementsByClassName('day');
  for (let index = 0; index < daysList.length; index += 1) {
    const dayList = daysList[index]
    dayList.addEventListener("mouseover", function (event) {
      event.target.dayList;
      dayList.style.fontSize = "30px";
    }), dayList.addEventListener("mouseout", function (event) {
      event.target.dayList;
      dayList.style.fontSize = "20px";
    })
  }
}
zoom();

/* Exercício 5 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário */
const tasks = document.querySelector("div.my-tasks").children;

const createTasks = () => {
  for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index];
    task.addEventListener("click", function (event) {
      event.target.task;
      if (task.className === "task selected") {
        task.classList.remove("selected");
      } else {
        task.classList.add('selected');
      }
    })
  }
    const daysList = document.getElementsByClassName('day');
    for (let index = 0; index < daysList.length; index += 1) {
      const dayList = daysList[index];
      dayList.addEventListener("click", function (event) {
        event.target.dayList;
        dayList.style.color = "rgb(0, 128, 0)";


      });
    }
  }

createTasks();