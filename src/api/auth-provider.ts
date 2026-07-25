export interface Session {
  accessToken: string;
  refreshToken: string;
  user: { id: string; email: string };
}

export interface AuthProvider {
  signIn(email: string, password: string): Promise<Session>;
  signUp(email: string, password: string): Promise<Session>;
  signOut(): Promise<void>;
  refreshSession(refreshToken: string): Promise<Session>;
  getSession(): Promise<Session | null>;
  onAuthStateChange(cb: (session: Session | null) => void): () => void;
}

// Real projects: implement this in src/api/adapters/<backend>-auth.ts
// and swap the export below.
