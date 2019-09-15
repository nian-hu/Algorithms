// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

// EXAMPLE

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
// Return the following binary tree:

//     3
//    /  \
//  9     20
//       /  \
//     15     7


function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;
  
  let root = new TreeNode(preorder[0]);       // 3
  let rootIdx = inorder.indexOf(preorder[0]);

  let leftInorder = inorder.slice(0, rootIdx); // [9]
  let rightInorder = inorder.slice(rootIdx + 1); // [15, 20, 7]

  let leftPreorder = preorder.filter(val => leftInorder.includes(val))
  let rightPreorder = preorder.filter(val => rightInorder.includes(val))

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}
