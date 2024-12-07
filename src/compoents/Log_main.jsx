import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Log_main() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    const credential = localStorage.getItem("user");

    if (credential != null) {
      navigate("/admin");

    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    // alert("HII")
    // console.log("sadjas")
    if (user === "admin" && password === "admin") {

      localStorage.setItem("user", user);
      localStorage.setItem("password", password);
      navigate("/admin")
      // alert("okay..")
    } else {
      // alert("Invalid Credential")
      Swal.fire("Invalid Credential !!!");
      setUser("")
      setPassword("")
    }

  }

  return (
    <div>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <!-- Username input --> */}
                <div data-mdb-input-init class="form-outline mb-4">
                  <label id='user' class="form-label" for="form1Example13" >USERNAME</label>
                  <input value={user} onChange={(e) => setUser(e.target.value)} type="text" id="form1Example13" class="form-control form-control-lg" />
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init class="form-outline mb-4">
                  <label id='password' class="form-label" for="form1Example23" >PASSWORD</label>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="form1Example23" class="form-control form-control-lg" />
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */}

                <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" onClick={(e) => handleLogin(e)}>Sign in</button>



                {/* <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div> */}

                {/* <a data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" style={{backgroundColor:"#3b5998" }} href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a> */}

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
