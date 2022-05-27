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

  connected(p, q) {
    return this.id[p] === this.id[q];
  }

  union(p, q) {
    let pid = this.id[p];
    let qid = this.id[q];
    for(let i=0; i<this.id.length; i++) {
      if(this.id[i] === pid) this.id[i] = qid
    }
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