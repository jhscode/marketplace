import React, { Fragment, Component } from 'react';
import Header from './Header';

class Home extends Component {
	render() {
		return (
				<Fragment>
					<Header></Header>
					<h2>Home</h2>
					<p>Show Ads</p>
				</Fragment>
		);
	}
}

export default Home;