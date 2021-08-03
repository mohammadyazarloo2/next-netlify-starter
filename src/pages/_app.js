import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import fbConfig from '../config/fbConfig'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      })
    ),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
  )
);

const theme = createMuiTheme({
  typography: {
    fontFamily: ["javan"].join(","),
  },
  MuiFormLabel: {
    right: "0px",
  },
  palette: {
    primary: {
      main: "#8ca18c",
    },
    light: {
      main: "#d3ebd3",
    },
  },
});

const progress = new ProgressBar({
  size: 2,
  color: "rgb(223, 5, 108)",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
