import React from 'react';
import {
	Card,
	CardBody,
	CardText,
	CardFooter,
	CardTitle,
} from 'react-bootstrap';
import './Reviews.css';
import person1 from '../../utils/img/person1.jpg';
import Person2 from '../../utils/img/Person2.jpg';
import person3 from '../../utils/img/person3.jpg';
import Person4 from '../../utils/img/Person4.jpg';

export function Reviews() {
	return (
		<div className="reviews-section container">
			<h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
			<div className="row g-4">
				<div className="col-lg-6">
					<Card className="h-100 shadow">
						<CardBody>
							<div className="p-4">
								<CardText>
									This restaurant is a true symphony of flavors. From the first
									bite to the last, I was captivated by the artistry of the
									chefs. Chef Marco Russo's Italian dishes were a culinary
									masterpiece, and Chef Diego Hernandez's fusion creations added
									a modern twist that was both exciting and satisfying. The
									attentive staff ensured a seamless dining experience, and the
									ambiance was lively yet intimate. It's evident that the chefs
									here are passionate about their craft, and that passion is
									translated into a dining experience that is nothing short of
									extraordinary. A must-visit for food enthusiasts!
								</CardText>
							</div>
						</CardBody>
						<CardFooter className="d-flex align-items-center">
							<img
								src={person1}
								className="img-fluid rounded-circle mx-3 shadow"
								alt=""
							/>
							<CardTitle className="text-warning">John Mike</CardTitle>
						</CardFooter>
					</Card>
				</div>
				<div className="col-lg-6">
					<Card className="h-100 shadow">
						<CardBody>
							<div className="p-4">
								<CardText>
									I had the most delightful evening at this restaurant, savoring
									the incredible flavors of Chef Marco Russo's Italian
									creations. The pasta dishes were a revelation—authentic,
									flavorful, and cooked to perfection. The ambiance was warm and
									inviting, making it a perfect spot for a romantic dinner. The
									attention to detail in both the presentation and service was
									exceptional. I left feeling like I had just taken a culinary
									journey through the heart of Tuscany. Highly recommended for
									anyone seeking an authentic taste of Italy!
								</CardText>
							</div>
						</CardBody>
						<CardFooter className="d-flex align-items-center">
							<img
								src={Person2}
								className="img-fluid rounded-circle mx-3 shadow"
								alt=""
							/>
							<CardTitle className="text-warning">Maria Cruz</CardTitle>
						</CardFooter>
					</Card>
				</div>
				<div className="col-lg-6">
					<Card className="h-100 shadow">
						<CardBody>
							<div className="p-4">
								<CardText>
									An absolute gem for lovers of Asian cuisine! Chef Hiroshi
									Tanaka's culinary prowess shines through in every dish. The
									sushi was fresh and expertly crafted, and the noodle bowls
									were a comforting delight. The ambiance was serene, providing
									a perfect backdrop for an evening of delightful dining. The
									staff was attentive and knowledgeable, enhancing the overall
									dining experience. I'll definitely be returning to explore
									more of the rich and diverse flavors Chef Hiroshi has to
									offer.
								</CardText>
							</div>
						</CardBody>
						<CardFooter className="d-flex align-items-center">
							<img
								src={person3}
								className="img-fluid rounded-circle mx-3 shadow"
								alt=""
							/>
							<CardTitle className="text-warning">Anna Gold</CardTitle>
						</CardFooter>
					</Card>
				</div>
				<div className="col-lg-6">
					<Card className="h-100 shadow">
						<CardBody>
							<div className="p-4">
								<CardText>
									Chef Marco Russo  and Chef Hiroshi Tanaka have truly
									created something special here. The fusion dishes were a
									delightful surprise, combining unique flavors and textures in
									ways I hadn't experienced before. The taco creations were a
									standout, and the seafood dishes were a testament to Chef
									Marco's culinary ingenuity. The restaurant's modern yet cozy
									atmosphere added to the overall experience. If you're looking
									for a dining adventure that pushes culinary boundaries, this
									is the place to be!
								</CardText>
							</div>
						</CardBody>
						<CardFooter className="d-flex align-items-center">
							<img
								src={Person4}
								className="img-fluid rounded-circle mx-3 shadow"
								alt=""
							/>
							<CardTitle className="text-warning">Nick Burn</CardTitle>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
