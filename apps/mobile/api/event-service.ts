import type { Event } from "@/schemas";
import api from ".";

export const eventService = {
	getEventById: async (id: string): Promise<Event> => {
		try {
			const response = await api.get<Event>(`/events/${id}`);
			return response.data;
		} catch (error) {
			console.error(`Erro ao buscar evento com id ${id}:`, error);
			throw error;
		}
	},

	registerForEvent: async (eventId: string): Promise<void> => {
		try {
			await api.post(`/events/${eventId}/register`);
		} catch (error) {
			console.error(`Erro ao se inscrever no evento ${eventId}:`, error);
			throw error;
		}
	},
};
