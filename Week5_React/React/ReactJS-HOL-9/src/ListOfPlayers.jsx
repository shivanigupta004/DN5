function ListOfPlayers() {
  const players = [
    { name: 'Rohit Sharma', score: 88 },
    { name: 'Virat Kohli', score: 95 },
    { name: 'KL Rahul', score: 72 },
    { name: 'Suryakumar Yadav', score: 64 },
    { name: 'Jasprit Bumrah', score: 24 },
    { name: 'Hardik Pandya', score: 71 },
    { name: 'Shreyas Iyer', score: 58 },
    { name: 'Rishabh Pant', score: 67 },
    { name: 'Ravindra Jadeja', score: 44 },
    { name: 'Mohammed Shami', score: 32 },
    { name: 'Shubman Gill', score: 76 },
  ]

  const below70 = players.filter((player) => player.score < 70)

  return (
    <section className="card">
      <h2>List of Players</h2>
      <p>
        This component declares 11 players and renders the list using
        <strong> map()</strong>.
      </p>
      <ul className="player-list">
        {players.map(({ name, score }, index) => (
          <li key={index}>
            <span>{name}</span>
            <strong>{score}</strong>
          </li>
        ))}
      </ul>
      <div className="filter-box">
        <h3>Players scoring below 70</h3>
        <ul className="player-list compact">
          {below70.map(({ name, score }, index) => (
            <li key={index}>
              <span>{name}</span>
              <strong>{score}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ListOfPlayers
