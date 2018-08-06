class MensagemView extends View {
    constructor(el){
        super(el);
    }
    template(obj) {
        return obj ? `
        <div class="alert ${obj.status} alert-dismissible fade show" role="alert">
            <strong>${obj.titulo}</strong> ${obj.texto}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        ` : ''
    }
}