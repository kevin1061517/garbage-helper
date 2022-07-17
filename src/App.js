import logo from './logo.svg';
import './App.css';
import GoogleLogin from "react-google-login";

function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get('flag');
  console.log(token);
  if(token === 'success') {
    alert('success')
  }

  return(
    <div className="container">
     <div className="form-box">
       <div className="header-form">
         <h4 className="text-primary text-center">
           <i className="fa fa-user-circle" style={{fontSize:"110px"}}></i>
           <p>Garbage Collection</p>
          </h4>
         <div className="image">
         </div>
       </div>
       <div className="body-form">
        <form>
           <div className="input-group mb-3">
          <div className="input-group-prepend">
          <span className="input-group-text"><i class="fa fa-user"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="input-group mb-3">
          <div className="input-group-prepend">
          <span className="input-group-text"><i class="fa fa-lock"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="Password" />
          </div>
          <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
          <div className="message">
          <div><input type="checkbox" /> Remember ME</div>
          <div><a href="#">Forgot your password</a></div>
          </div>
        </form>
        <div className="social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter-square"></i></a>
          <GoogleLogin
              style={{marginTop: 0}}
              clientId="861471582134-rssa6aa8hl6s31a5effldrgqd5pkb1qv.apps.googleusercontent.com"
              buttonText="Google 登入"
              onSuccess={onSignIn}
              onFailure={getFailure}
              cookiePolicy={'single_host_origin'}
            />
          {/* <i className="fab fa-google"></i>   */}
        </div>
      </div>
    </div>
    </div>   
 );
}

function getFailure(response) {
  console.log('getFailure');
  console.log(response);
}

function onSignIn(response) {
  console.log('onSignIn');
  console.log(response);
  alert(response)
}

export default App;
