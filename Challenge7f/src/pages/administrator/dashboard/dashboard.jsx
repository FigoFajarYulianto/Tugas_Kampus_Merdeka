import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import sortIcon from '../../../assets/icons/Sort_Icon.png';
import Right_Icon from '../../../assets/icons/Right_Icon.png';


function Dashboard() {
    useEffect(() => {
        document.title = "Admin | Dashboard";
    }, []);
      
    return (
        <React.Fragment>

            <section className="content-section ps-5 pe-4">
                <div className="row">
                    <div class="col-xl-2 collapse show" id="collapseWidthExample">
                        <div class="adding-space" style={{width: '300px'}} />
                    </div>
                    <div className="col-lg" id="show-col-lg-12">

                        {/* <!-- LIST ORDER SECTION BEGIN --> */}
                        <section className="table-list-order mb-5">
                            <div className="sub-tree d-flex mt-3">
                                <Link to="/dashboard">
                                    <p className="fw-bold">Dashboard</p>
                                </Link>
                                <img src={Right_Icon} className="mx-2 my-1" height={17} alt="" />
                                <p>Dashboard</p>
                            </div>

                            <h2 className="fw-bold mb-4 mt-4">Dashboard</h2>
                            <h3 className="border-left-blue ps-2">list order</h3>

                            <table id="datatable" className="table bg-light">
                                <thead className="tabel-head">
                                    <tr>
                                        <th className="text-center">No</th>
                                        <th>User Email <img src={sortIcon} alt="" /></th>
                                        <th>Car <img src={sortIcon} alt="" /></th>
                                        <th>Start Rent <img src={sortIcon} alt="" /></th>
                                        <th>Finish Rent <img src={sortIcon} alt="" /></th>
                                        <th>Price <img src={sortIcon} alt="" /></th>
                                        <th>Satus <img src={sortIcon} alt="" /></th>
                                    </tr>
                                </thead>
                                <tbody>
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

                            <div className="row ">
                                <div className="col-lg-1 col-md-2 col">
                                    <p>Limit</p>
                                    <select className="form-select d-inline" aria-label="Default select example">
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="40">40</option>
                                    </select>
                                </div>

                                <div className="col-lg-2 col-md-4 col">
                                    <p>Jump to page</p>
                                    <select className="form-select d-inline" aria-label="Default select example">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>

                                    <button type="button" className="btn btn-primary btn-go">Go</button>
                                </div>
                                <div className="col-lg-9 col-md-6 col-sm-12 d-flex justify-content-end">
                                    <div className="page-number">
                                        <nav className="page-menu pt-4" aria-label="Page navigation example">
                                            <ul className="pagination">
                                            <li className="page-item">
                                                    <Link className="page-link" to="/dashboard" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </Link>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="/dashboard">1</a></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">...</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">9</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/dashboard" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>

                        </section>
                        {/* <!-- LIST ORDER SECTION END --> */}


                        {/* <!-- LIST CAR SECTION BEGIN --> */}
                        <section className="table-list-car mb-5">
                            <h3 className="border-left-blue ps-2">list car</h3>

                            <table id="datatable" className="table bg-light">
                                <thead className="tabel-head">
                                    <tr>
                                        <th className="text-center">No</th>
                                        <th>Name <img src={sortIcon} alt="" /></th>
                                        <th>Category <img src={sortIcon} alt="" /></th>
                                        <th>Price <img src={sortIcon} alt="" /></th>
                                        <th>Start Rent <img src={sortIcon} alt="" /></th>
                                        <th>Finish Rent <img src={sortIcon} alt="" /></th>
                                        <th>Created at <img src={sortIcon} alt="" /></th>
                                        <th>Updated at <img src={sortIcon} alt="" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">3</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">4</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">5</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">6</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">7</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">8</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">9</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">10</td>
                                        <td>Name</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Created at</td>
                                        <td>Updated at</td>
                                    </tr>

                                </tbody>
                            </table>

                            <div className="row mb-5">
                                <div className="col-lg-1 col-md-2 col">
                                    <p>Limit</p>
                                    <select className="form-select d-inline" aria-label="Default select example">
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="40">40</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col">
                                    <p>Jump to page</p>
                                    <select className="form-select d-inline" aria-label="Default select example">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>

                                    <button type="button" className="btn btn-primary btn-go">Go</button>
                                </div>
                                <div className="col-lg-9 col-md-6 col-sm-12 d-flex justify-content-end">
                                    <div className="page-number">
                                        <nav className="page-menu pt-4" aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" to="/dashboard" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </Link>
                                                </li>
                                                <li className="page-item active"><a className="page-link" href="/dashboard">1</a></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">...</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/dashboard">9</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/dashboard" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- LIST CAR SECTION END --> */}

                    </div>
                </div>
            </section>
            
        </React.Fragment>
    );
}

export default Dashboard;
