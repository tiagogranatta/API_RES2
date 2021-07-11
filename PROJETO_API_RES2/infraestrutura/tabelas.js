class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarCliente()

        
    }

    criarCliente() {
        const sql = `CREATE TABLE IF NOT EXISTS
        Cliente (id int NOT NULL
        AUTO_INCREMENT, Nome varchar(50) NOT
        NULL, Sexo enum('M','F'), DataNascimento date,
        Telefone varchar(20), Email varchar(50),
        Endereco varchar(100), Bairro varchar(50),
        Cidade varchar(50), Estado char(2),
        PRIMARY KEY(id))`


        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            }else {
                console.log('Tablea Clientes criada com sucesso')
            }
        })

    }
}
module.exports = new Tabelas