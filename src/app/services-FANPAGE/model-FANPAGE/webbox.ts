export class WebBoxData {
    name: string = '';
    runningNum: number = 0;
    totalNum: number = 0;
    constructor(name: string, runningNum: number, totalNum: number) {
        this.name = name;
        this.runningNum = runningNum;
        this.totalNum = totalNum;
    }
}
