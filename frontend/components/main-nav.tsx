// components/main-nav.tsx
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items: { title: string; href: string }[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {items?.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn("transition-colors hover:text-foreground/80", "text-foreground")}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
  