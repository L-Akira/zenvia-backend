import { ICash } from "@shared/interfaces";

export default class Withdrawer {
    
    constructor() {}

    public async execute(amount: number): Promise<ICash> {
        const cash: ICash = {
            "100x": 0, 
            "50x": 0, 
            "20x": 0,
            "10x": 0, 
        }    
        
        if(amount % 100 === 0) {
            cash["100x"] = amount / 100;
            return cash;
        }

        if(amount % 100 !== 0) {
            cash["100x"] = Math.trunc(amount / 100);
            amount = amount % 100;
        }

        while(amount > 0) {
            if(amount >= 50) {
                amount = amount - 50;
                cash["50x"]++;
                continue;
            }

            if(amount >= 20) {
                amount = amount - 20;
                cash["20x"]++;
                continue;
            }

            if(amount >= 10) {
                amount = amount - 10;
                cash["10x"]++;
                continue;
            }            
        }
        
        return cash;
    }
}