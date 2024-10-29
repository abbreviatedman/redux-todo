import React from "react";

const TodoActions = () => {
  const actionsStyles = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    color: "white",
  };

  const completeStyles = {
    ...buttonStyles,
    backgroundColor: preferences.darkMode ? "#28a745" : "#28a745",
  };

  const deleteCompletedStyles = {
    ...buttonStyles,
    backgroundColor: preferences.darkMode ? "#dc3545" : "#dc3545",
  };

  const deleteAllStyles = {
    ...buttonStyles,
    backgroundColor: preferences.darkMode ? "#ffc107" : "#ffc107",
    color: preferences.darkMode ? "black" : "black",
  };

  return (
    <div style={actionsStyles}>
      <button style={completeStyles}>
        Mark All Complete
      </button>
      <button style={deleteCompletedStyles}>
        Delete All Completed
      </button>
      <button style={deleteAllStyles}>
        Delete All Todos
      </button>
    </div>
  );
};

export default TodoActions;
