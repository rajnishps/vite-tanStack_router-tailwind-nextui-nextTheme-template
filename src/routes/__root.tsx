import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { Code } from "@nextui-org/react"

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeSwitcher />
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          <Code size="sm"> Home</Code>
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})
