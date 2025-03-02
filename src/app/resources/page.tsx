import Link from "next/link";
import data from "./resources.json";
// import { db } from "@/db";
// import { resourcesTable } from "@/schema";

export default async function Page() {
  // const resources = await db.select().from(resourcesTable);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">Resources</h1>
        <Link href="/">go home</Link>
      </div>

      <div className="my-6 w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((resource, id) => (
          <a
            key={id}
            className="p-3 border rounded-lg w-full"
            href={resource.url}
          >
            <h3>{resource.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
