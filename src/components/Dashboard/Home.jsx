import React, { useState } from 'react';
import ScorePage from '../Playerdata/ScorePage';
import "./home.css"

function Home() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const score = event.target.elements.score.value;
    const newPlayer = { name, score };
    setPlayers([...players, newPlayer]);
  };

  const filteredPlayers = players.filter(player => {
    return player.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleDeletePlayer = (index) => {
    const updatedPlayers = players.filter((player, i) => i !== index);
    setPlayers(updatedPlayers);
  }

  return (
    <>
      <h2 style={{ marginTop: "50px", color: "violet" }}>Welcome to Renomo website</h2>
      <div style={{ display: "grid", justifyContent: "center", marginTop: "100px" }}>
        <form style={{ display: "grid" }} onSubmit={handleChange}>
          <label style={{ color: "orange" }}>Enter Name:</label>
          <input style={{ borderColor: "violet", borderRadius: "5px", borderTopColor: "transparent", borderRightColor: "transparent", borderLeftColor: "transparent" }} placeholder='name' name="name" />
          <label style={{ color: "orange", marginTop: "30px" }}>Enter Score:</label>
          <input style={{ borderColor: "violet", borderRadius: "5px", borderTopColor: "transparent", borderRightColor: "transparent", borderLeftColor: "transparent", borderTop: "20px" }} placeholder='Score' name="score" />
          <button type="submit" style={{ marginTop: "20px", borderColor: "violet", borderRadius: "5px", borderTopColor: "transparent", borderRightColor: "transparent", borderLeftColor: "transparent" }}>submit</button>
        </form>
        <div style={{ marginTop: "50px" }}>
          <label style={{ color: "orange" }}>Search:</label>
          <input style={{ borderColor: "violet", borderRadius: "5px", borderTopColor: "transparent", borderRightColor: "transparent", borderLeftColor: "transparent" }} placeholder='Search by name' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
      </div>
      <ScorePage players={filteredPlayers} onDelete={handleDeletePlayer} />
    </>
  )
}

export default Home;
