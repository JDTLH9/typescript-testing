export module Souls {
    export interface ISoul {
        GetSoulName() : string;
    }
    
    export class Soul implements ISoul{
        private soulName: string;
        
        constructor() {
            this.soulName = "Soul has no name!!!!";
        }
        
        GetSoulName(): string {
            return this.soulName;
        }
    }
}