import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Page } from "@strapi/strapi/admin";
import { Routes, Route } from "react-router-dom";
import { u as useI18n, B as Box, F as Flex, T as Typography, C as CheckboxImpl, S as SingleSelect, l as lodashExports, a as SingleSelectOption, b as useLocalStorage, c as useExportModal, M as Main, p as pluginPermissions, I as ImportModal, d as Modal, e as Button, f as ForwardRef$3V, E as ExportModalContent, g as ExportModalFooter } from "./index-DWgTXxuJ.mjs";
import React__default, { useState, useCallback, memo } from "react";
import { useIntl } from "react-intl";
const Header = () => {
  const { i18n } = useI18n();
  return /* @__PURE__ */ jsx(Box, { padding: 4, margin: 2, background: "neutral100", children: /* @__PURE__ */ jsxs(
    Flex,
    {
      direction: "column",
      gap: "medium",
      alignItems: "left",
      children: [
        /* @__PURE__ */ jsx(Typography, { variant: "alpha", as: "h1", children: i18n("plugin.name", "Import Export") }),
        /* @__PURE__ */ jsx(Typography, { variant: "epsilon", as: "h3", children: i18n(
          "plugin.description",
          "Import/Export data from and to your database in just few clicks"
        ) })
      ]
    }
  ) });
};
const Preferences = () => {
  const { formatMessage: i18n } = useIntl();
  const { getPreferences, updatePreferences } = useLocalStorage();
  const [preferences, setPreferences] = useState(() => getPreferences());
  const handleUpdatePreferences = useCallback((key, value) => {
    updatePreferences({ [key]: value });
    setPreferences(getPreferences());
  }, [updatePreferences, getPreferences]);
  return /* @__PURE__ */ jsx(Box, { style: { alignSelf: "stretch" }, background: "neutral0", padding: 8, hasRadius: true, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "start", gap: 6, children: [
    /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "start", gap: 0, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "alpha", children: i18n({ id: "plugin.page.homepage.section.preferences.title", defaultMessage: "Default Preferences" }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "epsilon", children: i18n({ id: "plugin.page.homepage.section.preferences.description", defaultMessage: "Configure the default export behavior, so you don't have to set it every time you export." }) })
    ] }),
    /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "start", gap: 4, children: [
      /* @__PURE__ */ jsx(Flex, { justifyContent: "space-between", children: /* @__PURE__ */ jsx(
        CheckboxImpl,
        {
          checked: preferences.applyFilters,
          onCheckedChange: (value) => handleUpdatePreferences("applyFilters", value),
          children: /* @__PURE__ */ jsx(Typography, { children: i18n({ id: "plugin.export.apply-filters-and-sort", defaultMessage: "Apply filters and sort to exported data" }) })
        }
      ) }),
      /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: 2, children: [
        /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", children: i18n({ id: "plugin.export.deepness", defaultMessage: "Deepness" }) }),
        /* @__PURE__ */ jsx(
          SingleSelect,
          {
            label: i18n({ id: "plugin.export.deepness", defaultMessage: "Deepness" }),
            placeholder: i18n({ id: "plugin.export.deepness", defaultMessage: "Deepness" }),
            value: preferences.deepness,
            onChange: (value) => handleUpdatePreferences("deepness", value),
            children: lodashExports.range(1, 21).map((deepness) => /* @__PURE__ */ jsx(SingleSelectOption, { value: deepness.toString(), children: deepness }, deepness))
          }
        )
      ] })
    ] }) })
  ] }) });
};
const Preferences$1 = React__default.memo(Preferences);
const About = () => {
  const { formatMessage: i18n } = useIntl();
  return /* @__PURE__ */ jsx(Box, { style: { alignSelf: "stretch" }, background: "neutral0", padding: 8, marginTop: 6, hasRadius: true, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "start", gap: 6, children: [
    /* @__PURE__ */ jsx(Flex, { direction: "column", alignItems: "start", gap: 0, children: /* @__PURE__ */ jsx(Typography, { variant: "beta", children: i18n({ id: "plugin.page.about.title", defaultMessage: "About" }) }) }),
    /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Flex, { direction: "column", alignItems: "start", gap: 4, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "start", gap: 2, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "delta", children: "Strapi 5 Version" }),
      /* @__PURE__ */ jsx(Typography, { children: i18n({
        id: "plugin.page.about.strapi5.description",
        defaultMessage: "This is a plugin made by Jerry. agency."
      }) })
    ] }) }) })
  ] }) });
};
const About$1 = React__default.memo(About);
const HomePage = () => {
  useIntl();
  const { i18n } = useI18n();
  const state = useExportModal({ unavailableOptions: ["exportPluginsContentTypes"] });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsxs(Box, { padding: 6, paddingTop: 3, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(Page.Protect, { permissions: pluginPermissions.main, children: [
      /* @__PURE__ */ jsx(
        Box,
        {
          style: { alignSelf: "stretch" },
          background: "neutral0",
          padding: 8,
          margin: 6,
          hasRadius: true,
          children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "start", gap: 6, children: [
            /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "start", gap: 0, children: [
              /* @__PURE__ */ jsx(Typography, { variant: "alpha", children: i18n("plugin.page.homepage.section.quick-actions.title", "Global Actions") }),
              /* @__PURE__ */ jsx(Typography, { variant: "epsilon", children: i18n("plugin.page.homepage.section.quick-actions.description", "Import and export data from all your content types at once.") })
            ] }),
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Flex, { direction: "column", alignItems: "start", gap: 4, children: /* @__PURE__ */ jsxs(Flex, { gap: 4, children: [
              /* @__PURE__ */ jsx(ImportModal, {}),
              /* @__PURE__ */ jsxs(Modal.Root, { onOpenChange: state.handleOpenChange, children: [
                /* @__PURE__ */ jsx(Modal.Trigger, { children: /* @__PURE__ */ jsx(Button, { startIcon: /* @__PURE__ */ jsx(ForwardRef$3V, {}), children: i18n("plugin.cta.export", "Export") }) }),
                state.isOpen && /* @__PURE__ */ jsxs(Modal.Content, { children: [
                  /* @__PURE__ */ jsx(Modal.Header, { children: /* @__PURE__ */ jsx(Modal.Title, { children: /* @__PURE__ */ jsxs(Flex, { gap: 2, children: [
                    /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", textColor: "neutral800", tag: "h2", id: "title", children: i18n("plugin.cta.export", "Export") }),
                    /* @__PURE__ */ jsx(Typography, { textColor: "neutral800", tag: "h2", id: "title", children: state.isSlugWholeDb ? i18n("plugin.export.whole-database", "Whole database") : state.slug })
                  ] }) }) }),
                  /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsx(ExportModalContent, { state }) }),
                  /* @__PURE__ */ jsx(Modal.Footer, { children: /* @__PURE__ */ jsx(ExportModalFooter, { state }) })
                ] })
              ] })
            ] }) }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(Box, { padding: 6, paddingTop: 3, paddingBottom: 0, children: /* @__PURE__ */ jsx(Preferences$1, {}) }),
      /* @__PURE__ */ jsx(Box, { padding: 6, paddingTop: 3, paddingBottom: 0, children: /* @__PURE__ */ jsx(About$1, {}) })
    ] })
  ] }) }) });
};
const HomePage$1 = memo(HomePage);
const App = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage$1, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Page.Error, {}) })
  ] });
};
export {
  App
};
//# sourceMappingURL=App-BFh2qj8v.mjs.map
