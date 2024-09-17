import { Provider } from "react-redux";

export const appStoreProvider = (WrapperComponent, store) => {
  const WithStoreProvider = ({ ...props }) => (
    <Provider store={store}>
      <WrapperComponent {...props} />;
    </Provider>
  );

  return WithStoreProvider;
};
