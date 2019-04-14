import React from "react";
import { OfferedList, Button, TeamList, SearchForm } from "..";
import { Switch, Route, NavLink } from "react-router-dom";

const app320 = () => {
  return (
    <div className="app320">
      <TeamList />
      <SearchForm />
      <Switch>
        <Route exact path="/" component={OfferedList} />
        <Route
          exact
          path="/search_result"
          component={() => <OfferedList universe="searchHero" />}
        />
        <Route path="/dc" component={() => <OfferedList universe="dc" />} />
        <Route
          path="/marvel"
          component={() => <OfferedList universe="marvel" />}
        />
      </Switch>
      <div className="btnContainer">
        <NavLink to="/dc" activeClassName="dcActive">
          <Button attr="dc dcInActive" />
        </NavLink>
        <NavLink to="/marvel" activeClassName="marvelActive">
          <Button attr="marvel marvelInActive" />
        </NavLink>
      </div>
    </div>
  );
};

const app375 = () => {
  return (
    <div className="app375">
      <TeamList />
      <SearchForm />
      <Switch>
        <Route exact path="/" component={OfferedList} />
        <Route
          exact
          path="/search_result"
          component={() => <OfferedList universe="searchHero" />}
        />
        <Route path="/dc" component={() => <OfferedList universe="dc" />} />
        <Route
          path="/marvel"
          component={() => <OfferedList universe="marvel" />}
        />
      </Switch>
      <div className="btnContainer">
        <NavLink to="/dc" activeClassName="dcActive">
          <Button attr="dc dcInActive" />
        </NavLink>
        <NavLink to="/marvel" activeClassName="marvelActive">
          <Button attr="marvel marvelInActive" />
        </NavLink>
      </div>
    </div>
  );
};

const app767 = () => {
  return (
    <div className="app767">
      <TeamList />
      <div className="container767">
        <SearchForm />
        <div className="btnContainer">
          <NavLink to="/dc" activeClassName="dcActive">
            <Button attr="dc dcInActive" />
          </NavLink>
          <NavLink to="/marvel" activeClassName="marvelActive">
            <Button attr="marvel marvelInActive" />
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={OfferedList} />
        <Route
          exact
          path="/search_result"
          component={() => <OfferedList universe="searchHero" />}
        />
        <Route path="/dc" component={() => <OfferedList universe="dc" />} />
        <Route
          path="/marvel"
          component={() => <OfferedList universe="marvel" />}
        />
      </Switch>
    </div>
  );
};

export { app320, app375, app767 };
