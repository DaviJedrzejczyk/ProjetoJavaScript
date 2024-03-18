function Name(name, sobrenome)
{
    this.name = name;
    this.sobreNome = () =>{
        const nomecompleto = `${this.name} ${sobrenome}`;
        return nomecompleto;
    }
}

const receba = new Name("oloco", "bolsonaro");

console.log(receba.sobreNome());