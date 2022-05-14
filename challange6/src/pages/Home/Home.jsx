import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FI from "../../assets/images/icon/fi.png";
import Sort from "../../assets/images/icon/fi_sort.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login", { replace: true });
  };
  return (
    <>
      <div className="container-fluid p-0">
        <Navbar logout={() => handleLogout()} />

        <Sidebar />

        {/* <!-- BAGIAN ISI CONTENT DI MULAI DARI SINI --> */}
        <section className="content-section ps-5 pe-4">
          <div className="row">
            <div className="col-lg-0" id="show-col-lg-0">
              <div className="adding-space" style={{ width: "300px" }}></div>
            </div>
            <div className="col-lg-12" id="show-col-lg-12">
              {/* <!-- -------------------------- -->
            <!-- COPY DISINI ISI CONTENTNYA -->
            <!-- -------------------------- --> */}

              <div className="container mt-5">
                <h2>Dashboard</h2>
                <h3>
                  <img src={FI} alt="" /> List Order
                </h3>
                <table id="datatable" className="table">
                  <thead>
                    <tr>
                      <th className="text-center">No</th>
                      <th>
                        User Email <img src={Sort} alt="" />
                      </th>
                      <th>
                        Car <img src={Sort} alt="" />
                      </th>
                      <th>
                        Start Rent <img src={Sort} alt="" />
                      </th>
                      <th>
                        Finish Rent <img src={Sort} alt="" />
                      </th>
                      <th>
                        Price <img src={Sort} alt="" />
                      </th>
                      <th>
                        Satus <img src={Sort} alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "white" }}>
                    <tr>
                      <td className="text-center">1</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">6</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">7</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">8</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">9</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td className="text-center">10</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bottom">
                  <div className="row">
                    <p className="limit col-lg-1 col-md-2">Limit</p>
                    <p className="tjtp col-lg-2 col-md-2">Jump to page</p>
                  </div>
                  <div className="row">
                    <div className="drop col-lg-1 col-md-2 col-12">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>10</option>
                        <option>10</option>
                        <option>20</option>
                        <option>40</option>
                      </select>
                    </div>
                    <div className="jtp col-lg-4 col-md-4 col-12">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option>1</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <button type="button" className="btn btn-go">
                        Go
                      </button>
                    </div>
                    <div className="paging col-lg-7 col-md-6 col-12 justify-content-end">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              9
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- BAGIAN ISI CONTENT BERAKHIR Di SINI -->
<!-- CONTENT SECTION END --> */}
      </div>
    </>
  );
}
