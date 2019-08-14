import React from 'react';
import '../../App.scss';
import './data-vis.modules.scss';

export class Space extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: [],
			id: []
		};
	}

	componentDidMount() {
		fetch('https://images-api.nasa.gov/search?q=nebula')
			.then(results => {
				return results.json();
			})
			.then(response => {
				const nebulas = response.collection.items;
				console.log(nebulas);

				for (var i = 0; i < nebulas.length; i++) {
					// console.log(nebulas[i]);

					const nebulasList = nebulas[i];

					for (var j = 0; j < nebulasList.links.length; j++) {
						const nebulaURLs = nebulasList.links[j].href;
						// console.log(nebulaURLs);

						this.setState({
							url: nebulaURLs
						});
					}

					for (var k = 0; k < nebulasList.data.length; k++) {
						const nebulaID = nebulasList.data[k].nasa_id;
						// console.log(nebulaID);

						this.setState({
							id: nebulaID
						});
					}
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		return <div>{<img src={this.state.url} alt={this.state.id} />}</div>;
	}
}
