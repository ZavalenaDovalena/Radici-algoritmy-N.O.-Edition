class MergeSortAnimation extends SortAnimation {
    async sort() {
        let n = this.columns.length;
        let originalArray = this.columns.map(col => col.value);
        let auxiliaryArray = new Array(n);

        for (let gap = 1; gap < n; gap *= 2) {
            for (let min = 0; min < n; min += 2 * gap) {
                let mid = Math.min(min + gap - 1, n - 1);
                let max = Math.min(min + 2 * gap - 1, n - 1);

                let i = min, j = mid + 1, k = min;

                while (i <= mid && j <= max) {
                    this.columns[i].color = 'yellow';
                    this.columns[j].color = 'yellow';
                    await this.wait();

                    if (originalArray[i] <= originalArray[j]) {
                        auxiliaryArray[k++] = originalArray[i++];
                    } else {
                        auxiliaryArray[k++] = originalArray[j++];
                    }

                    this.columns[i - 1 >= min ? i - 1 : i].color = '';
                    this.columns[j - 1 >= mid + 1 ? j - 1 : j].color = '';
                }

                while (i <= mid) {
                    this.columns[i].color = 'yellow';
                    await this.wait();
                    auxiliaryArray[k++] = originalArray[i++];
                    this.columns[i - 1].color = '';
                }

                while (j <= max) {
                    this.columns[j].color = 'yellow';
                    await this.wait();
                    auxiliaryArray[k++] = originalArray[j++];
                    this.columns[j - 1].color = '';
                }

                for (let m = min; m <= max; m++) {
                    originalArray[m] = auxiliaryArray[m];
                    this.columns[m].value = auxiliaryArray[m];
                    this.columns[m].color = 'blue';
                    await this.wait();
                    this.columns[m].color = '';
                }
            }
        }

        for (let i = 0; i < this.columns.length; i++) {
            this.columns[i].color = 'green';
            await this.wait();
        }
    }
}
