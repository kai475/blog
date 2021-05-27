function getParent(node: Node) { return node.parentNode };

function commonParentNode(oNode1: Node & ParentNode | null, oNode2: Node & ParentNode | null) {
    if (getParent(oNode2) === getParent(oNode1)) return getParent(oNode1);
    else if (getParent(oNode2) !== null) commonParentNode(oNode1, getParent(oNode2));
    else return getParent(oNode2);
}

/**
 * use contains, no recursion
 */
function altCommonParentNode(oNode1: Node, oNode2: Node) {
  if (oNode2.contains(oNode1)) return oNode2;
  let node = oNode1;
  while (true) {
    if (node.contains(oNode2)) {
      return node;
    }
    node = node.parentNode;
  }
}
