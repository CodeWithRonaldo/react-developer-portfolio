import { useEffect, useRef, useState } from "react";

const GitHubProfile = () => {
  const [users, setUsers] = useState([]);
  const searchRef = useRef();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.github.com/users", { mode: "cors" })
        .then((response) => {
          if (response.status === 403) {
            setUsers(data);
            setFilteredData(data);
            throw new Error("api not working");
          }

          console.log(response.status);
          return response.json();
        })
        .then((data) => {
          setUsers(data);
          setFilteredData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const searchValue = searchRef.current.value.toLowerCase();
    const filtered = users.filter((item) =>
      item.login.toLowerCase().includes(searchValue)
    );
    if (searchValue !== "") {
      setUsers(filtered);
    } else {
      setUsers(filteredData);
    }
  };

  return (
    <div className="profile-container">
      <h1>GitHub Profiles</h1>
      <input
        type="search"
        placeholder="Search by name"
        className="search"
        ref={searchRef}
        onChange={handleSearch}
      />
      <ul className="profiles">
        {users.slice(0, 5).map((user) => (
          <li key={user.id} className="profile-card">
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <p className="username">{user.login}</p>

            <a
              href={user.followers_url}
              target="_blank"
              rel="noopener noreferrer"
              className="followers"
            >
              <i className="fas fa-users" title="View Followers"></i>
            </a>

            <a
              href={user.html_url}
              className="github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" title="View GitHub Profile"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProfile;
