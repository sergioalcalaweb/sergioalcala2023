import About from "./components/about";
import Experience from "./components/experience";
import Header from "./components/header";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="lg:w-1/2 lg:py-12">
          <About />
          <Experience />
          <Skills />
        </main>
      </div>
    </div>
  )
}
