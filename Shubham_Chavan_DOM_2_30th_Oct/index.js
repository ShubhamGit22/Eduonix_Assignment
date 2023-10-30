const tableBody = document.querySelector('tbody');

function fetchDataWithPromises() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => console.error(error));
}

async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error(error);
    }
}

function displayData(data) {
    tableBody.innerHTML = '';

    data.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${coin.name}</td>
            <td>${coin.id}</td>
            <td><img src="${coin.image}" alt="${coin.name}" width="24" height="24"></td>
            <td>${coin.symbol}</td>
            <td>$${coin.current_price.toFixed(2)}</td>
            <td>$${coin.total_volume.toLocaleString()}</td>
            <td class="${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}">${coin.price_change_percentage_24h.toFixed(2)}%</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchDataWithPromises();
