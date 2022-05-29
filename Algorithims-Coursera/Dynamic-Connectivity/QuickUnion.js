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

   root(i) {
    while (i !== this.id[i]) i = this.id[i];
    return i;
  }
}

const qf = new QuickFind(10);
qf.union(4,3);
// console.log(qf.array);
qf.union(3,8);
qf.union(6,5);
qf.union(9,4);
qf.union(2,1);
qf.union(5,0);
qf.union(7,2);
qf.union(6,1);
console.log(qf.array);
console.log(qf.connected(3,9))
console.log(qf.connected(1,5))