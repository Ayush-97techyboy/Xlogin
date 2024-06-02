import { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setAuthenticated(true);
      setMessage(`Welcome ${username}`);
    } else {
      setMessage("Invalid credentials!");
      setAuthenticated(false);
    }
  };
  return (
    <Container maxWidth="sm">
      <div style={{ marginTop: "40px" }}>
        <Typography variant="h4" gutterBottom>
          Login Page
        </Typography>
        <div>
          {message && !authenticated && (
            <Typography variant="body1" color="error" sx={{ mb: 3 }}>
              {message}
            </Typography>
          )}
        </div>
        {!authenticated && (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div style={{ marginTop: "8px" }}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2}}
            >
              Submit
            </Button>
          </form>
        )}
        {authenticated && (
          <Typography variant="body1" sx={{ color: "#056608" }}>
            Welcome, {username}!
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default Form;
