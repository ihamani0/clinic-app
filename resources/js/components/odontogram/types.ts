export type ToothStatus =
  | "healthy"
  | "missing"
  | "abutment"
  | "crown"
  | "caries"
  | "extracted"
  | "implant";

export type ToothData = {
  status: ToothStatus;
  note?: string;
};

export type TeethState = Record<number, ToothData>;


