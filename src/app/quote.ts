export class Quote {
    showDescription: boolean;
    public like: number;
     public Dislike: number;
    

    constructor(public id: number, public name: string, public description: string,){
     this.showDescription=false;
    {
    this.like=0;
    this.Dislike=0;
    }

}

}

