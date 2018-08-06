class UsuarioController {
    constructor() {
        var $ = document.querySelector.bind(document);
        this.inputNome = $('#nome');
        this.inputEmail = $('#email');
        this.inputSenha = $('#senha');
        this.inputData = $('#data');
        this.inputNome.focus();

        this.mensagemView = new MensagemView($('#mensagem'));
    }

    cadastrar(event) {
        event.preventDefault();
        var usuario = new Usuario(
            this.inputNome.value,
            this.inputData.value,
            this.inputEmail.value,
            this.inputSenha.value
        );
        this.limpar();
        let mensagem = new Mensagem('Informações : ', 'Usuário cadastrado com sucesso!', 'alert-success');
        this.exibirMensagem(mensagem);
    }

    limpar() {
        this.inputNome.value = '';
        this.inputEmail.value = '';
        this.inputSenha.value = '';
        this.inputData.value = '';
        this.inputNome.focus();
    }

    exibirMensagem(mensagem){
        this.mensagemView.render(mensagem);
        setTimeout(()=>{
            this.mensagemView.render(null);
        }, 5000)
    }
}