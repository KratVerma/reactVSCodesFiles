import { useState } from "react";
import classes from "./Folder.module.css";
export default function Folder(props) {
  const { explorer, handleInsertNode } = props;
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  function handleNewFolder(e, isFolder) {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  }

  function onAddFolder(e) {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  }
  function openFolderHandler() {
    setExpand(!expand);
  }
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className={classes.folder} onClick={openFolderHandler}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className={classes.inputContainer}>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                onBlur={() => {
                  console.log("blur hua");
                  setShowInput({ ...showInput, visible: false });
                }}
                autoFocus
                className={classes.inputContainer__input}
              ></input>
            </div>
          )}
          {explorer.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              explorer={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className={classes.file}>📄{explorer.name}</span>;
  }
}
