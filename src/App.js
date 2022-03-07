import React from "react";
import UserInfoRu from "./UsersInfo/UserInfoRu";
import UserInfoKg from "./UsersInfo/UserInfoKg";
import FirstPointKG from "./FirstPoint/FirstPointKG";
import FirstPointRu from "./FirstPoint/FirstPointRu";
import PublicOfferRu from "./PublicOffer/PublicOfferRu";
import PublicOfferKg from "./PublicOffer/PublicOfferKg";
import PersonalInfoAndSubjectRu from "./PersonalInfoAndSubject/PersonalInfoAndSubjectRu";
import PersonalInfoAndSubjectKg from "./PersonalInfoAndSubject/PersonalInfoAndSubjectKg";
import PublicCreditContractRu from "./PublicCreditContract/PublicCreditContractRu";
import PublicCreditContractKg from "./PublicCreditContract/PublicCreditContractKg";
import MobileAppRulesRu from "./MobileApplication/MobileAppRulesRu";
import MobileAppRulesKg from "./MobileApplication/MobileAppRulesKg";

function App() {
  return (
    <div className="App">
        <UserInfoRu/>
        <UserInfoKg/>
        <FirstPointRu/>
        <FirstPointKG/>
        <PublicOfferRu/>
        <PublicOfferKg/>
        <PersonalInfoAndSubjectRu/>
        <PersonalInfoAndSubjectKg/>
        <PublicCreditContractRu/>
        <PublicCreditContractKg/>
        <MobileAppRulesRu/>
        <MobileAppRulesKg/>
    </div>
  );
}

export default App;
