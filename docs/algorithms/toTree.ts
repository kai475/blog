interface CustomNode {
  parentId: string | null;
  id: string;
}

interface Tree {
  id?: string;
  children?: Record<string, CustomNode>;
}

const arr: CustomNode[] = [
  { parentId: null, id: 'root' },
  { parentId: 'root', id: 'node1' },
  { parentId: 'node1', id: 'node2' },
  { parentId: 'root', id: 'node3' },
  { parentId: 'node4', id: 'node5' },
  { parentId: 'node3', id: 'node4' },
];

function toTree(arr: Array<CustomNode>) {
  const tree = {};
  const map = arr.reduce((acc, v) => (acc[v.id] = v, acc), {});
  for (const node of arr) {
    if (node.parentId === null) {
      tree[node.id] = node;
      delete node.parentId;
      continue;
    }
    if (node.parentId in map) {
      const parentNode = map[node.parentId];
      parentNode.children = parentNode.children || {};
      parentNode.children[node.id] = node;
      delete node.parentId;
    }
  }
  return tree;
}
