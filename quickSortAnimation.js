class QuickSortAnimation extends SortAnimation {
    async sort() {
        await this.quickSort(0, this.columns.length - 1);
        for (let k = 0; k < this.columns.length; k++) {
            this.columns[k].color = 'green';
        }
    }

    async quickSort(min, max) {
        if (min >= max) return;
        let p = await this.Partition(min, max);
        await this.quickSort(min, p);
        await this.quickSort(p + 1, max);
    }

    async Partition(min, max) {
        let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        let pivotValue = this.columns[randomIndex].value;

        this.columns[randomIndex].color = 'blue';
        await this.wait(this.WAIT_TIME);

        let i = min - 1;
        let j = max + 1;

        while (true) {
            
            do {
                i++;
                this.columns[i].color = 'yellow';
                await this.wait(this.WAIT_TIME);
            } while (this.columns[i].value < pivotValue);

            do {
                j--;
                this.columns[j].color = 'orange';
                await this.wait(this.WAIT_TIME);
            } while (this.columns[j].value > pivotValue);

            if (i >= j) {
                this.columns[i].color = '';
                this.columns[j].color = '';
                this.columns[randomIndex].color = '';
                return j;
            }

            this.columns[i].color = 'red';
            this.columns[j].color = 'red';
            await this.wait(this.WAIT_TIME);

            this.swap(i, j);

            this.columns[i].color = '';
            this.columns[j].color = '';
        }
    }

    swap(i, j) {
        let tmp = this.columns[i].value;
        this.columns[i].value = this.columns[j].value;
        this.columns[j].value = tmp;
    }
}
