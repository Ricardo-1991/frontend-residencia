function capturarInformacoes() {
    const nomeDestino = document.getElementById('nomeDestino').value;
    const duracao = document.getElementById('duracao').value;
    const preco = document.getElementById('preco').value;

    const novoDestino = document.createElement('div');
    novoDestino.className = 'card';

    novoDestino.innerHTML = `
        <header>
            <img src="https://a.cdn-hotels.com/gdcs/production27/d923/81c3164f-a8be-4a85-a320-56fe316227c1.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="Imagem do Destino">
            <h3>${nomeDestino}</h3>
        </header>
        <main>
            <ul>
                <li>Áereo ida e volta:</li>
                <li>Duração: ${duracao} diárias</li>
                <li>Café da manhã:</li>
            </ul>
            <div>
                <h2>Preço: R$ ${preco}</h2>
                <span>Taxas inclusas</span>
                <span>Em até 10x sem Juros</span>
            </div>
        </main>
    `;

    const containerDestinos = document.getElementById('containerDestinos');
    containerDestinos.appendChild(novoDestino);

    document.getElementById('nomeDestino').value = '';
    document.getElementById('duracao').value = '';
    document.getElementById('preco').value = '';

}
