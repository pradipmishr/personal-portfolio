export class AsyncLocalStorage {
  #store;
  run(store, fn) {
    this.#store = store;
    try {
      return fn();
    } finally {
      this.#store = undefined;
    }
  }
  getStore() {
    return this.#store;
  }
}
