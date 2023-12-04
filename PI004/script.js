document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de evento para cada botão "Comprar"
    var buttons = document.querySelectorAll('.comprar-btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', capturarInformacoes);
    });
});

function capturarInformacoes(event) {

    const card = event.target.closest('.card');

    const destino = card.querySelector('h3').textContent;
    const preco = parseFloat(card.querySelector('h2').textContent.replace('R$ ', '').replace(',', '.'));
    const lists = card.querySelectorAll('li');
    const listValues = Array.from(lists).map(li => li.textContent);
    const spans = card.querySelectorAll('span');
    const spanValues = Array.from(spans).map(span => span.textContent);

    const pacoteTuristico = {
        destino: destino,
        lista: listValues,
        preco: preco,
        spanValues
    };

    console.log(pacoteTuristico);
}