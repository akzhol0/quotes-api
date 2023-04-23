const url = 'https://type.fit/api/quotes';

function join() {
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            append(data);
        }).catch(data => {
            console.error(data);
        });
}; 

function append(info) {
    const random = Math.round(Math.random() * 1640);
    for(let i = 0; i <= random; i++) {var req = info[i]};

    document.querySelector('[data-quote]').textContent = req.text;
    document.querySelector('[data-author]').textContent = req.author;
};

document.querySelector('[data-next-btn]').addEventListener('click', () => {
    join();
});
