import {  Routes, Route } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Crypto_to_Cash/Home";
import Cash_Home from "./Components/Cash_to_Crypto/Cash_Home";
import Fiat_Loan from "./Components/Crypto_to_fiat_Loan/Fiat_Loan";
import Address from "./Components/Address/Address";
import Process from "./Components/Process/Process";
import Recipient_Details from "./Components/Recipient_Details/Recipient_Details";
import Recipient_Email from "./Components/Recipient_Details/Recipient_Email";
function App() {

  return (
    <Routes>
      <Route  element={<MainLayout/>}>
        <Route path="/*" element={<Home/>}/>
        <Route path="/Cash_to_crypto" element={<Cash_Home/>}/>
        <Route path="/Crypto_to_fiat_loan" element={<Fiat_Loan/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/Process" element={<Process/>}/>
        <Route path="/Recipient_Details" element={<Recipient_Details/>}/>
        <Route path="/Recipient_Email" element={<Recipient_Email/>}/>
      </Route>
      
      
    </Routes>
  )
}

export default App
