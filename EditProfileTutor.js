//

import React, { useEffect, useState } from "react";
import { getSingleUser } from "../actions/users/users_action";

function EditProfileTutor() {
  const [userData, setUserData] = useState({});
  const [userId, setuserId] = useState();

  // useEffect(() => {
  //   const getUserData = async () => {
  //     const user = await getSingleUser(15);
  //     console.log(user);
  //     setUserData(user);
  //   };

  //   getUserData();
  // }, []);

  useEffect(() => {
    const getUserData = async () => {
      const user = await getSingleUser(userId);
      console.log(user);
      setUserData(user);
    };

    getUserData();
  }, [userId]);

  const handleSearchchange = (e) => {
    console.log("id update");
    setuserId(e.target.value);
  };
  // seperate function ...
  const handleFirstNameUpdate = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      firstName: e.target.value,
    });
  };

  const handleLastNameUpdate = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      lastName: e.target.value,
    });
  };
  const handleMobilenoUpdate = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      phone: e.target.value,
    });
  };

  const handlebirthDateUpdate = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      birthDate: e.target.value,
    });
  };
  const handlegenderUpdate = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      gender: e.target.value,
    });
  };

  // const handleUserUpdate = (e, var_name) => {
  //   console.log(e.target.value);
  //   setUserData({
  //     ...userData,
  //     [var_name]: e.target.value,
  //   });

  return (
    <div>
      <h2 className="text-center"> Edit Profile</h2>
      <div className="container rounded bg-white  mb-5">
        <div className="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-2">
              <img
                class="rounded-circle mt-5"
                width="100px"
                height="100px"
                src={userData.image ? userData.image : ""}
              />
              <span class="font-weight-bold">User</span>
              <span class="text-black-50">
                {userData.firstName ? userData.firstName : ""}
              </span>
            </div>
          </div>

          <div class="col-md-8 border-right">
            <div class="p-3 py-2">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>

              <div class="row mt-2">
                <div class="col-md-6">
                  <div>
                    <label class="labels">id</label>

                    <input onChange={handleSearchchange}></input>
                  </div>

                  <label class="labels">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="first name"
                    value={userData.firstName ? userData.firstName : ""}
                    onChange={(e) => handleFirstNameUpdate(e)}
                    // onChange={(event) => handleUserUpdate(event, "firstName")}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    value={userData.lastName ? userData.lastName : ""}
                    // onChange={(event) => handleUserUpdate(event, "lastName")}
                    onChange={(e) => handleLastNameUpdate(e)}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter phone number"
                    value={userData.phone ? userData.phone : ""}
                    onChange={(e) => handleMobilenoUpdate(e)}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Birth date</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                    value={userData.birthDate ? userData.birthDate : ""}
                    onChange={(e) => handlebirthDateUpdate(e)}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Gender</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter gender"
                    value={userData.gender ? userData.gender : ""}
                    onChange={(e) => handlegenderUpdate(e)}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">State</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Area</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 2"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email id"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Education</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="education"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="country"
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">State/Region</label>
                  <input type="text" class="form-control" placeholder="state" />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfileTutor;
