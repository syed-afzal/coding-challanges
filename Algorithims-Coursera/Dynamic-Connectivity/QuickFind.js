class QuickFind {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  get array() {
    return this.id;
  }
}

const qf = new QuickFind(10);

