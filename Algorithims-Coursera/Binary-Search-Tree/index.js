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
root = insert(root, 3);

console.log(root);


const inOrderTraversal = (root) => {
  if (!root)
    return;

  inOrderTraversal(root.left);

  console.log(root.value);

  inOrderTraversal(root.right);
}

inOrderTraversal(root);

const preOrderTraversal = (root) => {
  if (!root)
    return;

  console.log(root.value);

  inOrderTraversal(root.left);

  inOrderTraversal(root.right);
}

