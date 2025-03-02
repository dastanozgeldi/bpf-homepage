ALTER TABLE "resources_table" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "resources_table" ADD COLUMN "title" text NOT NULL;