class InsertionSortAnimation extends SortAnimation {
    async sort() {
        this.columns[0].color = 'yellow'
        for (let i = 1; i < this.columns.length; i++) {
            let value = this.columns[i].value;
            let j = i - 1;

            this.columns[i].color = 'blue';
            await this.wait(this.WAIT_TIME);

            while (j >= 0 && this.columns[j].value > value) {
                this.columns[j + 1].value = this.columns[j].value;
                this.columns[j].color = 'red';

                await this.wait(this.WAIT_TIME);

                this.columns[j].color = 'yellow';
                j--;
            }

            this.columns[j + 1].value = value;
            this.columns[i].color = 'yellow';

            await this.wait(this.WAIT_TIME);

            
        }
        for (let k = 0; k < this.columns.length; k++) {
            this.columns[k].color = 'green';
        }
    }
}
