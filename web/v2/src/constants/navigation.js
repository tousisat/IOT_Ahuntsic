import HomePage from "../containers/HomePage/HomePage";
import ProfilPage from "../containers/ProfilPage/ProfilPage";
//------------------------------------------

export const HOME_PAGE = {
  path: "/home",
  component: HomePage
};

export const PROFIL_PAGE = {
  path: "/profil",
  component: ProfilPage
};

export const PAGES_ARRAY = [HOME_PAGE, PROFIL_PAGE];
