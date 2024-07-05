import { ApolloError } from "@apollo/client";
import { Link } from "@tanstack/react-router";
import { CircleX, MoveUpRight } from "lucide-react";

export default function ErrorPage({ error }: { error?: ApolloError }) {
  return (
    <div className="h-screen w-screen bg-purple-600 fixed z-50 grid items-center justify-center text-white">
      <div>
        <div className=" flex gap-4 items-center">
          <CircleX className="inline" size={64} />
          <div>
            <div className="text-5xl font-bold mb-2">Something went wrong</div>
            <div>{error?.message}</div>
          </div>
        </div>{" "}
        <Link className="mt-8 text-3xl flex justify-center" to="/">
          <div>
            Go to homepage <MoveUpRight className="inline" />
          </div>
        </Link>
      </div>
    </div>
  );
}
