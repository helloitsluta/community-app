import { Link } from "react-router-dom"
import pages from "../../pages"
import { CopyrightIcon } from "lucide-react"
import GitHubIcon from "../icons/GitHubIcon"

const Footer: React.FC = () => (
  <footer className="bg-neutral-700 text-white px-4 py-6">
    <div className="mx-auto w-fit lg:w-11/12">
      <div className="flex flex-col gap-6">
        <p className="font-bold text-lg text-center">Luta - Community App</p>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <section className="flex flex-col gap-3">
              <p className="font-bold">Quick links</p>
              <div className="grid grid-rows-3 gap-y-6">
                {pages
                  .filter((page) => page.showOnNav)
                  .map((p) => (
                    <Link to={p.path} key={p.path} className="leading-tight">
                      {p.title}
                    </Link>
                  ))}
              </div>
            </section>
            <section className="flex flex-col gap-3">
              <p className="font-bold">Follow me</p>
              <GitHubIcon className="w-5 h-5" />
            </section>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <CopyrightIcon className="w-5 h-5" />
            <p className="leading-none text-sm">
              2025 Luta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
