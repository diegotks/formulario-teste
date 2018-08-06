class View {
    constructor(el) {
        this._el = el;
    }

    render(obj) {
        this._el.innerHTML = this.template(obj);
    }
}