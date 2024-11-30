import { useAuth } from "@/contexts/auth";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
	const { user, isLoading } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isLoading) return;

		const inAuthGroup = segments[0] === "auth";
		const inTabsGroup = segments[0] === "(tabs)";

		if (!user && !inAuthGroup) {
			router.replace("/auth/sign-in");
		} else if (user && inAuthGroup) {
			router.replace("/(tabs)");
		}
	}, [user, segments, isLoading]);

	if (isLoading) {
		return null;
	}

	return <>{children}</>;
}
