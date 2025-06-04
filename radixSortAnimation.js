class RadixSortAnimation extends SortAnimation {
    async sort() {
        let base = Math.round(Math.sqrt(this.columns.length));
        base = Math.max(2, base);
        await this.radixSort(this.columns, base);
    }

    async radixSort(array, base = 10) {
        let min = array[0].value;
        let max = array[0].value;
        let minIndex = 0;

        for (let i = 0; i < array.length; i++) {
            array[i].color = 'blue';
            await this.wait();
            const value = array[i].value;
            if (value < min) {
                if (minIndex !== i) array[minIndex].color = '';
                min = value;
                minIndex = i;
                array[minIndex].color = 'blue';
                array[i].color = '';
            } else {
                array[i].color = '';
            }
        }

        for (let i = 0; i < array.length; i++) {
            array[i].color = 'orange';
            await this.wait();
            if (array[i].value > max) max = array[i].value;
            array[i].color = '';
        }

        let range = max - min + 1;
        let inputArray = array;
        let outputArray = new Array(array.length);

        let lastExp = 1;
        while (Math.floor((max - min) / lastExp) >= base) {
            lastExp *= base;
        }

        for (let exp = 1; exp <= range; exp *= base) {
            let isLastPass = exp === lastExp;

            let countArray = new Array(base).fill(0);
            for (let i = 0; i < inputArray.length; i++) {
                const value = Math.floor((inputArray[i].value - min) / exp) % base;
                inputArray[i].color = 'red';
                await this.wait();
                countArray[value]++;
                inputArray[i].color = '';
            }

            for (let i = 1; i < base; i++) {
                countArray[i] += countArray[i - 1];
            }

            for (let i = inputArray.length - 1; i >= 0; i--) {
                const arrayValue = inputArray[i];
                const value = Math.floor((arrayValue.value - min) / exp) % base;
                const index = --countArray[value];
                arrayValue.color = 'yellow';
                await this.wait();
                outputArray[index] = arrayValue;
            }

            for (let i = 0; i < inputArray.length; i++) {
                inputArray[i] = outputArray[i];
                inputArray[i].index = i;

                if (isLastPass) {
                    inputArray[i].color = 'green'; 
                    await this.wait();          
                } else {
                    await this.wait();
                    inputArray[i].color = '';     
                }
            }
        }
    }
}
