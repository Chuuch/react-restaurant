import React from 'react';
import Chef3 from '../../utils/img/Chef3.jpg';
import Chef1 from '../../utils/img/Chef1.jpg';
import './About.css';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';

const About = () => {
	return (
		<div className="about-page">
			<header className="mt-5">
				<div className="container h-100 d-flex align-items-center justify-content-center">
					<h1 className="text-light">About</h1>
				</div>
			</header>

			<div className="container my-5 col-lg-6">
				<p>
					Welcome to our culinary haven, where the art of dining meets a
					symphony of diverse flavors. At our restaurant, we take pride in
					offering a gastronomic experience that transcends boundaries, blending
					the expertise of our talented chefs into a harmonious celebration of
					taste and culture. Whether you're drawn to the rustic charm of Chef
					Marco Russo's authentic Italian creations or enticed by the bold and
					eclectic fusion dishes crafted by Chef Marco Russo and Chef
					Hiroshi Tanaka, our menu is a testament to the dedication and passion
					each chef brings to the kitchen. 
				</p>
				
				<div className="row">
					<div className="col-lg-6">
						<img src={Chef3} alt="" className="img-fluid my-4" />
					</div>
					<div className="col-lg-6">
						<img src={Chef1} alt="" className="img-fluid my-4" />
					</div>
				</div>

				<p>
					Introducing Chef Hiroshi Tanaka(left), the culinary mastermind behind our
					Asian-inspired culinary experience. Born and raised in the vibrant
					streets of Tokyo, Chef Hiroshi brings a touch of authenticity and
					creativity to every dish he crafts. With a deep appreciation for the
					diverse flavors of Asian cuisine, Chef Hiroshi infuses his creations
					with a perfect balance of tradition and innovation. From meticulously
					prepared sushi rolls to savory noodle bowls, each plate showcases Chef
					Hiroshi's dedication to capturing the essence of his cultural roots.
					Join us on a gastronomic journey as Chef Hiroshi invites you to savor
					the richness of Asian flavors and experience the artistry of his
					culinary expertise.
				</p>
				<p>
					Introducing Chef Marco Russo(right), the culinary maestro at the helm of our
					Italian-inspired eatery. Originally from the picturesque hills of
					Tuscany, Chef Marco brings an authentic touch to every dish he
					creates. With a rich culinary background and a dedication to
					traditional Italian cooking, he crafts plates that are not only
					delicious but also tell the story of his heritage. From handmade pasta
					dishes to mouthwatering desserts, Chef Marco's creations showcase his
					passion for using the finest seasonal ingredients. Immerse yourself in
					the flavors of Italy as Chef Marco invites you to experience the
					warmth and authenticity of his homeland through his skillfully crafted
					menu.
				</p>
			</div>
			<div className="bg-dark text-light">
				<ImageGallery />
			</div>

			<div className="my-5">{/* <Reviews /> */}</div>
		</div>
	);
};

export default About;
