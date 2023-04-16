import React from 'react';

function ScorePage(props) {
  const { players, onDelete } = props;
  
  const handleDelete = (index) => {
    onDelete(index);
  }

  return (
    <div style={{ marginTop: "50px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gridGap: "30px" }}>
      {players?.map((player, index) => (
        <div key={index} style={{ border: "2px solid violet", borderRadius: "5px", padding: "10px", textAlign: "center" }}>
          <h3>{player.name}</h3>
          <p>Score: {player.score}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ScorePage;
