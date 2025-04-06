import { BaseEntity } from "@/api/factory";

export interface Course extends BaseEntity {
  created_at: string;
  title: string;
  description: string;
  edited: boolean;
}
