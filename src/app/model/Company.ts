
export class Company{

    
    private name : string;
    private catchPhrase : string;
    private bs : string;


    public getCatchPhrase() : string {
        return this.catchPhrase;
    }
    public setCatchPhrase(v : string) {
        this.catchPhrase = v;
    }
    
    public getName() : string {
        return this.name;
    }
    public setName(v : string) {
        this.name = v;
    }
    
    public getBs() : string {
        return this.bs;
    }
    public setBs(v : string) {
        this.bs = v;
    }
    
    
}

