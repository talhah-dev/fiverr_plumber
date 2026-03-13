const footer = document.getElementById("footer");

if (footer) {
  const footerBackgroundImage = "https://images.unsplash.com/photo-1749532125405-70950966b0e5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  footer.innerHTML = `
    <footer
      class="mt-4 w-full overflow-hidden bg-slate-950 text-white"
      style="background-image: linear-gradient(135deg, rgba(16, 24, 39, 0.95), rgba(48, 54, 61, 0.9)), url('${footerBackgroundImage}'); background-size: cover; background-position: center;"
    >
      <div class="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-[1.05fr_0.8fr_1fr_0.95fr]">
          <div>
            <div class="flex items-center gap-3">
              <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#42A5DC] text-white shadow-[0_14px_28px_rgba(66,165,220,0.24)]">
                <i class="fa-solid fa-faucet-drip"></i>
              </span>
              <div>
                <p class="text-lg font-bold text-white">Plumber Near Me</p>
                <p class="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/55">Residential Plumbing</p>
              </div>
            </div>
            <p class="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Professional plumbing support for homeowners who want dependable service, cleaner work, and a better experience from the first call.
            </p>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#8fd0f1]">Quick Links</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-300">
              <li><a href="./index.html" class="transition hover:text-white">Home</a></li>
              <li><a href="./about.html" class="transition hover:text-white">About</a></li>
              <li><a href="./faq.html" class="transition hover:text-white">FAQ</a></li>
              <li><a href="./contact-us.html" class="transition hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#8fd0f1]">Services</p>
            <ul class="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 xl:grid-cols-1">
              <li><a href="./sump-pump-installation.html" class="transition hover:text-white">Sump Pump Installation</a></li>
              <li><a href="./re-pipe-pipe-replacement.html" class="transition hover:text-white">Re-Pipe / Pipe Replacement</a></li>
              <li><a href="./residential-water-heaters.html" class="transition hover:text-white">Residential Water Heaters</a></li>
              <li><a href="./drain-cleaning.html" class="transition hover:text-white">Drain Cleaning</a></li>
              <li><a href="./water-line-repair.html" class="transition hover:text-white">Water Line Repair</a></li>
              <li><a href="./garbage-disposal.html" class="transition hover:text-white">Garbage Disposal</a></li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#8fd0f1]">Contact</p>
            <div class="mt-4 space-y-4 text-sm text-slate-300">
              <a href="tel:0000000000" class="flex items-start gap-3 transition hover:text-white">
                <span class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#8fd0f1]">
                  <i class="fa-solid fa-phone text-xs"></i>
                </span>
                <span>(615) 555-0148</span>
              </a>
              <a href="mailto:service@plumbernearme.com" class="flex items-start gap-3 transition hover:text-white">
                <span class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#8fd0f1]">
                  <i class="fa-solid fa-envelope text-xs"></i>
                </span>
                <span>service@plumbernearme.com</span>
              </a>
              <div class="flex items-start gap-3">
                <span class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#8fd0f1]">
                  <i class="fa-solid fa-map-pin text-xs"></i>
                </span>
                <span>2458 Brookline Avenue, Suite 4, Nashville, TN 37211</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 px-4 py-5 sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; <span data-year></span> Plumber Near Me. All rights reserved.</p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="./faq.html" class="transition hover:text-white">Service Info</a>
            <a href="./contact-us.html" class="transition hover:text-white">Book Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

