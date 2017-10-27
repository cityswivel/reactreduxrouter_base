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
	display: 'inline-block'
	}
}

class Test extends Component {
  constructor(props) {
        super(props);
   }
	componentDidMount(){
this.props.fetchData('https://api.cityswivel.com/list_tourpoints');
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
          <h1 className="App-title">Test</h1>
        </header>
        <p className="App-intro">
        This is the test page.
        </p>
        <div><Link to='/'>HOME</Link></div>
	<ul style={styles.ul}>
		{this.props.items.map((item) => (
			<li style={styles.li} key={item.id}>
			<div>
				{item.tp_name}
			</div>
			<div>
		<img src={image_base + item.tp_image} width="100" />
			</div>
			</li>
		))}
	</ul>
      </div>
    );
  }
}

//function mapDispatchToProps(dispatch) {
//  return { actions: bindActionCreators(addCounter,fetchEvents, dispatch) }
//}

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
export default connect(mapStateToProps, mapDispatchToProps)(Test);
//export default connect(mapDispatchToProps)(Test);

