import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import { StyledMain } from "./SignIn";
import { useSelector } from "react-redux";
import Account from "../features/Dashboard/Account";
import HeaderDashboard from "../features/Dashboard/Header";
import { useEffect } from "react";
import { sessionStatus } from "../App/selectors";
import { useNavigate } from "react-router-dom";
import { accountsList } from "../App/selectors";

function Dashboard() {
  // const user = useSelector(userdata);
  const navigate = useNavigate();
  const status = useSelector(sessionStatus);

  useEffect(() => {
    if (status !== "success") {
      navigate("/signin");
    }
    return;
  });

  const accounts = useSelector(accountsList);

  const amountToEuro = (amount) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
  }

  return (
    <>
      <Header></Header>
      <StyledMain>
        <HeaderDashboard></HeaderDashboard>
        <h2 className="sr-only">Accounts</h2>

        {accounts.map((account, index) => (
          <Account
            accountNumber={account.accountNumber}
            accountAmount={amountToEuro(account.accountAmount)}
            accountTransactions={account.accountTransactions}
            description="Available Balance"
            key={index}
          ></Account>
        ))}
      </StyledMain>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
