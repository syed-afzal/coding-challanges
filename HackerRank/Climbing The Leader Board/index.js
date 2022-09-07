function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const insert = (root, value) => {
  if(!root){
    root = new Node(value);
    return root;
  }

  if(value < root.value){
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
}

const climbingTheLeaderBoard = (ranked, player) => {
  let root = null;
  let result = [];
  // ranked = ranked.filter((item, index) => ranked.indexOf(item) === index);
  ranked = [...new Set(ranked)];

  for (let i=0; i<ranked.length; i++) {
    root = insert(root, ranked[i]);
  }

  for (let i=0; i<player.length; i++) {
    let rank = 1;
    let current = root;
    if(current.value > player[i]) {
      while (current && current.value !== player[i]) {
        if (player[i] < current.value) {
          current = current.left;
          rank++;
        } else {
          current = null;
        }
      }
    }
    result.push(rank);
  }
  return result;
}
console.log(climbingTheLeaderBoard([100, 90, 90, 80], [70, 80, 105]));
console.log(climbingTheLeaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));

