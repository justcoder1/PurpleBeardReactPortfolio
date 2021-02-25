import React from 'react';
import dp from '../img/Justin.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../common/social';

const Home = () => {
	return (
		<main className='contents'>
			<img src={dp} alt='justin heath' />
			<div id='typeEffect'>
				<ReactTypingEffect text={'Justin Heath'} />
			</div>
			<Social />
		</main>
	);
};

export default Home;
