const navbar = document.getElementById("navbar");

if (navbar) {
  const currentPage = document.body.dataset.page || "home";

  const navItems = [
    { id: "home", label: "Home", href: "./index.html" },
    { id: "about", label: "About", href: "./about.html" },
    { id: "faq", label: "FAQ", href: "./faq.html" },
    { id: "contact-us", label: "Contact Us", href: "./contact-us.html" },
  ];

  const serviceLinks = [
    { id: "sump-pump-installation", label: "Sump Pump Installation", href: "./sump-pump-installation.html" },
    { id: "re-pipe-pipe-replacement", label: "Re-Pipe / Pipe Replacement", href: "./re-pipe-pipe-replacement.html" },
    { id: "residential-water-heaters", label: "Residential Water Heaters", href: "./residential-water-heaters.html" },
    { id: "drain-cleaning", label: "Drain Cleaning", href: "./drain-cleaning.html" },
    { id: "water-line-repair", label: "Water Line Repair", href: "./water-line-repair.html" },
    { id: "garbage-disposal", label: "Garbage Disposal", href: "./garbage-disposal.html" },
  ];

  const isServicePage = serviceLinks.some((item) => item.id === currentPage);

  const desktopLinks = navItems
    .map((item) => {
      const active = item.id === currentPage;
      return `
        <a
          href="${item.href}"
          class="nav-pill ${active ? "is-active bg-[#42A5DC]/12 text-[#1b78ab]" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"} rounded-full px-4 py-2 text-sm font-semibold transition"
        >
          ${item.label}
        </a>
      `;
    })
    .join("");

  const mobileLinks = navItems
    .map((item) => {
      const active = item.id === currentPage;
      return `
        <a
          href="${item.href}"
          class="rounded-2xl px-4 py-3 text-sm font-semibold transition ${
            active
              ? "bg-[#42A5DC] text-white shadow-[0_16px_34px_rgba(66,165,220,0.24)]"
              : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }"
        >
          ${item.label}
        </a>
      `;
    })
    .join("");

  const serviceMenu = serviceLinks
    .map((item) => {
      const active = item.id === currentPage;
      return `
        <a
          href="${item.href}"
          class="block rounded-2xl px-4 py-3 text-sm font-medium transition ${
            active
              ? "bg-[#42A5DC]/12 text-[#1b78ab]"
              : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }"
        >
          ${item.label}
        </a>
      `;
    })
    .join("");

  const mobileServiceMenu = serviceLinks
    .map((item) => {
      const active = item.id === currentPage;
      return `
        <a
          href="${item.href}"
          class="rounded-2xl px-4 py-3 text-sm font-medium transition ${
            active
              ? "bg-[#42A5DC] text-white shadow-[0_16px_34px_rgba(66,165,220,0.24)]"
              : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }"
        >
          ${item.label}
        </a>
      `;
    })
    .join("");

  navbar.innerHTML = `
    <header id="siteHeader" class="site-header border-b border-slate-200/80 bg-white/92 backdrop-blur">
      <div class="topbar-shell hidden border-b border-white/10 text-white lg:block">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 text-xs font-medium tracking-[0.12em] text-white/82 lg:px-8">
          <div class="relative z-[1] flex items-center gap-6">
            <a href="tel:6155550148" class="inline-flex items-center gap-2 transition hover:text-white">
              <i class="fa-solid fa-phone-volume text-[#8fd0f1]"></i>
              Call For Service Today
            </a>
            <span class="inline-flex items-center gap-2 text-white/70">
              <i class="fa-solid fa-clock text-[#8fd0f1]"></i>
              Fast scheduling for plumbing visits
            </span>
          </div>
          <p class="relative z-[1] text-white/68">Sump pumps, drains, water heaters, water lines, and pipe replacement</p>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-4 py-4">
          <a href="./index.html" class="flex min-w-0 items-center gap-3 text-slate-900">
            <span class="brand-mark flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#42A5DC] text-white shadow-[0_18px_34px_rgba(66,165,220,0.28)]">
              <i class="fa-solid fa-faucet-drip text-lg"></i>
            </span>
            <span class="min-w-0 leading-none">
              <span class="block truncate text-lg font-bold text-slate-900 sm:text-xl">Plumber Near Me</span>
              <span class="mt-1 block truncate text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Local Plumbing Service
              </span>
            </span>
          </a>

          <nav class="hidden items-center justify-center gap-1 xl:flex">
            ${desktopLinks}
            <div class="group relative -my-3 py-3">
              <button
                type="button"
                class="nav-pill ${isServicePage ? "is-active bg-[#42A5DC]/12 text-[#1b78ab]" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"} inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
              >
                Services
                <i class="fa-solid fa-chevron-down text-[0.72rem]"></i>
              </button>
              <div class="pointer-events-none absolute left-1/2 top-full z-20 w-[22rem] -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div class="service-dropdown rounded-[1.5rem] border border-slate-200 p-3">
                  <div class="grid gap-1">
                    ${serviceMenu}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div class="hidden items-center gap-3 lg:flex xl:min-w-[15rem] xl:justify-end">
            <a href="tel:6155550148" class="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#42A5DC]/40 hover:text-slate-900">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#42A5DC]/12 text-[#42A5DC]">
                <i class="fa-solid fa-phone"></i>
              </span>
              <span>(615) 555-0148</span>
            </a>
            <a
              href="./contact-us.html"
              class="nav-cta inline-flex items-center gap-2 rounded-full bg-[#42A5DC] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3696cb]"
            >
              Book Now
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          <button
            id="menuBtn"
            type="button"
            aria-label="Open navigation"
            aria-expanded="false"
            class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-[#42A5DC]/35 hover:text-[#42A5DC] lg:hidden"
          >
            <i class="fa-solid fa-bars text-lg"></i>
          </button>
        </div>

        <div
          id="mobileMenu"
          class="mobile-card pointer-events-none max-h-0 overflow-y-auto overscroll-contain border-t border-slate-200 px-1 opacity-0 transition-all duration-300 lg:hidden"
        >
          <div class="flex flex-col gap-2 py-4 pr-1">
            ${mobileLinks}
            <div class="mt-1 rounded-[1.5rem] border border-slate-200 bg-slate-50/90 p-3">
              <p class="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#42A5DC]">Services</p>
              <div class="flex flex-col gap-1">
                ${mobileServiceMenu}
              </div>
            </div>
            <a
              href="tel:6155550148"
              class="mt-2 inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#42A5DC]/35 hover:text-slate-900"
            >
              <i class="fa-solid fa-phone-volume text-[#42A5DC]"></i>
              Call Now
            </a>
            <a
              href="./contact-us.html"
              class="nav-cta inline-flex items-center justify-center gap-3 rounded-2xl bg-[#42A5DC] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3696cb]"
            >
              Book Service
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}
