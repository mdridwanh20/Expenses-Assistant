

// calculate Btn work here: 
const calculateBtn = document.getElementById('calculate')
calculateBtn.addEventListener('click', function(){

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);


        if(income <= 0 || isNaN(income)){
            document.getElementById('income-error').classList.remove('hidden');
            return;
        }

        if(software <= 0 || isNaN(software)){
            document.getElementById('software-error').classList.remove('hidden');
            return;
        }

        if(courses <= 0 || isNaN(courses)){
            document.getElementById('courses-error').classList.remove('hidden');
            return;
        }

        if(internet <= 0 || isNaN(internet)){
            document.getElementById('internet-error').classList.remove('hidden');
            return;
        }

    // console.log({income, software, courses, internet});
    // console.table({income, software, courses, internet});
    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses; 

    if(totalExpenses > income){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }

    // total expense
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2)
    
    // total balance
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = balance.toFixed(2);

    // result summary hidden:
    document.getElementById('results').classList.remove('hidden')




    // history-section
    const historyItem = document.createElement('div');
    historyItem.className = 
    "bg-white p-3 rounded-md shadow-md border-l-2 border-blue-500";

    historyItem.innerHTML = `
    <P class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <P class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <P class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
    <P class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
    `;
    
    const historyContainer = document.getElementById('history-container');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
    


});
    

// calculate-savings;
const calculateSavingsBtn = document.getElementById('calculate-savings')
.addEventListener('click', function(){  
    const savingPercentage = parseFloat(document.getElementById('savings').value);

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses; 


    if (savingPercentage <= 0 || isNaN(savingPercentage)){
        document.getElementById('savings-error').classList.remove('hidden');
        return;
    }

    // saving amount 
        const savingsAmount = (savingPercentage * balance) / 100;

        // result summary
        const savingsElement = document.getElementById('savings-amount');
        savingsElement.innerText = savingsAmount.toFixed(2)

        // remaining 
        const remainingBalance = balance - savingsAmount;

        const remainingElement = document.getElementById('remaining-balance');
        remainingElement.innerText = remainingBalance.toFixed(2);
});



// history tab button:
    const historyTab = document.getElementById('history-tab');
    const assistantTab = document.getElementById('assistant-tab');

    historyTab.addEventListener('click', function(){
            historyTab.classList.add(
                "text-white",
                "bg-gradient-to-r",
                 "from-blue-500", 
                 "to-purple-600"
            );
        // assistant tab
            assistantTab.classList.remove(
                "text-white",
                "bg-gradient-to-r",
                 "from-blue-500", 
                 "to-purple-600"
            )
        document.getElementById('expense-form').classList.add('hidden')
        document.getElementById('history-section').classList.remove('hidden')

});
        
// assistant tab
    assistantTab.addEventListener('click', function(){
        assistantTab.classList.add(
            "text-white",
            "bg-gradient-to-r",
            "from-blue-500", 
            "to-purple-600"
        );

        historyTab.classList.remove(
            "text-white",
            "bg-gradient-to-r",
             "from-blue-500", 
             "to-purple-600"
        )
        document.getElementById('expense-form').classList.remove('hidden');
        document.getElementById('history-section').classList.add('hidden')


    });
   



