import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './css/App.css'
import './css/main.css'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'
import Popup from 'react-popup'
import './css/Popup.css'
import { AccountsView } from './views/Accounts'
import { BlocklistView } from './views/BlocklistView'
import { LoginView } from './views/LoginView'
import { CommunitiesView } from './views/CommunitiesView'
import { WatchView } from './views/WatchView'
import { LeaderboardView } from './views/LeaderboardView'
import { CommunityView } from './views/CommunityView'
import { IpfsConsoleView } from './views/IpfsConsoleView'
import { GridFeedView } from './views/GridFeedView'
import { NotFoundView } from './views/NotFoundView'
import { PinsView } from './views/PinsView'
import { UploaderView } from './views/UploaderView'
import { UserView } from './views/UserView'
import { TopNavbar } from './components/TopNavbar'
import { SideNavbar } from './components/SideNavbar'
import { StartUp } from './StartUp'
import { CreatorStudioView } from './views/CreatorStudioView'
import { useQuery, gql, ApolloClient, InMemoryCache } from '@apollo/client'

export const IndexerClient = new ApolloClient({
  uri: 'https://spk-union.us-west.web3telekom.xyz/api/v2/graphql',
  cache: new InMemoryCache(),
})

export function App() {
  return (
    <div>
      <StartUp />
      <Popup
        className="mm-popup"
        btnClass="mm-popup__btn"
        closeBtn={false}
        closeHtml={null}
        defaultOk="Ok"
        defaultCancel="Cancel"
        wildClasses={false}
        escToClose={true}
      />
      <NotificationContainer />
      <TopNavbar />
      <SideNavbar />
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <GridFeedView awaitingMoreData={true} type="home" />
          </Route>
          <Route path="/new" exact>
            <GridFeedView
              key="feed-new"
              awaitingMoreData={false}
              titleText="New Videos"
              type="new"
            />
          </Route>
          <Route path="/trends" exact>
            <GridFeedView
              key="feed-trends"
              awaitingMoreData={false}
              titleText="Trending Videos"
              type="trending"
            />
          </Route>
          <Route path="/newcomers" exact>
            <GridFeedView
              key="feed-newcomers"
              awaitingMoreData={true}
              titleText="First Uploads"
              type="firstUploads"
            />
          </Route>
          <Route path="/watch/:reflink" component={WatchView} />
          <Route path="/user/:reflink" component={UserView} />
          <Route path="/blocklist/" component={BlocklistView} />
          <Route path="/communities/" component={CommunitiesView} />
          <Route path="/community/:reflink" component={CommunityView} />
          <Route path="/leaderboard/" component={LeaderboardView} />
          <Route path="/pins/" component={PinsView} />
          <Route path="/ipfsconsole/" component={IpfsConsoleView} />
          <Route path="/creatorstudio/" component={CreatorStudioView} />
          <Route path="/login" component={LoginView} />
          <Route path="/accounts" component={AccountsView} />
          <Route path="/uploader" component={UploaderView} />
          <Route component={NotFoundView} />
        </Switch>
      </HashRouter>
    </div>
  )
}
