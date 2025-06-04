class PigeonHoleSortAnimation extends SortAnimation {
    async sort() {
        await this.pigeonHoleSort(this.columns);
    }

    async pigeonHoleSort(array) {
        let min = array[0].value;
        let max = array[0].value;

        for (let i = 0; i < array.length; i++) {
            let object = array[i];

            //----------prvek aktual----------\\
            object.color = 'blue';
            await this.wait();

            const value = object.value;

            if (value < min) {
                min = value;
                //----------minimum----------\\
                object.color = 'purple';
                await this.wait();
            }
            else if (value > max) {
                max = value;
                //----------maximum----------\\
                object.color = 'orange';
                await this.wait();
            }
            object.color = '';
        }

        let range = max - min + 1;
        let holeArray = new Array(range);
        for (let i = 0; i < range; i++) {
            holeArray[i] = [];
        }
        for (let i = array.length - 1; i >= 0; i--) {
            let object = array[i];
            object.color = 'red';
            await this.wait();
            holeArray[object.value - min].push(object);
            object.color = '';
        }

        let i = 0, j = 0;
        for (; i < range; i++) {
            let list = holeArray[i];
            while (list.length > 0) {
                let object = list.pop();
                object.color = 'yellow';
                await this.wait();

                object.index = j;
                array[j] = object;
                await this.wait();

                object.color = 'green';
                j++;
            }
        }

        for (let i = 0; i < array.length; i++) {
            array[i].color = 'green';
            await this.wait();
        }
    }
}
