function carregar(){
    fetch('carros.json').then(response => response.json()).then(carros=>{
        const container = document.querySelector("#carros-container")
   

    
    carros.map(
        carro=>{
            const  card = document.createElement("div");
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = carro.imagem 

            const titulo = document.createElement('h3');
            titulo.textContent = carro.nome;

            card.appendChild(img);
            card.appendChild(titulo);
            container.appendChild(card);
        }
    ) });
}
carregar()