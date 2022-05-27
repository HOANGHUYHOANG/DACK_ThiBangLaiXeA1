let array_1 = [{
    question: "Phương tiện tham gia giao thông đường bộ” gồm những loại nào",
    image: "https://hoclaixemoto.com/image200/145.jpg",
    answers: [
        "Biển báo nguy hiểm",
        "Biển báo cấm.",
        "Biển báo hiệu lệnh phải thi hành",
        "Biển báo chỉ dẫn"
    ]
}, {
    question: "Phương tiện tham gia giao thông đường bộ” gồm những loại nào123",

    answers: [
        "Biển báo nguy hiểm",
        "Biển báo cấm.",
        "Biển báo hiệu lệnh phải thi hành",
        "Biển báo chỉ dẫn"
    ]
}, {
    question: "Phương tiện tham gia giao thông đường bộ” gồm những loại nào12345678",
    image: "https://hoclaixemoto.com/image200/145.jpg",
    answers: [
        "Biển báo nguy hiểm",
        "Biển báo cấm.",
        "Biển báo hiệu lệnh phải thi hành"
        // "Biển báo chỉ dẫn"
    ]
}];
let array_2 = [{
    question: "Phương tiện tham gia giao thông đường bộ” gồm những loại nào",
    image: "https://hoclaixemoto.com/image200/145.jpg",
    answers: [
        "Biển báo nguy hiểm",
        "Biển báo cấm.",
        "Biển báo hiệu lệnh phải thi hành",
        "Biển báo chỉ dẫn"
    ]
}, {
    question: "Phương tiện tham gia giao thông đường bộ” gồm những loại nào123",

    answers: [
        "Biển báo nguy hiểm",
        "Biển báo cấm.",
        "Biển báo hiệu lệnh phải thi hành",
        "Biển báo chỉ dẫn"
    ]
}, {
    question: "Phương tiện tham gia giao thông đường bộ” gồm những loại nào12345678",
    image: "https://hoclaixemoto.com/image200/145.jpg",
    answers: [
        "Biển báo nguy hiểm",
        "Biển báo cấm.",
        "Biển báo hiệu lệnh phải thi hành"
        // "Biển báo chỉ dẫn"
    ]
}];
const tonghopde = [array_1, array_2];

let current = 0;
let question = "";
let html = '<div id="ordinal-question">' +
    'Câu ' +
    '</div>' +
    '<div id="value-question">' +
    '</div>' +
    '<div id="imgs"><image src=""></image></div>' +
    '<div class="answer">' +
    '<ul class="checkbox-list">' +
    '<li id="no_1">' +
    '<input type="radio" name="1" value="1"><span>1 - </span>' +
    '</li>' +
    '<li id="no_2">' +
    '<input type="radio" name="1" value="2"><span>2 - </span>' +
    '</li>' +
    '<li id="no_3">' +
    '<input type="radio" name="1" value="3"><span>3 - </span>' +
    '</li>' +
    '<li id="no_4">' +
    '<input type="radio" name="1" value="3"><span>4 - </span>' +
    '</li>' +
    '</ul>' +
    '</div>';

const container = document.getElementById("question");

function nextOrPrev(isNext = true) {
    if (!isNext) {
        if (current - 2 >= 0)
            renderQuestion(current - 2);
    } else {
        if (current + 1 <= array.length)
            renderQuestion(current);
    }

}

function renderQuestion(id = 0, id_de = 0) {
    if (id >= 0) {
        current = id + 1;
        let de = tonghopde[id_de];
        let data = de[id];
        container.innerHTML = html;
        container.querySelector("#value-question").textContent = data.question;
        container.querySelector("#no_1 span").textContent = "1 - " + data.answers[0];
        container.querySelector("#no_2 span").textContent = "2 - " + data.answers[1];
        container.querySelector("#no_3 span").textContent = "3 - " + data.answers[2];
        container.querySelector("#ordinal-question").textContent = "Câu " + current;
        if (data.answers.length > 3) {
            container.querySelector("#no_4").style.display = "flex";
            container.querySelector("#no_4 span").textContent = "4 - " + data.answers[3];
        }
        if (data.image) {
            const imgs = container.querySelector("#imgs");
            imgs.style.display = "flex";
            imgs.firstChild.src = data.image;
        }
    }

}
renderQuestion();
document.getElementById("next").addEventListener("click", nextOrPrev);
document.getElementById("previous").addEventListener("click", function() { nextOrPrev(false) }, false);