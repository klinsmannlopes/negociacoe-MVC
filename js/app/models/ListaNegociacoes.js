class ListaNegociacoes {
    // criar uma lista para negociação
    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacoes) {
        this._negociacoes.push(negociacoes);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}