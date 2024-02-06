import { useContext, useState } from "react";
import { UserContext } from "../Components/ContextAPI/appContext";
// import { appContext } from "../Components/ContextAPI/myContext";

export default function Signup() {
  const { setUser } = useContext(UserContext);

  const [currentUsername, setCurrentUser] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const addUser = () => {
    setUser(() => {
      return {
        username: currentUsername,
        userEmail: currentEmail,
        password: currentPassword,
        auth: true,
      };
    });
  };

  return (
    <>
      <div className="modal fade rounded" tabIndex={-1} id="signup">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center bg-primary">
              <form
                className="p-4 m-auto bg-white text-center rounded "
                style={{ maxWidth: "25rem" }}
              >
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        name="username"
                        value={currentUsername}
                        onChange={(e) => setCurrentUser(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="userEmail"
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block mb-4"
                  onClick={addUser}
                  data-bs-dismiss="modal"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
