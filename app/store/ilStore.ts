import { action, computed, makeAutoObservable, makeObservable } from "mobx";
import { ComponentBaseStore } from "../baseComponent/ComponentBaseStore";

class ilStore extends ComponentBaseStore<string> {

    constructor() {
        super("", "select");
        makeObservable(this,{
            il:computed,
            setIl:action
        });
    }

    get il():string {
      return  this.getValue;
    }

    setIl(il: string) {
        this.setValue(il);
    }

}

export default ilStore;