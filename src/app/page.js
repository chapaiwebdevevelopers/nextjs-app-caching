import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

  


      {/* Hero Section */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Next.js Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-6xl">
            Building Modern,
            <span className="block text-cyan-600">
              Fast & Scalable Web Applications.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            I am a Next.js developer focused on building modern, responsive,
            user-friendly and high-performance web applications using Next.js,
            React, JavaScript and modern web technologies.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="mailto:skhstu@gmail.com"
              className="rounded-full bg-cyan-500 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-cyan-600"
            >
              Hire Me
            </a>

            <a
              href="https://m.me/skhstu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-7 py-3.5 text-center font-semibold text-zinc-700 transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
            >
              Message on Facebook
            </a>

          </div>
        </div>
      </section>


      {/* About Section */}
      <section
        id="about"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Developer Who Loves Building for the Web.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            I build websites and web applications with a strong focus on
            clean UI, responsive design, performance and maintainable code.
            Whether you need a business website, dashboard, e-commerce
            application or a custom web application, I can help turn your
            idea into a working product.
          </p>

        </div>
      </section>


      {/* Skills Section */}
      <section id="skills">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            My Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Technologies I Work With
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Next.js",
              "React.js",
              "JavaScript",
              "TypeScript",
              "HTML & CSS",
              "Tailwind CSS",
              "Node.js",
              "REST API",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-md"
              >
                <h3 className="font-semibold text-zinc-800">
                  {skill}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Services Section */}
      <section
        id="services"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            What I Can Build For You
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* Service 1 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-xl font-bold text-cyan-600">
                01
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Next.js Websites
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Modern, responsive and SEO-friendly websites built with
                Next.js and React.
              </p>

            </div>


            {/* Service 2 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-xl font-bold text-cyan-600">
                02
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Web Applications
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Custom dashboards, management systems and interactive web
                applications designed around your requirements.
              </p>

            </div>


            {/* Service 3 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-xl font-bold text-cyan-600">
                03
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Business Solutions
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Professional websites and custom digital solutions that help
                businesses build their online presence.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="border-t border-zinc-200">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            If you are looking for a Next.js developer to build your website
            or web application, feel free to contact me.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="mailto:skhstu@gmail.com"
              className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
            >
              skhstu@gmail.com
            </a>

            <a
              href="https://m.me/skhstu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-8 py-4 font-semibold text-zinc-700 transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
            >
              Facebook Messenger
            </a>

          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Next.js Developer. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="mailto:skhstu@gmail.com"
              className="transition hover:text-cyan-600"
            >
              Email
            </a>

            <a
              href="https://m.me/skhstu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-600"
            >
              Messenger
            </a>

          </div>

        </div>
      </footer>

    </main>
  );
}