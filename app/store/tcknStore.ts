import { action, computed, makeAutoObservable, makeObservable } from "mobx";
import { ComponentBaseStore } from "../baseComponent/ComponentBaseStore";

class tcknStore extends ComponentBaseStore<number> {

    constructor() {
        super(0, "input");
        makeObservable(this,{
            tckn:computed,
            setTckn:action
        });
    }

    get tckn():number {
      return  this.getValue;
    }

    setTckn(tckn: number) {
        this.setValue(tckn);
    }

}

export default tcknStore;