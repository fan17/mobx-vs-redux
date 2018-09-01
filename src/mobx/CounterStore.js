import { observable, action } from 'mobx';

class CounterStore {
    @observable counter = 10;
  
    @action increment = () => {
      this.counter += 1;
    };

    @action decrement = () => {
        this.counter -= 1;
    };
}

const counterStore = new CounterStore();

export default counterStore;
export { counterStore };