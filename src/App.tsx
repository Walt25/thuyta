import useRouteElements from "./useRouteElements";

export default function App() {
  const routeElement = useRouteElements();
  return <div>{routeElement}</div>;
}
