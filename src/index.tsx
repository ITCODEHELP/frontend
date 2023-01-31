import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// #region Page Imports

import PageNotFound from './pages/pageNotFound/pageNotFound';

import HomePage from './pages/home/home';
import LoginPage from './pages/login/login';
import Docs from './pages/docs/docs';
import Blog from './pages/blog/blog';
import About from './pages/about/about';
import Profile from './pages/profile/profile';
import Annotate from './pages/annotate/annotate';

import ViewDatasets from './pages/viewDatasets/viewDatasets';
import EachDataSet from './pages/eachDataset/eachDataset';
import CreateDataset from './pages/createDataset/createDataset';

// #endregion

import RootLayout from './components/rootLayout';
import PrivateRoutes from './components/privateRoutes';

import { UserWrapper } from './contexts/userContext';
import { ScreenWrapper } from './contexts/screenContext';
// import { EmotionCacheProvider } from './contexts/reactSelectContext';

import './index.css';

/**
 * Wraps entire App with neccessary Contexts
 * 
 * @param props App
 * @returns Wrapped Component
 */
function AppWrapper(props: React.PropsWithChildren) {
    return (
        // <EmotionCacheProvider>
            <ScreenWrapper>
                <UserWrapper>
                    { props.children }
                </UserWrapper>
            </ScreenWrapper>
        // </EmotionCacheProvider>
    );
}

function MainApp() {
    return (
        <AppWrapper>
            <Routes>
                <Route>
                    <Route path="/" element={ <RootLayout /> }>
                        <Route index element={ <HomePage /> }/>

                        <Route path="/blog" element={ <Blog /> }/>
                        <Route path="/docs" element={ <Docs /> }/>
                        <Route path="/about" element={ <About /> }/>

                        <Route path="/login" element={ <LoginPage type="Login" /> }/>
                        <Route path="/signup" element={ <LoginPage type="Signup" /> }/>

                        <Route path="*" element={ <PageNotFound /> }/>
                    </Route>

                    <Route path="/dashboard" element={ <PrivateRoutes /> }>
                        <Route element={ <RootLayout /> }>
                            <Route index element={ <ViewDatasets /> }/>

                            <Route path="profile" element={ <Profile /> }/>
                            <Route path="create-dataset" element={ <CreateDataset /> }/>

                            <Route path=":datasetId/annotate" element={ <Annotate /> }/>
                        </Route>

                        <Route
                            path=":datasetId/description"
                            element={ <EachDataSet page="description" /> }
                        />

                        <Route
                            path=":datasetId/uploaded-images"
                            element={ <EachDataSet page="uploaded-images" /> }
                        />

                        <Route
                            path=":datasetId/dataset-images"
                            element={ <EachDataSet page="dataset-images" /> }
                        />

                        <Route
                            path=":datasetId/settings"
                            element={ <EachDataSet page="settings" /> }
                        />
                    </Route>
                </Route>
            </Routes>
        </AppWrapper>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainApp />
        </BrowserRouter>
    </React.StrictMode>
);
