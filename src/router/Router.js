import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "../utils/constants/routerConstant";

import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ExperiencesPage from "../pages/experiences/ExperiencesPage";
import ContactPage from "../pages/contact/ContactPage";

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTER.HOME.path}
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.ABOUT.path}
        element={
          <DefaultLayout>
            <AboutPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.EXPERIENCES.path}
        element={
          <DefaultLayout>
            <ExperiencesPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.CONTACT.path}
        element={
          <DefaultLayout>
            <ContactPage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};
