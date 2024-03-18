//Ocorre quando uma função eh criada dentro da outra
//Essa função não pode ser acessada para o exterior da função primaria


function QualSeuNome(name){
    const msg = `o seu nome eh`;
    
    function YourName(){
        return `${msg} ${name}`
    }

    return YourName();
}