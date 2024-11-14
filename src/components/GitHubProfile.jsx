// In GitHubProfile.jsx, create a component that uses useEffect to fetch GitHub user data from the GitHub API.

// // Use useState to store the fetched data from the API, including properties like avatar_url, login, followers_url, and html_url.

// // Limit the data to be rendered on the page to be 5 users.

import { useEffect, useState } from "react";

const GitHubProfile = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="profile-container">
      <h1>GitHub Profiles</h1>
      <ul className="profiles">
        {users.slice(0, 5).map((user) => (
          <li key={user.id} className="profile-card">
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
            <p>{user.followers_url}</p>
            <p>{user.html_url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProfile;
