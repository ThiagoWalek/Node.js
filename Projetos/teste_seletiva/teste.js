async function cadastrarOferta() {
    const courseName = document.getElementById('courseName');
    const nivel = document.getElementById('nivel');
    const tipo = document.getElementById('tipo');
    const fullPrice = document.getElementById('fullPrice');
    const offerPrice = document.getElementById('offerPrice');

    const formData = {
        courseName: courseName.value,
        nivel: nivel.value,
        tipo: tipo.value,
        fullPrice: parseFloat(fullPrice.value),
        offerPrice: parseFloat(offerPrice.value)
    };

    const response = await fetch('/ofertas', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert('Oferta cadastrada com sucesso!');
        // Limpa os campos após o cadastro
        courseName.value = '';
        nivel.value = '';
        tipo.value = '';
        fullPrice.value = '';
        offerPrice.value = '';
    } else {
        alert('Erro ao cadastrar a oferta!');
    }

    return response;
}

async function relatorio() {
    const response = await fetch('/ofertas');
    const data = await response.json();
    console.log(data);

    const resposta = document.createElement('p');
    const conteudo = document.createTextNode(JSON.stringify(data, null, 2));
    resposta.appendChild(conteudo);

    document.body.appendChild(resposta);
}
