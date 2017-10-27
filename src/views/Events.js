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

class Events extends Component {
  constructor(props) {
        super(props);
   }
	componentDidMount(){
this.props.fetchData('https://api.cityswivel.com/list_events');
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
          <h1 className="App-title">Events</h1>
        </header>
	<ul style={styles.ul}>
		{this.props.items.map((item) => (
			<li style={styles.li} key={item.id}>
			<div>
				{item.event_title}
			</div>
			<div>
		<img style={styles.image} src={image_base + item.event_image} width="100" />
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
export default connect(mapStateToProps, mapDispatchToProps)(Events);

