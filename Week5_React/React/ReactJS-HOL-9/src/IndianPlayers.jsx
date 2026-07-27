function IndianPlayers() {
  const oddTeam = ['Rohit Sharma', 'Virat Kohli', 'KL Rahul', 'Suryakumar Yadav', 'Jasprit Bumrah']
  const evenTeam = ['Hardik Pandya', 'Shreyas Iyer', 'Rishabh Pant', 'Ravindra Jadeja', 'Mohammed Shami']

  const [firstOdd, secondOdd, ...remainingOdd] = oddTeam
  const [firstEven, secondEven, ...remainingEven] = evenTeam

  const t20Players = ['Ishan Kishan', 'Shivam Dube', 'Yuzvendra Chahal']
  const ranjiPlayers = ['Abhinav Mukund', 'Hanuma Vihari', 'Mayank Agarwal']
  const mergedPlayers = [...t20Players, ...ranjiPlayers]

  return (
    <section className="card">
      <h2>Indian Players</h2>
      <p>
        This component uses destructuring for odd and even team players and merges
        two arrays with <strong>ES6 spread</strong>.
      </p>
      <div className="team-group">
        <div>
          <h3>Odd Team</h3>
          <ul>
            <li>{firstOdd}</li>
            <li>{secondOdd}</li>
            {remainingOdd.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Even Team</h3>
          <ul>
            <li>{firstEven}</li>
            <li>{secondEven}</li>
            {remainingEven.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="merged-box">
        <h3>Merged Player Lists</h3>
        <ul>
          {mergedPlayers.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default IndianPlayers
