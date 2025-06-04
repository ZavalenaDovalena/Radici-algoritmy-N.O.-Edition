class Column {
    #value;
    div;
    #index;

    get value() {
        return this.#value;
    }

    get index() {
        return this.#index;
    }

    set value(value) {
        this.#value = value;
        this.div.style.setProperty('--value', value);
    }

    set index(value) {
        this.#index = value;
        this.div.style.setProperty('--index', value);
    }

    set color(value) {
        this.div.style.setProperty('background-color', value);
    }

    get color() {
        return this.div.style.getPropertyValue('background-color');
    }

    constructor(value, index) {
        this.div = document.createElement('div');
        this.value = value;
        this.index = index;
    }
}