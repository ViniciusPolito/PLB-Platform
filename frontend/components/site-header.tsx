// components/site-header.tsx

"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { siteConfig, navAluno, navProfessor } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [papel, setPapel] = useState<string | null>(null)

  useEffect(() => {
    const storedPapel = localStorage.getItem("papel")
    setPapel(storedPapel)
  }, [])

  const navItems =
    papel === "professor" ? navProfessor : papel === "aluno" ? navAluno : []

  const handleLogout = () => {
    localStorage.removeItem("papel")
    window.location.href = "/login"
  }

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Botão para início */}
        <Link href="/" className="text-lg font-semibold">
          {siteConfig.name}
        </Link>

        {/* Navegação dinâmica */}
        <MainNav items={navItems} />

        <div className="flex items-center space-x-2">
          {papel ? (
            <button
              onClick={handleLogout}
              className={buttonVariants({ variant: "outline" })}
            >
              Sair
            </button>
          ) : (
            <Link href="/login">
              <div className={buttonVariants({ variant: "default" })}>
                Entrar
              </div>
            </Link>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
