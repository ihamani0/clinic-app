export const TOOTH_STATUS_CONFIG = {
healthy: {
    label: "Healthy",
    className: "fill-white stroke-gray-400",
  },
  caries: {
    label: "Caries",
    className: "fill-orange-400 stroke-orange-600",
  },
  crown: {
    label: "Crown",
    className: "fill-blue-400 stroke-blue-600",
  },
  abutment: {
    label: "Abutment",
    className: "fill-yellow-400 stroke-yellow-600",
  },
  implant: {
    label: "Implant",
    className: "fill-purple-400 stroke-purple-600",
  },
  missing: {
    label: "Missing",
    className: "fill-red-500 stroke-red-700",
  },
  extracted: {
    label: "Extracted",
    className: "fill-gray-300 stroke-gray-500",
  },
} as const;