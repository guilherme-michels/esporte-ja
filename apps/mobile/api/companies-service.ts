import { api } from ".";

export interface CompanyInput {
	name: string;
	slug: string;
	domain?: string;
	logoImg?: string;
	ownerId: string;
	cityId?: string;
	addressId?: string;
}

export interface CompanyUpdateInput {
	id: string;
	data: Partial<CompanyInput>;
}

class CompanyService {
	async createCompany(input: CompanyInput) {
		return api.company.create.mutate(input);
	}

	async getAllCompanies(params: { limit?: number; cursor?: string } = {}) {
		return api.company.getAll.query(params);
	}

	async getCompanyById(id: string) {
		return api.company.getById.query(id);
	}

	async updateCompany(input: CompanyUpdateInput) {
		return api.company.update.mutate(input);
	}

	async deleteCompany(id: string) {
		return api.company.delete.mutate(id);
	}
}

export const companyService = new CompanyService();
