import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../api/index";

export const api = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:3000",

			async headers() {
				return {
					authorization: "Bearer 123",
				};
			},
		}),
	],
});
