import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://thumbs.dreamstime.com/b/gestion-des-t%C3%A2ches-de-projet-et-outils-planification-du-temps-efficaces-ic%C3%B4ne-d%C3%A9veloppement-illustration-vectorielle-d-plan-234012415.jpg"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  placeholder="User"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-dark px-5 mb-5 w-100">
                  Login
                </button>
              </div>
              <div id="email" className="form-text text-center mb-5 text-dark">
                 By{" "}
                <a href="#" className="text-dark fw-bold">
                  {" "}
                  Abdessamad
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
