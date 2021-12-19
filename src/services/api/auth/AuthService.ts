import { TTokens } from "#data-transfer-types/src/types/TTokens";

export const AuthService = new class {
	private tokens: TTokens = {
		access_token: null,
	};

	public async getAccessToken(): Promise<string> {
		if (!this.tokens.access_token) {
			return (await this.authorize()).access_token;
		} else {
			return this.tokens.access_token;
		}
	}

	protected setAccessToken(accessToken: string) {
		this.tokens.access_token = accessToken;
	}

	public async authorize(): Promise<TTokens> {
		const authResponse = await fetch(`${process.env.API_URL}/auth/login`, {
			method: "POST",
			body: JSON.stringify({
				username: process.env.API_LOGIN,
				password: process.env.API_PASSWORD,
			}),
			headers: new Headers({ "Content-Type": "application/json" }),
		});

		if (!authResponse.ok) {
			throw new Error("Ошибка авторизации, проверьте правильность логина / пароля.");
		}

		const tokens = await authResponse.json();

		if ("access_token" in tokens) {
			this.setAccessToken(tokens.access_token);
			return tokens;
		} else {
			throw new Error("Access token not found!");
		}
	}

};