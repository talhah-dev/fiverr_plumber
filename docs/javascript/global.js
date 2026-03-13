document.addEventListener("DOMContentLoaded", () => {
  const siteLoader = document.getElementById("siteLoader");

  if (siteLoader) {
    const hideLoader = () => {
      siteLoader.classList.add("is-hidden");
      document.body.classList.remove("is-loading");

      window.setTimeout(() => {
        siteLoader.remove();
      }, 460);
    };

    if (document.readyState === "complete") {
      window.setTimeout(hideLoader, 180);
    } else {
      window.addEventListener(
        "load",
        () => {
          window.setTimeout(hideLoader, 180);
        },
        { once: true }
      );

      // Fallback in case a third-party asset delays the load event too long.
      window.setTimeout(hideLoader, 2200);
    }
  }

  if (window.Lenis) {
    new Lenis({
      autoRaf: true,
      smoothWheel: true,
    });
  }

  const siteHeader = document.getElementById("siteHeader");

  if (siteHeader) {
    const syncHeaderState = () => {
      if (window.scrollY > 14) {
        siteHeader.classList.add("is-scrolled");
      } else {
        siteHeader.classList.remove("is-scrolled");
      }
    };

    window.addEventListener("scroll", syncHeaderState, { passive: true });
    syncHeaderState();
  }

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    const closeMenu = () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileMenu.classList.add("max-h-0", "opacity-0", "pointer-events-none");
      mobileMenu.classList.remove("max-h-[75vh]", "opacity-100");
    };

    const openMenu = () => {
      menuBtn.setAttribute("aria-expanded", "true");
      mobileMenu.classList.remove("max-h-0", "opacity-0", "pointer-events-none");
      mobileMenu.classList.add("max-h-[75vh]", "opacity-100");
    };

    closeMenu();

    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    });
  }

  const toTopBtn = document.getElementById("toTopBtn");

  if (toTopBtn) {
    const toggleToTop = () => {
      if (window.scrollY > 320) {
        toTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        toTopBtn.classList.add("opacity-100", "translate-y-0");
      } else {
        toTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        toTopBtn.classList.remove("opacity-100", "translate-y-0");
      }
    };

    window.addEventListener("scroll", toggleToTop, { passive: true });
    toggleToTop();

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".faq-item").forEach((item) => {
    const summary = item.querySelector("summary");
    const panel = item.querySelector(".faq-panel");

    if (!summary || !panel) return;

    panel.style.height = item.open ? "auto" : "0px";

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      const isOpen = item.open;

      if (isOpen) {
        const startHeight = `${panel.scrollHeight}px`;
        panel.style.height = startHeight;

        requestAnimationFrame(() => {
          panel.style.transition = "height 320ms ease";
          panel.style.height = "0px";
        });

        const handleClose = () => {
          item.open = false;
          panel.style.transition = "";
          panel.removeEventListener("transitionend", handleClose);
        };

        panel.addEventListener("transitionend", handleClose);
        return;
      }

      item.open = true;
      panel.style.height = "0px";

      requestAnimationFrame(() => {
        panel.style.transition = "height 320ms ease";
        panel.style.height = `${panel.scrollHeight}px`;
      });

      const handleOpen = () => {
        panel.style.height = "auto";
        panel.style.transition = "";
        panel.removeEventListener("transitionend", handleOpen);
      };

      panel.addEventListener("transitionend", handleOpen);
    });
  });

  const statsSection = document.getElementById("homeStats");

  if (statsSection) {
    const counters = statsSection.querySelectorAll(".counter-value");
    let hasAnimatedStats = false;

    const animateCounter = (counter) => {
      const target = Number(counter.dataset.counter || 0);
      const suffix = counter.dataset.counterSuffix || "";
      const duration = Number(counter.dataset.counterDuration || 1500);
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * easedProgress);
        counter.textContent = `${value.toLocaleString()}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const startStats = () => {
      if (hasAnimatedStats) return;
      hasAnimatedStats = true;
      counters.forEach(animateCounter);
    };

    if ("IntersectionObserver" in window) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startStats();
              statsObserver.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );

      statsObserver.observe(statsSection);
    } else {
      startStats();
    }
  }

  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 850,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }
});


