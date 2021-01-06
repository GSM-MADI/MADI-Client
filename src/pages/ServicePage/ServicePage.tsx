import { Service } from "components";
import PageTemplate from "pages/Template/PageTemplate";
import React from "react";

const AppListDummyData = [
  {
    name: "GSM-SPACE",
    image:
      "https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9A%8C%EC%83%89-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C-%EC%9E%90-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B2%A1%ED%84%B0.jpg?ver=6",
    redirect_url: "http://gsm-space.com/loginCallBack",
    approved_domain: ["gsm-space.com", "gsmspace.org"],
    authority: ["name", "gender", "std_no"],
    client_id: "147483647",
    client_secret: "adsfasd-asdasd56-a4ds891f53q",
  },
  {
    name: "Olio",
    image:
      "https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9A%8C%EC%83%89-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C-%EC%9E%90-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B2%A1%ED%84%B0.jpg?ver=6",
    redirect_url: "http://oilo-gsm.com/loginCallBack",
    approved_domain: ["olio-gsm.com", "gsmOlio.org"],
    authority: ["name", "std_no"],
    client_id: "147443577",
    client_secret: "adsfasd-asdasd56-asdsd32q333q",
  },
  {
    name: "MADI",
    image:
      "https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9A%8C%EC%83%89-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C-%EC%9E%90-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B2%A1%ED%84%B0.jpg?ver=6",
    redirect_url: "http://oilo-gsm.com/loginCallBack",
    approved_domain: ["olio-gsm.com", "gsmOlio.org"],
    authority: ["name", "std_no"],
    client_id: "147443577",
    client_secret: "adsfasd-asdasd56-asdsd32q333q",
  },
  {
    name: "WoungSub",
    image:
      "https://us.123rf.com/450wm/thesomeday123/thesomeday1231709/thesomeday123170900021/85622928-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9A%8C%EC%83%89-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C-%EC%9E%90-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B2%A1%ED%84%B0.jpg?ver=6",
    redirect_url: "http://oilo-gsm.com/loginCallBack",
    approved_domain: ["olio-gsm.com", "gsmOlio.org"],
    authority: ["name", "std_no"],
    client_id: "147443577",
    client_secret: "adsfasd-asdasd56-asdsd32q333q",
  },
];

const ServicePage: React.FC = () => {
  return (
    <PageTemplate>
      <Service AppData={AppListDummyData} />
    </PageTemplate>
  );
};

export default ServicePage;