import { ports } from "@/utils/helpers";

export const getPortNameById = (id: string) =>
  ports.find((port) => port.id === +id)?.name;
