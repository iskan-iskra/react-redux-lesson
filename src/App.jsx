import { appStoreProvider } from "@/hoc";
import { store } from "@/store";
import PropTypes from "prop-types";
import { AppCounterRedux, AppCounterReactRedux } from "@/components";

const WrapperComponent = ({ children }) => (
  <div className="wrapper">{children}</div>
);

WrapperComponent.propTypes = {
  children: PropTypes.node,
};

const WrapperComponentWithStore = appStoreProvider(WrapperComponent, store);

const App = () => (
  <>
    <h1>JavaScrip + react + redux</h1>
    <WrapperComponent>
      <AppCounterRedux />
      <hr />
      <AppCounterRedux />
    </WrapperComponent>
    <hr />
    <h1>JavaScrip + react + redux + react-redux</h1>
    <WrapperComponentWithStore>
      <AppCounterReactRedux />
      <hr />
      <AppCounterReactRedux />
    </WrapperComponentWithStore>
  </>
);

export default App;
