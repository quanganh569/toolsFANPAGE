import { ChartHistory } from './chartHistory';
export class CharData {
    name: string = '';
    data: ChartHistory[] = [];
    constructor(name: string, data: ChartHistory[] ) {
        this.name = name;
        this.data.concat(data);
    }

}
