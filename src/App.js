import { useState } from "react";
import "./App.css";
import explorer from "./Data/folderData";
import Folder from "./components/Folder";
import userTraverseTree from "./hooks/useTravserseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = userTraverseTree();

  function handleInsertNode(folderId, item, isFolder) {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  }
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
