///Task 1

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
}

showSlide();

setInterval(showSlide, 2000);


////Task 2
const quotes = [
    { text: "Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем.", author: "Генри Форд", backgroundColor: "#FFC0CB", color: "#000000" },
    { text: "Лучшая месть – огромный успех.", author: "Фрэнк Синэстра", backgroundColor: "#FFFF00", color: "#000000" },
    { text: " Лучше быть уверенным в хорошем результате, чем надеяться на отличный.", author: "Уорен Баффет", backgroundColor: "#00FFFF", color: "#000000" },
    { text: "Стоит только поверить, что вы можете – и вы уже на полпути к цели.", author: "Теодор Рузвельт", backgroundColor: "#00FF00", color: "#000000" },
    { text: ". У всего есть своя красота, но не каждый может ее увидеть.", author: "Конфуций", backgroundColor: "#FFA500", color: "#000000" },
    { text: " Успех — это способность идти от поражения к поражению, не теряя оптимизма", author: "Уинстон Черчилль", backgroundColor: "#800080", color: "#FFFFFF" }
];

function getRandom() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function changeQuote() {
    const quote = getRandom();
    const quoteElement = document.querySelector("#quote");
    quoteElement.innerHTML = `<p>${quote.text}</p><p>- ${quote.author}</p>`;
    document.body.style.backgroundColor = quote.backgroundColor;
    document.body.style.color = quote.color;
}
changeQuote()
setInterval(changeQuote, 4000)