import { useContext, useEffect, useState } from "react";
import { appContext } from "./ContextAPI/myContext";

export default function Profile({cardCount}) {
  const { user, setUser } = useContext(appContext);

  return (
    <div className="modal fade" tabIndex={-1} id="profile">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-2 ">
        <i
          className="fa-solid fa-xmark btn-close fs-3 p-3"
          data-bs-dismiss="modal"
        />
         <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              className="rounded-circle w-25 p-3 "
              alt="profile-img"
              loading="lazy"
              style={{margin:"auto"}}
            />
          <div className="modal-body text-center text-white bg-primary rounded">
            {user.auth && (
              <div className="p-3">
                <h4>Username : {user.username}</h4>
                <h4>Email : {user.userEmail}</h4>
              </div>
            )}
            <h5>You have total {cardCount} cards</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
