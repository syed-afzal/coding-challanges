const P1 = Promise.resolve(1);
const P2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second promise')
  })
const P3 = 'third Promise';
const P4 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej('new method')
    }, 200)
  })
}

Promise.all([P1,  P2,  P3, P4()]).then((res) => {
  console.log(res);
}).catch((e) => console.log(e));

const myAll = (promises) => {
  return new Promise((res, rej) => {
    let len = promises.length;
    let count = 0;
    const results = [];

    promises.forEach((ps, i) => {
      Promise.resolve(ps).then((suc) => {
        results[i]=(suc);
        count++;
        if (count === len)
          res(results);
      }).catch(e => rej(e));
    })
  });
}

myAll([P1,P2, P3, P4()]).then((res)=> {
  console.log(res);
}).catch((e) => console.log(e));