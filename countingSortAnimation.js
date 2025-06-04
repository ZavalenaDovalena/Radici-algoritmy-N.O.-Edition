class CountingSortAnimation extends SortAnimation {
    async sort() {
        await this.countingSort(this.columns);
    }

    async countingSort(array) {
        let min = array[0].value;
        let max = array[0].value;
        let minIndex = 0;
        //----------zvýreznění minima----------\\
        for (let i = 0; i < array.length; i++) {
            array[i].color = 'blue';
            await this.wait();
            const value = array[i].value;
            if (value < min) {
                if (minIndex !== i) array[minIndex].color = '';

                min = value;
                minIndex = i;
                array[minIndex].color = 'blue';
            }
            array[i].color = '';
        }
        await this.wait();
        for (let i = 0; i < array.length; i++) {
            const value = array[i].value;
            if (value > max) max = value;
        }
        let range = max - min + 1;
        let countArray = new Array(range).fill(0);
        //----------zvýreznění minima----------\\
        for (let i = 0; i < array.length; i++) {
            array[i].color = 'red';
            await this.wait();
            countArray[array[i].value - min]++;
            array[i].color = '';
        }
        for (let i = 1; i < countArray.length; i++) {
            countArray[i] += countArray[i - 1];
        }
        //----------zažazení do output pole----------\\
        let output = new Array(array.length);
        for (let i = array.length - 1; i >= 0; i--) {
            let obj = array[i];
            let index = --countArray[obj.value - min];
            obj.color = 'yellow';
            await this.wait();
            output[index] = obj;
        }
        //----------hotov----------\\
        for (let i = 0; i < array.length; i++) {
            array[i] = output[i];
            array[i].index = i;
            array[i].color = 'green';
            await this.wait();
        }
        for (let i = 0; i < array.length; i++) {
            output[i].index = i;
            array[i] = output[i];
            array[i].color = 'green';
            await this.wait();
        }
    }
}
