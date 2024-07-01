import { createLazyFileRoute } from "@tanstack/react-router";

import Projectlist from "../../components/Project";
import { placeHolderData } from "../../hooks/dataContext";

export const Route = createLazyFileRoute("/design/")({
  component: Designer,
});

function Designer() {
  return <Projectlist projectlist={placeHolderData.design} />;
}
