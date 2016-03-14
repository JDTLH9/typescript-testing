export module Souls {
    export interface ISoul {
        GetSoulName() : string;
    }
    
    export class Soul implements ISoul{
        private soulName: string;
        
        constructor() {
            this.soulName = "My soul has no name!!!!";
        }
        
        GetSoulName(): string {
            return this.soulName;
        }
    }
}