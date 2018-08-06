class Usuario {
    constructor(
        nome, data, email, senha
    ) {
        this._nome = nome;
        this._data = data;
        this._email = email;
        this._senha = senha;
    }

    get nome() {
        return this._nome;
    }

    get data(){
        return this._data;
    }

    get email() {
        return this.email;
    }

    get senha() {
        return this.senha;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set data(data){
        return this._data = data;
    }

    set email(email) {
        this._email = email;
    }

    set senha(senha) {
        if (senha) {
            this._senha = senha;
            return true;
        } else
            return false;
    }
}