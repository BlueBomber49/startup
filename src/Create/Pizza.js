export class pizza{
    constructor (description){
        this.description = description;
        this.allToppings = toppings;
    }

    getDescription(){
        return this.description;
    }

    getToppings(){
        return this.allToppings
    }
    toJSON(){
        return {
            description: this.description,
            toppings: this.allToppings
        };
    }
}