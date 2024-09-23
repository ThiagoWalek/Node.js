async function cadastrar(){

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const age = document.getElementById('age');

    const formData = {
        name: name.value,
        email: email.value,
        age: age.value
    };

    const response = await fetch('/usuarios', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('age').value = ''
    return response
};

async function relatorio(response){
    console.log(response)
    const resposta = document.createElement('p')
    const conteudo = document.createTextNode(response)
    resposta.appendChild(conteudo)
}