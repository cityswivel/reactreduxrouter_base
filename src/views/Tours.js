import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCounter } from '../actions';
import { fetchEvents } from '../actions';
import { itemsFetchData } from '../actions';


const styles = {
	ul : {
	listStyle: 'none'
	},
	li : {
	display: 'inline-block',
	width: '31%',
	verticalAlign: 'top',
	margin: '1%',
	},
	image : {
	width: '100%',
	borderRadius: '5px'
	}
}

class Tours extends Component {
  constructor(props) {
        super(props);
   }
	componentDidMount(){
this.props.fetchData('https://api.cityswivel.com/list_tours');
	}

  render() {
	if (this.props.hasErrored) {
		return ( <p>sorry there is error</p>);
	}
	        if (this.props.isLoading) {
            return (<p>Loading…</p>);
        }
const image_base = 'https://s3.us-east-2.amazonaws.com/cityswivel.images';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tours</h1>
        </header>
	<ul style={styles.ul}>
		{this.props.items.map((item) => (
			<li style={styles.li} key={item.id}>
			<div>
				{item.tour_name}
			</div>
			<div>
		<img style={styles.image} src={image_base + item.tour_image} width="100" />
			</div>
			</li>
		))}
	</ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tours);

