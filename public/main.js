var food = document.getElementsByClassName("foodButton");
var nurture = document.getElementsByClassName("nurtureButton");
var trash = document.getElementsByClassName("fa fa-trash-o");
var bath = document.getElementsByClassName("bathButton");

Array.from(food).forEach(function (element) {
    element.addEventListener('click', function () {
        const name = this.parentNode.childNodes[1].innerText;
        const food = this.parentNode.childNodes[3].innerText;
        fetch('messages/food', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'name': name,
                'food': food
            })
        })
            .then(response => {
                if (response.ok) return response.json();
            })
            .then(data => {
                console.log(data);
                window.location.reload(true);
            });
    });
});

Array.from(bath).forEach(function (element) {
    element.addEventListener('click', function () {
        const name = this.parentNode.childNodes[1].innerText;
        const bath = parseFloat(this.parentNode.childNodes[5].innerText);
        fetch('messages/bath', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'name': name,
                'bath': bath
            })
        })
            .then(response => {
                if (response.ok) return response.json();
            })
            .then(data => {
                console.log(data);
                window.location.reload(true);
            });
    });
});

Array.from(nurture).forEach(function (element) {
    element.addEventListener('click', function () {
        const name = this.parentNode.childNodes[1].innerText;
        const nurture = parseFloat(this.parentNode.childNodes[7].innerText);
        fetch('messages/nurture', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'name': name,
                'nurture': nurture
            })
        })
            .then(response => {
                if (response.ok) return response.json();
            })
            .then(data => {
                console.log(data);
                window.location.reload(true);
            });
    });
});

Array.from(trash).forEach(function (element) {
    element.addEventListener('click', function () {
        const name = this.parentNode.parentNode.childNodes[1].innerText;
        const food = this.parentNode.parentNode.childNodes[3].innerText;
        fetch('messages', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'food': food
            })
        }).then(function (response) {
            window.location.reload();
        });
    });
});
