import { createLazyFileRoute } from "@tanstack/react-router";

import Projectlist from "../../components/Project";
import { placeHolderData } from "../../placeholder/placeholderData";

export const Route = createLazyFileRoute("/design/")({
  component: Designer,
});

function Designer() {
  return <Projectlist projectlist={placeHolderData.design} />;
}
