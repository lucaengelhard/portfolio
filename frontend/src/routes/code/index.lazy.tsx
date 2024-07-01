import { createLazyFileRoute } from "@tanstack/react-router";

import Projectlist from "../../components/Project";
import { placeHolderData } from "../../placeholder/placeholderData";

export const Route = createLazyFileRoute("/code/")({
  component: Code,
});

function Code() {
  return <Projectlist projectlist={placeHolderData.code} />;
}
