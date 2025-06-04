class BubbleSortAnimation extends SortAnimation{
    async sort() {
        for (let j = 0; j < this.columns.length; j++) {
            let bound = this.columns.length - j;
            let swap = false;
            for (let i = 1; i < bound; i++) {
                let index1 = i;
                let index2 = i - 1;
                this.columns[index1].color = 'red';
                this.columns[index2].color = 'red';
                await this.wait(this.WAIT_TIME);
                if (this.columns[index1].value < this.columns[index2].value) {
                    let tmp = this.columns[index1].value;
                    this.columns[index1].value = this.columns[index2].value;
                    this.columns[index2].value = tmp;
                    swap = true;
                    await this.wait(this.WAIT_TIME);
                }
                this.columns[index1].color = '';
                this.columns[index2].color = '';
            }
            if (!swap) {
                for (let i = 0; i < bound; i++) {
                    this.columns[i].color = 'green';
                }
                return;
            }
            this.columns[bound - 1].color = 'green';
        }
    }
}