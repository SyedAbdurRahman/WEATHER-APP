import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left group: Logo + CitySearch */}
        <div className="flex items-center gap-10">
          <Link to={"/"}>
            <img
              src={theme === "dark" ? "/ClimoLogoW.png" : "/ClimoLogoB.png"}
              alt="Climo logo"
              className="max-h-8 sm:max-h-8 h-auto w-auto object-contain"

            />
          </Link>
          <CitySearch />
        </div>

        {/* Right: Theme toggle */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
