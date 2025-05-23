let text = `[
        {
            "category": "Reaction",
                "score": 80,
                    "icon": "./assets/images/icon-reaction.svg"
        },
        {
            "category": "Memory",
                "score": 92,
                    "icon": "./assets/images/icon-memory.svg"
        },
        {
            "category": "Verbal",
                "score": 61,
                    "icon": "./assets/images/icon-verbal.svg"
        },
        {
            "category": "Visual",
                "score": 72,
                    "icon": "./assets/images/icon-visual.svg"
        }
]`;

const obj = JSON.parse(text);
obj.forEach(({category, score, icon}) => {
    let SumaryItems = `
    <div class="summary-items ${category.toLowerCase()}">
        <div class="items">
            <img src="${icon}" alt="">
            <p class="category">${category}</p>
        </div>
        <p class="sub-title">${score}/ 100</p>
    </div>
    `;

    document.querySelector('.summary-list').insertAdjacentHTML('afterbegin', SumaryItems);
})