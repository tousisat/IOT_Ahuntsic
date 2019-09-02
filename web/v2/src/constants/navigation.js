import SetupPage from "../containers/SetupPage/SetupPage";
import PlayPage from "../containers/PlayPage/PlayPage";
//------------------------------------------

export const SETUP_PAGE = {
  path: "/setup",
  component: SetupPage
};

export const PLAY_PAGE = {
  path: "/play",
  component: PlayPage
};

export const PAGES_ARRAY = [SETUP_PAGE, PLAY_PAGE];
