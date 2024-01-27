import React from 'react';
import './Home.css';
import home1 from '../../utils/img/home.jpg';
import relax from '../../utils/img/relax.jpg';
import { Link } from 'react-router-dom';
import pub from '../../utils/img/pub.jpg';
import { MenuBtn } from '../../components/Menu/MenuBtn';
import ContactInfo from '../../components/Contact/ContactInfo';

const Home = () => {
	return (
		<div className="home-page">
			<header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
							<h2 className="mb-0 text-dark fw-bold">Welcome to</h2>
							<h1 className="mb-5 text-dark fw-bold text-center text-sm-start">
								Chef's
							</h1>
							<MenuBtn />
						</div>
					</div>
				</div>
			</header>

			<div className="container my-5">
				<div className="row">
					<div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
						<img src={pub} alt="about img" className="img-fluid w-50" />
					</div>
					<div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
						<h2 className="fs-1 mb-5 text-uppercase fw-bold">About us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
							odio dolorum, inventore commodi modi consectetur illo iusto quidem
							cum officiis sed accusamus dignissimos sapiente repellat,
							veritatis aperiam adipisci suscipit labore.
						</p>
						<Link to="/about">
							<button type="button" className="btn btn-outline-warning btn-lg">
								More about us
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="menu-section py-5 text-align shadow">
				<div className="container d-flex flex-column align-items-center">
					<h2 className="fs-1 mb-5 text-uppercase text-warning fw-bold">
						Our Favorites
					</h2>
					<div className="row mb-5 w-100">
						<div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
							<h3 className="fs-2 mb-5 text-light">Food</h3>
							<ul className="px-0">
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-light">English Breakfast</p>
									<p className="fs-3 mx-2 text-warning fw-bold text-light">
										$12
									</p>
								</li>
								<li className="d-flex justify-content-between text-light">
									<p className="fs-3 mx-2">Spicy Beef</p>
									<p className="fs-3 mx-2 text-warning text-light fw-bold">
										$15
									</p>
								</li>
								<li className="d-flex justify-content-between">
									<p className="fs-3 mx-2 text-light">Spaghetti Bolognese</p>
									<p className="fs-3 mx-2 text-light fw-bold">$11</p>
								</li>
							</ul>
						</div>

						<div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
							<div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0 text-light">
								<h3 className="fs-2 mb-5">Drinks</h3>
								<ul className="px-0">
									<li className="d-flex justify-content-between text-light">
										<p className="fs-3 mx-2">Coffee</p>
										<p className="fs-3 mx-2 text-light fw-bold">£2</p>
									</li>
									<li className="d-flex justify-content-between">
										<p className="fs-3 mx-2">Juice</p>
										<p className="fs-3 mx-2 text-light fw-bold">£1</p>
									</li>
									<li className="d-flex justify-content-between">
										<p className="fs-3 mx-2">Spirits</p>
										<p className="fs-3 mx-2 text-light fw-bold">£5</p>
									</li>
								</ul>
							</div>
						</div>
						<div className='d-flex justify-content-center'>
							<MenuBtn />
						</div>
							
					</div>
				</div>

				{/* <ImageGallery /> */}

				<div className="bg-dark text-light py-5 shadow">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
								<ContactInfo />
							</div>
							<div className="col-lg-6 d-flex justify-content-center">
								<img src={relax} alt="" className="img-fluid w-50" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
