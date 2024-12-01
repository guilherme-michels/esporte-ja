import { trpc } from "@/api";
import { useAuth } from "@/contexts/auth";
import { useCallback } from "react";

export function useCompanyAccess() {
	const { user } = useAuth();

	const {
		data: companies,
		isLoading,
		error,
	} = trpc.company.getUserCompanies.useQuery(undefined, {
		enabled: !!user,
		onSuccess: (data) => {
			console.log("\n=== DEBUG useCompanyAccess ===");
			console.log("Dados recebidos com sucesso:", data);
			console.log("=== FIM DEBUG ===\n");
		},
		onError: (error) => {
			console.error("\n=== ERRO useCompanyAccess ===");
			console.error("Erro completo:", error);
			console.error("Mensagem:", error.message);
			console.error("Causa:", error.cause);
			console.error("=== FIM ERRO ===\n");
		},
	});

	return {
		companies: companies || [],
		isLoading,
		hasAnyCompanyAccess: (companies?.length || 0) > 0,
		error,
	};
}
