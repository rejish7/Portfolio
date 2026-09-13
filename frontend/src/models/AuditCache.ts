import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAuditCache extends Document {
  websiteUrl: string;
  result: Record<string, unknown>;
  cachedAt: Date;
}

const AuditCacheSchema = new Schema<IAuditCache>(
  {
    websiteUrl: { type: String, required: true, unique: true, index: true },
    result: { type: Schema.Types.Mixed, required: true },
    cachedAt: { type: Date, default: Date.now },
  },
  { timestamps: false, collection: "audit_cache" }
);

export const AuditCache: Model<IAuditCache> =
  mongoose.models.AuditCache ||
  mongoose.model<IAuditCache>("AuditCache", AuditCacheSchema);
