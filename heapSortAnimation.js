class HeapSortAnimation extends SortAnimation { 
    async sort() {
        let n = this.columns.length;

        await this.heapify(n);

        for (let end = n - 1; end > 0; end--) {
            this.swapColumns(0, end);
            this.columns[0].color = 'red';
            this.columns[end].color = 'red';
            await this.wait();
            this.columns[0].color = '';
            this.columns[end].color = '';

            await this.siftDown(0, end);

            this.columns[end].color = 'green';
            await this.wait();
        }

        for (let i = 0; i < n - 1; i++) {
            this.columns[i].color = 'green';
            await this.wait();
        }
    }

    async heapify(count) {
        for (let i = (count >> 1) - 1; i >= 0; i--) {
            await this.siftDown(i, count);
        }
    }

    async siftDown(index, count) {
        while (true) {
            let childIndex1 = 2 * index + 1;
            let childIndex2 = childIndex1 + 1;
            if (childIndex1 >= count) break;

            let childIndex = childIndex1;
            if (childIndex2 < count &&
                this.columns[childIndex2].value > this.columns[childIndex1].value) {
                childIndex = childIndex2;
            }

            this.columns[index].color = 'yellow';
            this.columns[childIndex].color = 'yellow';
            await this.wait();

            if (this.columns[index].value < this.columns[childIndex].value) {
                this.swapColumns(index, childIndex);
                this.columns[index].color = '';
                this.columns[childIndex].color = '';
                index = childIndex;
            } else {
                this.columns[index].color = '';
                this.columns[childIndex].color = '';
                break;
            }
        }
    }

    swapColumns(i, j) {
        [this.columns[i].value, this.columns[j].value] = [this.columns[j].value, this.columns[i].value];
    }
}
