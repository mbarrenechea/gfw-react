'use strict';
import { connect } from 'react-redux';
import MapView from '../components/mapView';


const mapStateToProps = (state) => {
	return {
		routing: state.routing
		// repositories : state.repositories.list
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// init: () => (dispatch(init()))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MapView);
