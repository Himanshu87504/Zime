
import Landingpage from "./components/Landingpage";
import Sales from "./components/complexpage/Sales";
import Break from "./components/complexpage/Break";
import CombinedPlaybookPage from "./components/Proccesingpage/CombinedPlaybookPage";
export default function Home() {
  return (
    <>
      <Landingpage />
      <Sales />
      <Break />
      <CombinedPlaybookPage />

    </>
  );
}
