export class SomaArray {
    public _array:number[] = [];
    public _soma: number = 0;

    constructor(array: number[]){
        this._array = array;
    }

    public somaPares():number {
        for(let i = 0; i < this._array.length; i++){
            if(this._array[i] % 2 != 1) {
                console.log(`${this._array[i]} é par`);
                this._soma += this._array[i];
            }
        }
        return this._soma
    }
}
