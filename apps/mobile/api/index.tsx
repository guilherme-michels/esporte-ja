import { type PropsWithChildren, useState } from "react";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getToken } from "./token";
import type { AppRouter } from "../../api/index";

export const trpc = createTRPCReact<AppRouter>();

export function TrpcProvider({ children }: PropsWithChildren<unknown>) {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: "http://10.0.0.108:3000",
					// async headers() {
					// 	const token = await getToken();
					// 	if (!token) {
					// 		return {};
					// 	}

					// 	return {
					// 		authorization: `Bearer ${token}`,
					// 	};
					// },
				}),
			],
		}),
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
}
