export const initNavBarToggle = (mobileMenu: string, navBtn: string) => {
  const mobileNavigation = document.querySelector(mobileMenu);
  const mobileNavBtn = document.querySelector(navBtn);

  const toggle = () => mobileNavigation?.classList.toggle("hidden");

  mobileNavBtn?.addEventListener("click", toggle);

  return toggle
};
