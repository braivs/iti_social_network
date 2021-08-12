import {Provider} from "react-redux";
import React from "react";
import {store} from "./redux-store";
import {HashRouter} from "react-router-dom";

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => <HashRouter><Provider store={store}>{storyFn()}</Provider></HashRouter>