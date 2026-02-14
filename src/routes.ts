import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import KnowYourRights from "./pages/KnowYourRights";
import EmploymentVisas from "./pages/immigration/EmploymentVisas";
import FamilyImmigration from "./pages/immigration/FamilyImmigration";
import HumanitarianVisas from "./pages/immigration/HumanitarianVisas";
import RemovalDefense from "./pages/immigration/RemovalDefense";
import Asylum from "./pages/immigration/Asylum";
import Residency from "./pages/immigration/Residency";
import Attorneys from "./pages/Attorneys";
import AttorneyDetail from "./pages/AttorneyDetail";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "conoce-tus-derechos", Component: KnowYourRights },
      { path: "inmigracion/visas-empleo", Component: EmploymentVisas },
      { path: "inmigracion/familiar", Component: FamilyImmigration },
      { path: "inmigracion/humanitarias", Component: HumanitarianVisas },
      { path: "inmigracion/defensa-remocion", Component: RemovalDefense },
      { path: "inmigracion/asilo", Component: Asylum },
      { path: "inmigracion/residencias", Component: Residency },
      { path: "abogados", Component: Attorneys },
      { path: "abogados/:id", Component: AttorneyDetail },
      { path: "contacto", Component: Contact },
    ],
  },
]);