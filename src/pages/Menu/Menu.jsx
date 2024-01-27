import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import avocado_toast from '../../utils/img/avocado_toast.jpg';
import lunch_img from '../../utils/img/lunch_img.jpg';
import dinner_img from '../../utils/img/dinner_img.jpg';
import dessert_img from '../../utils/img/dessert_img.jpg';

const breakfast = [
	{
		id: 1,
		name: 'English Breakfast',
		description:
			'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
		price: '$12',
	},
	{
		id: 2,
		name: 'Avocado Toast',
		description: 'poached egg, avocado, spinach, tomatoes, bread',
		price: '$8',
	},
	{
		id: 3,
		name: 'Burrito',
		description: 'tortilla, egg, cheese, potatoes, pork meat',
		price: '$11',
	},
];
const lunch = [
	{
		id: 1,
		name: 'Caesar Salad',
		description: 'chicken breast, romaine lettuce, croutons, parmesan',
		price: '$15',
	},
	{
		id: 2,
		name: 'Sushi',
		description: 'rice, salmon, wasabi, shrimp, cucumber',
		price: '$14',
	},
	{
		id: 3,
		name: 'Pizza',
		description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
		price: '$12',
	},
];

const dinner = [
	{
		id: 1,
		name: 'Spicy Beef',
		description:
			'spicy beef, broccoli, carrots, cherry tomatoes, cheese sauce, spices',
		price: '$17',
	},
	{
		id: 2,
		name: 'Spaghetti Bolognese',
		description: 'onion, carrot, celery, minced meat, spaghetti, parmesan',
		price: '$15',
	},
	{
		id: 3,
		name: 'Chickpea Curry',
		description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
		price: '$12',
	},
];

const dessert = [
	{
		id: 1,
		name: 'Lemon Cake',
		description: 'flour, sugar, baking powder, lemon',
		price: '$9',
	},
	{
		id: 2,
		name: 'Cinnamon Rolls',
		description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
		price: '$11',
	},
	{
		id: 3,
		name: 'Vegan Pancakes',
		description: 'flour, sugar, baking powder, soya milk, blueberries',
		price: '$8',
	},
];

const Menu = () => {
	return (
		<div className="menu-page">
			<header className="mt-5">
				<div className="container h-100 d-flex align-items-center justify-content-center">
					<h1 className="text-light">Menu</h1>
				</div>
			</header>

			<div className="breakfast my-5">
				<div className="container">
					<h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-warning">
						Breakfast
					</h2>
					<div className="row flex-column-reverse flex-lg-row">
						<div className="col-lg-6 d-flex justify-content-center">
							<img
								src={avocado_toast}
								alt=""
								className="img-fluid w-75 mt-4 mt-lg-0"
							/>
						</div>
						<div className="col-lg-6 d-flex flex-column justify-content-around">
							{breakfast.map((breakfast) => (
								<div key={breakfast.id}>
									<Card className="border-0">
										<CardBody>
											<CardTitle className="text-center fs-3">
												{breakfast.name}
											</CardTitle>
											<CardText className="text-center fs-5">
												{breakfast.description}
											</CardText>
											<CardText className="text-center fs-3 fw-bold text-warning">
												{breakfast.price}
											</CardText>
										</CardBody>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="lunch bg-dark text-light py-5">
				<div className="container">
					<h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-warning">
						Lunch
					</h2>
					<div className="row">
						<div className="col-lg-6 d-flex flex-column justify-content-around">
							{lunch.map((lunch) => (
								<div key={lunch.id}>
									<Card className="border-0 bg-dark text-light">
										<CardTitle className="text-center fs-3">
											{lunch.name}
										</CardTitle>
										<CardText className="text-center fs-5">
											{lunch.description}
										</CardText>
										<CardText className="text-center fs-3 fw-bold text-warning">
											{lunch.price}
										</CardText>
									</Card>
								</div>
							))}
						</div>
						<div className="col-lg-6 d-flex justify-content-center">
							<img
								src={lunch_img}
								alt="lunch img"
								className="img-fluid w-75 mt-4 mt-lg-0"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="dinner my-5">
				<div className="container">
					<h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-warning">
						Dinner
					</h2>
					<div className="row flex-column-reverse flex-lg-row">
						<div className="col-lg-6 d-flex justify-content-center">
							<img
								src={dinner_img}
								alt="dinner img"
								className="img-fluid w-75 mt-4 mg-lg-0"
							/>
						</div>
						<div className="col-lg-6 d-flex flex-column justify-content-around">
							{dinner.map((dinner) => (
								<div key={dinner.id}>
									<Card className="border-0">
										<CardBody>
											<CardTitle className="text-center fs-3">
												{dinner.name}
											</CardTitle>
											<CardText className="text-center fs-3">
												{dinner.description}
											</CardText>
											<CardText className="text-center fs-3 fw-bold text-warning">
												{dinner.price}
											</CardText>
										</CardBody>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="dessert bg-dark text-light py-5">
				<div className="container">
					<h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-warning">
						Dessert
					</h2>
					<div className="row">
						<div className="col-lg-6 d-flex flex-column justify-content-around">
							{dessert.map((dessert) => (
								<div key={dessert.id}>
									<Card className="border-0 bg-dark text-light">
										<CardBody>
											<CardTitle className="text-center fs-3">
												{dessert.name}
											</CardTitle>
											<CardText className="text-center fs-5">
												{dessert.name}
											</CardText>
											<CardText className="text-center fs-5">
												{dessert.description}
											</CardText>
											<CardText className="text-center fs-3 fw-bold text-warning">
												{dessert.price}
											</CardText>
										</CardBody>
									</Card>
								</div>
							))}
						</div>
						<div className="col-lg-6 d-flex justify-content-center">
							<img
								src={dessert_img}
								alt="dessert"
								className="img-fluid w-75 mt-4 mt-lg-0"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
