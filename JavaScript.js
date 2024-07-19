let balance = 0;

function addExpense() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (description && !isNaN(amount)) {
        const expenseList = document.getElementById("expenseList");

        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item", `category-${category}`);
        expenseItem.innerHTML = `
            <div>${description}</div>
            <div>₹${amount.toFixed(2)}</div>
        `;
        expenseList.appendChild(expenseItem);

        balance += amount;
        updateBalance();

        // Clear input fields
        document.getElementById("description").value = "";
        document.getElementById("amount").value = "";
    }
}

function updateBalance() {
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = `₹${balance.toFixed(2)}`;
}
