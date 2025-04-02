document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('form')
    let nome = document.querySelector('#nome').value
    let idade = document.querySelector('#idade')
    let estado = document.querySelector('#estado')

    const salvarDados = ()=>{
        alert('Dados salvos com sucesso.')
    }

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        try{
            if(nome.value === ''){
                alert('Preencha o campo nome!')
            }else if(nome.value.length < 2){
                alert('Campo nome precisa ter mais de dois caracteres.')
            }else{
                salvarDados()
            }
        }catch(err){
            alert('Aconteceu um erro inesperado.')
        }
    })
})