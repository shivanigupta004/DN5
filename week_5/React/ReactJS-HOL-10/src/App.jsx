import './App.css'

const office = {
  name: 'Maple Workspace',
  rent: 56000,
  address: '221B Market Street, Downtown, City Center',
  imageUrl:
    'https://images.unsplash.com/photo-1586015558153-01fbf6f71ead?auto=format&fit=crop&w=1200&q=80',
}

const officeSpaces = [
  {
    id: 1,
    name: 'Maple Workspace',
    rent: 56000,
    address: '221B Market Street, Downtown, City Center',
    imageUrl:
      'https://images.unsplash.com/photo-1586015558153-01fbf6f71ead?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Oak Executive Suite',
    rent: 72000,
    address: '88 Oak Avenue, Business Park',
    imageUrl:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Cedar Startup Loft',
    rent: 48000,
    address: '14 Cedar Lane, Innovation District',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  },
]

function App() {
  const headingStyle = {
    color: '#1b2a41',
    textAlign: 'center',
    marginBottom: '10px',
  }

  const subtitleStyle = {
    color: '#4f5d78',
    textAlign: 'center',
    marginTop: 0,
  }

  const heroImageStyle = {
    width: '100%',
    maxWidth: '680px',
    borderRadius: '16px',
    boxShadow: '0 18px 45px rgba(36, 60, 90, 0.15)',
  }

  const cardStyle = {
    background: '#fff',
    borderRadius: '16px',
    padding: '18px',
    boxShadow: '0 10px 26px rgba(37, 72, 106, 0.12)',
    border: '1px solid #e1e8f3',
  }

  const rentStyle = (rent) => ({
    color: rent > 60000 ? 'green' : 'red',
    fontWeight: '700',
  })

  return (
    <div className="app-shell">
      <header className="hero-banner">
        <h1 style={headingStyle}>Office Space Rental App</h1>
        <p style={subtitleStyle}>
          Learn JSX, render React nodes, use inline styles, and display rental office
          data in React.
        </p>
      </header>

      <main>
        <section className="office-intro">
          <div className="office-details" style={cardStyle}>
            <h2>Featured Office</h2>
            <p>
              <strong>Name:</strong> {office.name}
            </p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={rentStyle(office.rent)}>₹{office.rent.toLocaleString()}</span>
            </p>
            <p>
              <strong>Address:</strong> {office.address}
            </p>
          </div>
          <div className="office-image">
            <img
              src={office.imageUrl}
              alt="Office Space"
              style={heroImageStyle}
            />
          </div>
        </section>

        <section className="office-list">
          <h2>Available Offices</h2>
          <div className="office-grid">
            {officeSpaces.map((officeItem) => {
              const { id, name, rent, address, imageUrl } = officeItem
              return (
                <article key={id} className="office-card" style={cardStyle}>
                  <img src={imageUrl} alt={name} className="office-thumb" />
                  <h3>{name}</h3>
                  <p>{address}</p>
                  <p style={rentStyle(rent)}>Rent: ₹{rent.toLocaleString()}</p>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
