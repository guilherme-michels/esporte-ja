import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { type PropsWithChildren, useState } from "react";
import type { AppRouter } from "../../api/index";
import { getToken } from "./token";

export const trpc = createTRPCReact<AppRouter>();

export function TrpcProvider({ children }: PropsWithChildren<unknown>) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: false,
					},
					mutations: {
						retry: false,
					},
				},
			}),
	);

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: "http://10.0.0.108:3000",
					async headers() {
						console.log("\n=== DEBUG TRPC Headers ===");
						const token = await getToken();

						const headers = {
							Authorization: token || "",
							"Content-Type": "application/json",
						};

						console.log("Headers sendo enviados:", {
							...headers,
							Authorization: headers.Authorization ? "Bearer [TOKEN]" : "",
						});

						return headers;
					},
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
