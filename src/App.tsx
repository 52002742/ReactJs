import axios from "axios";
import { Key, useState } from "react";

function App() {
  const [searchTxt, setSearchTxt] = useState<any>();
  const [results, setResults] = useState<any>();
  const [isShow, setIsShow] = useState<boolean>(false);

  const fetchData = async () => {
    const { data } = await axios.get("/country.json");
    setResults(data);
  };

  const handleSearch = (e: { target: { value: any } }) => {
    const textval = e.target.value;
    textval ? setIsShow(true) : setIsShow(false);
    setSearchTxt(textval);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={searchTxt}
              onChange={handleSearch}
              placeholder="Search"
              aria-label="Search"
            />
            <div className="list-group">
              {isShow && (
                <div className="text-center">
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
              )}
              {results?.length > 0 && (
                <>
                  {results.map((result: any, index: any) => {
                    <a
                      key={index}
                      href="#"
                      className="list-group-item list-group-item-action list-group-item-light">
                      result?.name
                    </a>;
                  })}
                </>
              )}
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default App;

