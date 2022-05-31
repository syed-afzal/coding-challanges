class QuickUnion {
  constructor(N) {
    this.id = [];
    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  get array() {
    return this.id;
  }

   root(i) {
    while (i !== this.id[i]) i = this.id[i];
    return i;
  }

  connected(p,q) {
    return this.root(p) === this.root(q);
  }

  union(p,q) {
    const rootP = this.root(p);
    const rootQ = this.root(q);
    this.id[rootP] = rootQ;
  }
}

const qf = new QuickUnion(10);
console.log(qf.array);
qf.union(4,3);
qf.union(3,8);
qf.union(9,4);
console.log(qf.array);