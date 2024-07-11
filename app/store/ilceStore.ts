import { action, computed, makeAutoObservable, makeObservable } from "mobx";
import { ComponentBaseStore } from "../baseComponent/ComponentBaseStore";

class ilceStore extends ComponentBaseStore<string> {

    constructor() {
        super("", "input");
        makeObservable(this,{
            ilce:computed,
            setIlce:action
        });
    }

    get ilce():string {
      return  this.getValue;
    }

    setIlce(ilce: string) {
        this.setValue(ilce);
    }

}

export default ilceStore;