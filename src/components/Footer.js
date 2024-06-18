import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
	return (
		<Container>
			<footer className='footer-container'>
				<ul className='footer-logo'>
					<li>
						<img
							src='Logo.svg'
							alt='footer-logo'
						/>
					</li>
				</ul>

				<ul className='footer-content1'>
					<li>Footer Navigation</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/About'>About</Link>
					</li>
					<li>
						<Link to='/Menu'>Menu</Link>
					</li>
					<li>
						<Link to='/booking'>Reservations</Link>
					</li>
				</ul>

				<ul className='footer-content2'>
					<li>Contact</li>
					<li>
						<Link to='https://www.google.com/maps/place/Little+Lemon/@53.341481,-6.2618191,17z/data=!3m1!4b1!4m6!3m5!1s0x48670f886b1dd297:0xf1b04af0735a4553!8m2!3d53.3414778!4d-6.2592442!16s%2Fg%2F11kjh5cxpm?entry=ttu'>
							19/20 Royal Hibernian Way, Duke Lane Upper, Dublin 2 Dublin 2,
							Dublin, D02 K772, Ireland
						</Link>
					</li>
					<li>
						<Link>Phone: +35319058777</Link>
					</li>
					<li>
						<Link>contact@littlelemon.ie</Link>
					</li>
				</ul>

				<ul className='footer-content3'>
					<li>Social Media Links</li>
					<li>
						&nbsp;&nbsp;
						<Link
							to='https://www.facebook.com/LittleLemonRHW/'
							target='_blank'>
							<img
								src='facebook.png'
								alt='facebook'
								width={35}
							/>
						</Link>
					</li>
					<li>
						&nbsp;&nbsp;
						<Link
							to='https://twitter.com/LittleLemonRHW/'
							target='_blank'>
							<img
								src='instagram.png'
								alt='instagram'
								width={37}
							/>
						</Link>
					</li>
					<li>
						&nbsp;&nbsp;
						<Link
							to='https://www.instagram.com/LittleLemonRHW/'
							target='_blank'>
							<img
								src='twitter.png'
								alt='twitter'
								width={35}
							/>
						</Link>
					</li>
				</ul>

				<div className='copyright'>
					<hr />
					<p>&copy; 2024 - Little Lemon Website</p>
				</div>
			</footer>
		</Container>
	);
}
