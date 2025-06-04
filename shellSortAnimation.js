class ShellSortAnimation extends SortAnimation {
    async sort() {
        let gap = this.columns.length >> 1;
        
        while (gap > 0) {
            
            for (let i = 0; i < this.columns.length; i++) {
                if (i % gap === 0) {
                    this.columns[i].color = 'yellow';
                }
            }
            await this.wait(this.WAIT_TIME);
            
            for (let i = gap; i < this.columns.length; i++) {
                let value = this.columns[i].value;
                let j = i;

                this.columns[i].color = 'blue';
                await this.wait(this.WAIT_TIME);

                while (j >= gap && this.columns[j - gap].value > value) {
                    this.columns[j - gap].color = 'red';
                    await this.wait(this.WAIT_TIME);

                    this.columns[j].value = this.columns[j - gap].value;

                    this.columns[j - gap].color = ''; 
                    j -= gap;
                }

                this.columns[j].value = value;
                this.columns[i].color = ''; 
                await this.wait(this.WAIT_TIME);
            }

            for (let i = 0; i < this.columns.length; i++) {
                this.columns[i].color = '';
            }

            gap >>= 1;
        }

        for (let k = 0; k < this.columns.length; k++) {
            this.columns[k].color = 'green';
        }
    }
}
