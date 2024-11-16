// JunctionSelector.js
import React from 'react';

const JunctionSelector = ({ setSelectedJunctions }) => {
  const handleJunctionSelect = (junctionCount) => {
    // Call the provided function with the selected junction count
    setSelectedJunctions(junctionCount || 4);
  };

  return (
    <div className="junction-selector">
      <button onClick={() => handleJunctionSelect(4)} disabled={true}>4 Junctions</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default JunctionSelector;
