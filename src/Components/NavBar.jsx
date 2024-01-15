import { appContext } from "./ContextAPI/myContext";
import { useContext} from "react";



export default function NavBar() {
  const { user, setUser } = useContext(appContext);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand mt-2 mt-lg-0 d-flex">
          <i
              className="fa-solid fa-circle-plus p-2"
              style={{ color: "#0905fd", fontSize: "30px" }}
              data-bs-toggle="modal"
               data-bs-target="#inputCard"
            />
          <div className=" p-2">Create Custom flashCards</div>
          
        </div>

        <div className="d-none d-sm-block btn-group dropstart ">
          <button className="btn dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              className="rounded-circle"
              alt="profile-img"
              loading="lazy"
              height="35"
            />
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li><a className="dropdown-item active" href="/profile" data-bs-toggle="modal" data-bs-target="#profile">Profile</a></li>
            <li><a className="dropdown-item" href="#">Setting</a></li>
            {
              (!user.auth) && 
              <li><a className="dropdown-item" href="/signup" data-bs-toggle="modal" data-bs-target="#signup" >SignUp</a></li>
            }
          </ul>
        </div>
      </div>
    </nav>
   
    
</>

  )
}
