const searchBar = document.getElementById('search-bar');
const tableBody = document.querySelector('#customer-table tbody');

const customers = [
    { country: 'USA', name: 'John' },
    { country: 'Canada', name: 'Alice' },
    { country: 'UK', name: 'Bob' },
    { country: 'Australia', name: 'Eva' },
    { country: 'France', name: 'Daniel' },
    { country: 'Germany', name: 'Sophia' },
    { country: 'Japan', name: 'Liam' },
    { country: 'Mexico', name: 'Olivia' },
    { country: 'Brazil', name: 'Noah' },
    { country: 'Italy', name: 'Ava' },
    { country: 'China', name: 'William' },
    { country: 'India', name: 'Mia' },
    { country: 'Spain', name: 'James' },
    { country: 'Russia', name: 'Charlotte' },
    { country: 'Argentina', name: 'Benjamin' }
];

function renderTable(customers) {
    tableBody.innerHTML = '';
    customers.forEach(customer => {
        const row = `<tr>
                        <td>${customer.country}</td>
                        <td>${customer.name}</td>
                    </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function filterTable(searchQuery) {
    const filteredCustomers = customers.filter(customer => {
        const fullName = `${customer.country} ${customer.name}`.toLowerCase();
        return fullName.includes(searchQuery.toLowerCase());
    });
    renderTable(filteredCustomers);
}

searchBar.addEventListener('input', (event) => {
    const searchQuery = event.target.value.trim();
    filterTable(searchQuery);
});

// Initial rendering of the table
renderTable(customers);
