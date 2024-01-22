import "../App.css";
import Content from "./Content";
import Header from "./Header";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import StartPage from "./StartPage";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useData } from "../DataContext";

function App() {
  const { status } = useData();

  return (
    <>
      <div className="app">
        <Header />
        {/* <DateCounter /> */}
      </div>
      <Content>
        {status === "loading" && <Loader />}
        {status === "failed" && <ErrorPage />}
        {status === "ready" && <StartPage />}
        {status === "active" && (
          <>
            <ProgressBar />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishedScreen />}
      </Content>
    </>
  );
}

export default App;
