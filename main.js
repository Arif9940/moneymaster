document.getElementById('calculate').addEventListener('click',function(){
    
const income = document.getElementById('income-input').value;
const numIncome = parseFloat(income);
const foodInput = document.getElementById('food-input').value;
const rentInput = document.getElementById('rent-input').value;
const clothInput = document.getElementById('cloth-input').value;
const totalExpense=parseFloat(foodInput)+parseFloat(rentInput)+parseFloat(clothInput);
if(income == "" ||foodInput =="" && rentInput =="" && clothInput =="" || income < totalExpense ){
    alert('Must be fill out with Number expense can not big than income');
    return false;
};


const totalCost = document.getElementById('totalCost');
 totalCost.innerText=totalExpense;
 const balance=document.getElementById('balance');
balance.innerText=income - totalExpense;


});

document.getElementById('save').addEventListener('click',function(){
    const balance=document.getElementById('balance').innerText; 
   const balanceNumber = parseFloat(balance);
   const saveValue =document.getElementById('save-value').value;
   if(saveValue > 50){
    alert('tomi onek kipta enjoy koro ki ase jibone');
    return false;
   };

   const saveValueNum = parseFloat(saveValue);
   const saveAmout = (saveValue * balanceNumber) / 100;
   document.getElementById('saving').innerText = saveAmout;
   const remainBl = balanceNumber-saveAmout;
   document.getElementById('remainingBalance').innerText=remainBl;
});

