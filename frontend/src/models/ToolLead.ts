import mongoose, { Schema, Document, Model } from "mongoose";

export interface IToolLead extends Document {
  websiteUrl: string;
  email?: string;
  checkedAt: Date;
  source?: string;
}

const ToolLeadSchema = new Schema<IToolLead>(
  {
    websiteUrl: { type: String, required: true },
    email: { type: String, default: undefined },
    checkedAt: { type: Date, default: Date.now },
    source: { type: String, default: undefined },
  },
  { timestamps: false, collection: "tool_leads" }
);

export const ToolLead: Model<IToolLead> =
  mongoose.models.ToolLead || mongoose.model<IToolLead>("ToolLead", ToolLeadSchema);
