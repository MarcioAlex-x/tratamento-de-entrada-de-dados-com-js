document.addEventListener('DOMContentLoaded', () => {
    
    const caclTr = () => {
        
        let B = parseFloat(prompt('Informe a maior base do trapézio!'))
        let b = parseFloat(prompt('Informe a menor base do trapézio!'))
        let h = parseFloat(prompt('Informe a altura do trapézio!'))
        let area = ((B + b)*h)/2
        alert(`A área do trapézio é ${area}`)
    }
    document.querySelector('button').addEventListener('click',()=>{
        caclTr()
    })
})