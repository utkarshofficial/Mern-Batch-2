import { Link } from 'react-router-dom'

const Home = () => {
    let navStyle = {
        display:  'flex',
        flexDirection: 'column',
    }
  return (
    <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/datetime">Datetime</Link>
        <Link to="/users">Users</Link>
    </nav>
  )
}

export default Home