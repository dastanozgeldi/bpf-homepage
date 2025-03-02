import { db } from "@/db";
import { resourcesTable } from "@/schema";

export default async function Page() {
  const resources = await db.select().from(resourcesTable);

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Resources</h1>

      <div className="my-6 w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            className="p-3 border rounded-lg w-full"
          >
            {resource.title}
          </a>
        ))}
      </div>
    </div>
  );
}
