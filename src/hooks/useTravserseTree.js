export default function userTraverseTree() {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((itemObj) =>
      insertNode(itemObj, folderId, item, isFolder)
    );
    return { ...tree, items: latestNode };
  }

  //TODO please make these two functionalities as well
  function deleteNode(params) {}
  function updateNode(params) {}
  return { insertNode, deleteNode, updateNode };
}
