import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import ProtectedRoute from './protectedRoute';
import Layout from '../layout/layout';
import Signup from '../components/Signup';
import MyProfile from '../components/Profile/MyProfile';
import ChangePassword from '../components/Profile/ChangePassword';
import ChangeEmail from '../components/Profile/ChangeTransactionPassword';
import Support from '../components/Profile/Support';
import CryptoWalletChange from '../components/Profile/CryptoWalletChange';
import ChangeProfilePic from '../components/Profile/ChangeProfilePic';
import SupportResponse from '../components/Profile/SupportResponse';
import TopUpAuto from '../components/WalletTopUp/ToUpAuto';
import TopUpAutoHistory from '../components/WalletTopUp/TopUpAutoHistory';
import IncomeWithdraw from '../components/Withdraw/IncomeWithdraw';
import WithdrawHistory from '../components/Withdraw/WithdrawHistory';
import ChangeTransactionPassword from '../components/Profile/ChangeTransactionPassword';
import Income from '../components/Income/Income';
import StakingPackage from '../components/Package/StakingPackage';
import PackageHistory from '../components/Package/PackageHistory';
import Direct from '../components/Community/Direct';
import Level from '../components/Community/Level';
import AccountSummary from '../components/Withdraw/AccountSummary';
import TopUpManualHistory from '../components/WalletTopUp/TopUpManualHistory';
import FundSummary from '../components/WalletTopUp/FundSummary';
import TopUpManual from '../components/WalletTopUp/TopUpManual';
import P2PTransfer from '../components/Transfer/P2PTransfer';
import P2PTransferHistory from '../components/Transfer/P2PTransferHistory';
import IncomeToFund from '../components/Transfer/IncomeToFund';
import IncomeToFundHistory from '../components/Transfer/IncomeToFundHistory';
import RewardReport from '../components/ClubAndReward/RewardReport';
import ClubReport from '../components/ClubAndReward/ClubReport';
import React from 'react';

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<>...</>}>

                <Layout />
              </React.Suspense>
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="change-transaction-password" element={<ChangeTransactionPassword />} />
          <Route path="support" element={<Support />} />
          <Route path="crypto-wallet-change" element={<CryptoWalletChange />} />
          <Route path="support-response" element={<SupportResponse />} />
          <Route path="change-profile-pic" element={<ChangeProfilePic />} />
          <Route path='top-up-auto' element={<TopUpAuto />} />
          <Route path='top-up-auto-history' element={<TopUpAutoHistory />} />
          <Route path='top-up-manual' element={<TopUpManual />} />


          <Route path='top-up-manual-history' element={<TopUpManualHistory />} />
          <Route path='fund-summary' element={<FundSummary />} />
          <Route path='income-withdraw' element={<IncomeWithdraw />} />
          <Route path='withdraw-history' element={<WithdrawHistory />} />

          <Route path='p2p-transfer' element={<P2PTransfer />} />
          <Route path='p2p-transfer-history' element={<P2PTransferHistory />} />
          <Route path='income-to-fund-transfer' element={<IncomeToFund />} />
          <Route path='income-to-fund-transfer-history' element={<IncomeToFundHistory />} />

          <Route path='income/report/trading-profit' element={<Income />} />
          <Route path='income/report/trading-profit-income' element={<Income />} />
          <Route path='income/report/direct-income' element={<Income />} />
          <Route path='income/report/level-income' element={<Income />} />
          <Route path='income/report/reward-income' element={<Income />} />
          <Route path='income/report/royalty-income' element={<Income />} />
          <Route path='income/report/club-income' element={<Income />} />

          <Route path='reward-report' element={<RewardReport />} />
          <Route path='club-report' element={<ClubReport />} />

          <Route path='staking-package' element={<StakingPackage />} />
          <Route path='package-history' element={<PackageHistory />} />
          <Route path='community/direct-referral' element={<Direct />} />
          <Route path='community/level-team' element={<Level />} />
          <Route path='account-summary' element={<AccountSummary />} />




        </Route>
      </Routes>
    </Router>



  );
};

export default Routing;
