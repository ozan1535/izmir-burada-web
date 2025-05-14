import { ports } from "@/utils/helpers";

export const getPortNameById = (id) =>
  ports.find((port) => port.id === +id).name;
