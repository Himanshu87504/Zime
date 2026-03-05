
import Landingpage from "./components/Landingpage";
import Sales from "./components/complexpage/Sales";
import Break from "./components/complexpage/Break";
import CombinedPlaybookPage from "./components/Proccesingpage/CombinedPlaybookPage";
import DataProcess from "./components/Proccesingpage/DataProcess";
import TechProcess from "./components/Proccesingpage/TechProcess";
import Firstpage from "./components/FooterPages/Firstpage";
export default function Home() {
  return (
    <>
      <Landingpage />
      <Sales />
      <Break />
      <CombinedPlaybookPage />
      <DataProcess />
      <TechProcess />
      <Firstpage />
    </>
  );
}
