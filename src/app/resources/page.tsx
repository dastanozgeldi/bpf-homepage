import data from "./resources.json" assert { type: "json" };
// import { db } from "@/db";
// import { resourcesTable } from "@/schema";

export default async function Page() {
  // const resources = await db.select().from(resourcesTable);
  // console.log(resources);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">Resources</h1>
      </div>

      <div className="my-6 w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((resource, id) => (
          <a
            key={id}
            className="p-3 border rounded-lg w-full"
            href={resource.url}
            target={resource.external ? "_blank" : undefined}
            rel={resource.external ? "noopener noreferrer" : undefined}
          >
            <h3>{resource.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
