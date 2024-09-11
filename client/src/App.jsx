import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;

    setLoading(true); // Set loading before fetching data
    setNotFound(false);
    setProfilePicture(null);

    try {
      const response = await fetch(`http://localhost:5000/api/users/${username}`);

      if (response.ok) {
        const data = await response.json();
        //setProfilePicture(data.profile_picture);
        console.log('Profile picture data:', data.profile_picture);
        setProfilePicture(`./public${data.profile_picture}`);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setNotFound(true);
    } finally {
      setLoading(false); // Reset loading once fetch is complete
    }
  };

  return (
    <div className="App">
      <h1>Search User</h1>

      <input
        id="username"          // Added id attribute for accessibility and autofill
        name="username"        // Added name attribute
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {/* Display Profile Picture */}
      {profilePicture && (
        <div>
          <h2>{username}'s Profile</h2>
          <img src={profilePicture} alt={`${username}'s profile`} />
        </div>
      )}

      {/* Display Not Found Message */}
      {notFound && !loading && <p>User not found</p>}
    </div>
  );
}

export default App;
