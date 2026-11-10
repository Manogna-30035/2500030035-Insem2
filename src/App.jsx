
import { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("");

  return (
    <div className="container">
      <h1>Student Management System</h1>

      {!role ? (
        <div className="card">
          <h2>Login Portal</h2>
          <p>Select Your Role</p>

          <button onClick={() => setRole("admin")}>
            Admin Login
          </button>

          <button onClick={() => setRole("user")}>
            User Login
          </button>
        </div>
      ) : role === "admin" ? (
        <div className="card">
          <h2>Admin Panel</h2>
          <h3>Welcome Admin!</h3>

          <button>Manage Students</button>
          <button>View Reports</button>

          <button onClick={() => setRole("")}>
            Logout
          </button>
        </div>
      ) : (
        <div className="card">
          <h2>User Panel</h2>
          <h3>Welcome Student!</h3>

          <button>View Profile</button>
          <button>View Marks</button>

          <button onClick={() => setRole("")}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
