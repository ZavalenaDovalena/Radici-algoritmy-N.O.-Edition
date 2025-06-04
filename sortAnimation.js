class SortAnimation {
    columns;
    WAIT_TIME = 50;
    values;
    #container;

    constructor(container, length) {
        this.#container = container;
        let max = 0;
        this.values = new Array(length);
        this.columns = new Array(length);
        for (let i = 0; i < this.values.length; i++) {
            this.values[i] = SortAnimation.randomValue(1, length);
            const column = new Column(this.values[i], i);
            this.columns[i] = column;
            container.appendChild(column.div);
            max = Math.max(this.values[i], max);
        }
        container.style.setProperty('--column-count', length);
        container.style.setProperty('--max-value', max);
    }

    static randomValue(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    async wait() {
        return new Promise(resolve => setTimeout(resolve, this.WAIT_TIME));
    }
}