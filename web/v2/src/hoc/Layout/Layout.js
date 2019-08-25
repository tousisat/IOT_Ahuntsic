import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./Layout.scss";

import Header from "../../containers/shared/Header/Header";
import NavBar from "../../containers/shared/NavBar/NavBar";
import Footer from "../../containers/shared/Footer/Footer";
import Toaster from "../../components/Toaster/Toaster";
import Loader from "../../components/Loader/Loader";

const Layout = props => {
  const {
    isToasterShow,
    toasterMessage,
    toasterStatus,
    hideToaster,
    isLoading,
    loadingMessage
  } = props;

  return (
    <div className="layout">
      <Header />
      <NavBar />
      <main>{props.children}</main>
      <Footer />
      <Toaster
        show={isToasterShow}
        message={toasterMessage}
        status={toasterStatus}
        onClose={hideToaster}
      />
      <Loader
        className="layout_loader"
        show={isLoading}
        text={loadingMessage}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isToasterShow: state.layout.isToasterShow,
    toasterMessage: state.layout.toasterMessage,
    toasterStatus: state.layout.toasterStatus,
    isLoading: state.layout.isLoading,
    loadingMessage: state.layout.loadingMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideToaster: () => dispatch(actions.hideToaster())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
