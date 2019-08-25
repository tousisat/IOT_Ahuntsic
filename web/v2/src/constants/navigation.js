import HomePage from "../containers/HomePage/HomePage";
import SetupPage from "../containers/SetupPage/SetupPage";
import PlayPage from "../containers/PlayPage/PlayPage";
//------------------------------------------

export const HOME_PAGE = {
  path: "/home",
  component: HomePage
};

export const SETUP_PAGE = {
  path: "/setup",
  component: SetupPage
};

export const PLAY_PAGE = {
  path: "/play",
  component: PlayPage
};

export const PAGES_ARRAY = [HOME_PAGE, SETUP_PAGE, PLAY_PAGE];
