import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: Date) => {
	return format(date, "dd/MM/yy HH:mm", { locale: ptBR });
};
