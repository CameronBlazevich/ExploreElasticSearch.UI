import React from "react";

function RefinementListItem(props) {
  const { item, onItemClick, isChecked } = props;
  const { displayText } = item;
  return (
    <div>
      <label>
        <input
          name={displayText}
          type="checkbox"
          checked={isChecked}
          onChange={() => onItemClick(displayText)}
        />
        {displayText}
      </label>
    </div>
  );
}

export default RefinementListItem;
