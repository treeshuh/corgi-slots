import React from "react";
import Slots from "../components/Slots";
import { connect } from "react-redux";
import { fetchReels } from "../actions";

class SlotsContainer extends React.Component {
 	componentWillMount() {
 		this.props.fetchReels();
 	}
  	// render
	render() {
	    return (
	      	<Slots {...this.props}/>
	    );
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchReels: () => dispatch(fetchReels(ownProps.id))
});

const mapStateToProps = state => {
	return {
		reels: state.reels.reels
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SlotsContainer)