import {MainLayoutStyle} from "./main-layout.style.ts";
import {Footer, LanguageSelector, ThemeSelector} from "@/components/ui";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <img className='layout-logo' src="/assets/images/logo.png" alt="logo" />
      <div className='layout-actions'>
        <LanguageSelector />
        <ThemeSelector />
      </div>
      <Outlet />
      <Footer />
    </MainLayoutStyle>
  );
};
