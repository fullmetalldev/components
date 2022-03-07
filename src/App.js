import React from "react";
import UserInfoRu from "./UsersInfo/UserInfoRu";
import UserInfoKg from "./UsersInfo/UserInfoKg";
import FirstPointKG from "./FirstPoint/FirstPointKG";
import FirstPointRu from "./FirstPoint/FirstPointRu";
import PublicOfferRu from "./PublicOffer/PublicOfferRu";
import PublicOfferKg from "./PublicOffer/PublicOfferKg";
import PersonalInfoAndSubjectRu from "./PersonalInfoAndSubject/PersonalInfoAndSubjectRu";
import PersonalInfoAndSubjectKg from "./PersonalInfoAndSubject/PersonalInfoAndSubjectKg";

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
    </div>
  );
}

export default App;
