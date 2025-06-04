class SelectionSortAnimation extends SortAnimation {
    async sort() {
        for (let i = 1; i < this.columns.length; i++) {
            const bound = this.columns.length - i;
            let max = this.columns[0].value;
            let maxIndex = 0;
            
            for (let j = 1; j <= bound; j++) {
                this.columns[j].color = 'red';
                this.columns[maxIndex].color = 'red';
                
                await this.wait(this.WAIT_TIME);
                
                if (this.columns[j].value > max) {
                    this.columns[maxIndex].color = '';
                    max = this.columns[j].value;
                    maxIndex = j;
                }

                this.columns[j].color = '';
                
                await this.wait(this.WAIT_TIME);
            }
            this.columns[maxIndex].color = 'red';
            this.columns[bound].color = 'red';
            await this.wait(this.WAIT_TIME);
            const tmp = this.columns[maxIndex].value;
            this.columns[maxIndex].value = this.columns[bound].value;
            this.columns[bound].value = tmp;
            this.columns[maxIndex].color = '';
            this.columns[bound].color = 'green';
        }
    }
}
