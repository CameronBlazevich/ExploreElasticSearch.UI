import React from 'react';
import RefinementListItem from './refinementListItem';

function RefinementList(props) {
  const {
    attributeName,
    refinementListItems,
    onItemClick,
    refinementCriteria
  } = props;
  const filteredRefinementCriteria = refinementCriteria.filter(
    rf => rf.field === attributeName
  );
  const items = refinementListItems.map(rli => (
    <RefinementListItem
      item={rli}
      onItemClick={onItemClick}
      isChecked={filteredRefinementCriteria.some(
        frc => frc.value === rli.displayText
      )}
    />
  ));

  return items.length > 0 ? (
    <div>
      <h5>{attributeName}</h5>
      <div>{items}</div>
    </div>
  ) : (
    <div />
  );
}

export default RefinementList;
