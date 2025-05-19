import { TypeFromSchema } from "@/lib/types";
import { connect, connection, model, models, Schema } from "mongoose";
import type { Model, Schema as SchemaType } from "mongoose";

// ensure database url is defined
if (!process.env.DATABASE_URL)
  throw new Error("MongoDB database URL must be defined");

// helper to create models whilst avoiding redefining existing models
function getOrCreateModel<T>(name: string, schema: SchemaType) {
  return (models[name] as Model<T>) || model<T>(name, schema);
}

// define blog model
const BlogSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    authors: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      required: true,
      default: []
    },
    published: { type: Schema.Types.Boolean, required: true },
    publishDate: { type: Date, required: false },
    visible: { type: Boolean, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    imageOffset: { type: Number, required: true, default: 0 },
    blogId: { type: String, required: true }
  },
  { collection: "Blog" }
);

export type BlogType = TypeFromSchema<typeof BlogSchema>;
export const Blog = getOrCreateModel<BlogType>("Blog", BlogSchema);

// define user model
const UserSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  { collection: "User" }
);

export type UserType = TypeFromSchema<typeof UserSchema>;
export const User = getOrCreateModel<UserType>("User", UserSchema);

// connect
const status = {
  connected: false
};

export async function getConnection() {
  if (!status.connected) {
    try {
      await connect(process.env.DATABASE_URL || "");
      status.connected = true;

      connection.on("error", (err) => {
        console.error(err);
      });
    } catch {
      console.error("Failed to connect to MongoDB");
      status.connected = false;
    }
  }

  return status.connected;
}
