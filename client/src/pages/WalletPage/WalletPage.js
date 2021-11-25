import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MobileHeader from '../../components/Header/MobileHeader/MobileHeader';
// import Button from '../../components/Button/Button';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectToken } from '../../redux/user/userSelectors';
import { accountDecrypted } from '../../wallet/wallet';


const WalletPage = ({ currentUser }) => {

  return (
    <Fragment>
      <MobileHeader>
        <div></div>
        <h3 className="heading-3">Wallet</h3>
        <div></div>
      </MobileHeader>
      <main className="wallet-page">
        <h1>My public wallet address:</h1>
        {currentUser.ethAccPublic}
      </main>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  token: selectToken,
});
export default connect(mapStateToProps)(WalletPage);
