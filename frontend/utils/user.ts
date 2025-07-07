// utils/user.ts
export function getUserRole(): "professor" | "aluno" | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("papel") as "professor" | "aluno" | null
}
