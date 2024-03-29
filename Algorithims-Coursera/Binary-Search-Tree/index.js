let root = null;
function Node(value) {
    this.value = value;
    this.left =  null;
    this.right =  null;
}

const insert = (root, value) => {
  if(!root) {
    root = new Node(value);
    return root;
  }

  if(value < root.value) {
    root.left = insert(root.left,  value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
}

root = insert(root, 10);
root = insert(root, 7);
root = insert(root, 23);
root = insert(root, 27);
root = insert(root, 21);
root = insert(root, 9);
// root = insert(root, 3);
root = insert(root, 4);
root = insert(root, 6);
root = insert(root, 26);
root = insert(root, 28);
root = insert(root, 26.5);

console.log(root);

const inOrderTraversal = (root) => {
  if (!root)
    return;

  inOrderTraversal(root.left);

  console.log(root.value);

  inOrderTraversal(root.right);
}

// inOrderTraversal(root);

const preOrderTraversal = (root) => {
  if (!root)
    return;

  console.log(root.value);

  preOrderTraversal(root.left);

  preOrderTraversal(root.right);
}

// preOrderTraversal(root);

const inOrderTraversalWithoutRecursion = (root) => {
  if(!root)
    return;

  let stack = [];
  let current = root;

  while(current || stack.length > 0) {
    if(!current) {
      let node = stack.pop();
      console.log(node.value);
      current = node.right;
    } else {
      stack.push(current);
      current = current.left;
    }
  }
}

// inOrderTraversalWithoutRecursion(root);

const preOrderTraversalWithoutRecursion = (root) => {
  if (!root)
    return;

  let stack = [];
  let current = root;

  while (current || stack.length > 0) {
    if (current){
      console.log(current.value);
      stack.push(current);
      current = current.left;
    } else {
      let node = stack.pop();
      current = node.right;
    }
  }
}

// preOrderTraversalWithoutRecursion(root);

// Assume that the tree is a binary search tree.
const minimumValue = (root) => {
  if (!root)
    return;

    // with Recursive Approach

    // let current = root;
    // if(current.left)
    //   return minimumValue(current.left);
    // else
    //   return current.value;

    // with Iterative Approach

  let current = root;
  while(current.left) {
      current = current.left;
    }
    return current.value;
}

// console.log(minimumValue(root));

const deleteMinimum = (root) => {
  if (!root)
    return;

  if (root.left){
    root.left = deleteMinimum(root.left);
    return root;
  } else {
    return root.right;
  }
};

const deleteMaximum = (root) => {
  if (!root)
    return;

  if (root.right){
    root.right = deleteMaximum(root.right);
    return root;
  } else {
    return root.left;
  }
}

// console.log(deleteMinimum(root));
// console.log(deleteMaximum(root));

const deleteWithKey = (root, val) => {
  if (!root)
    return;

  if (val < root.value){
    root.left = deleteWithKey(root.left,  val);
    return root;
  } else if (val > root.value) {
    root.right = deleteWithKey(root.right,  val);
    return root;
  } else {
    if(root.right === null)
      return root.left;
    if (root.left === null)
      return root.right;


    root.value = minimumValue(root.right);
    deleteMinimum(root.right);
  }
  return root;
}

console.log(deleteWithKey(root, 23));

inOrderTraversalWithoutRecursion(root);