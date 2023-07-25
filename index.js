const playersAdd = document.getElementById('slected-players')
const playersList = document.getElementsByTagName('li')
const allButton = document.querySelectorAll('button')

function selection(name, id){
    if(playersList.length == 5){
        allButton.disabled = true;

    }
    else{
        playersAdd.innerHTML += `<li>${name}</li>`;
        document.getElementById(id).disabled = true;
        document.getElementById(id).style.backgroundColor = 'rgb(197 210 221)'
        document.getElementById(id).style.color = 'black'
    }
}
const playerExpense = document.getElementById('expenseDis')
function expenseCalculate(){
    const inputBudget = document.getElementById('budget-input')
    if(inputBudget.value > 100){
        const totalPlayerExpense = parseInt(playersList.length) * inputBudget.value;
    playerExpense.innerText = totalPlayerExpense;
    }
    inputBudget.value = '';
}
function extraCost(){
    const playerCost = playerExpense.innerText
    const managerCost = document.getElementById('manager-cost');
    const coachCost = document.getElementById('coach-cost');
    const totalDis = document.getElementById('in-total');
    if( managerCost.value > 100){
        const inTotal = parseFloat(playerCost) + parseFloat(managerCost.value) + parseFloat(coachCost.value);
        totalDis.innerText = inTotal;
        managerCost.value = '';
        coachCost.value = '';
    };
}