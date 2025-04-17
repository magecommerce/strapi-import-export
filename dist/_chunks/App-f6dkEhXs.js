"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const admin = require("@strapi/strapi/admin");
const reactRouterDom = require("react-router-dom");
const index = require("./index-B1GXeynr.js");
const React = require("react");
const reactIntl = require("react-intl");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const React__default = /* @__PURE__ */ _interopDefault(React);
const Header = () => {
  const { i18n } = index.useI18n();
  return /* @__PURE__ */ jsxRuntime.jsx(index.Box, { padding: 4, margin: 2, background: "neutral100", children: /* @__PURE__ */ jsxRuntime.jsxs(
    index.Flex,
    {
      direction: "column",
      gap: "medium",
      alignItems: "left",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "alpha", as: "h1", children: i18n("plugin.name", "Import Export") }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "epsilon", as: "h3", children: i18n(
          "plugin.description",
          "Import/Export data from and to your database in just few clicks"
        ) })
      ]
    }
  ) });
};
const Preferences = () => {
  const { formatMessage: i18n } = reactIntl.useIntl();
  const { getPreferences, updatePreferences } = index.useLocalStorage();
  const [preferences, setPreferences] = React.useState(() => getPreferences());
  const handleUpdatePreferences = React.useCallback((key, value) => {
    updatePreferences({ [key]: value });
    setPreferences(getPreferences());
  }, [updatePreferences, getPreferences]);
  return /* @__PURE__ */ jsxRuntime.jsx(index.Box, { style: { alignSelf: "stretch" }, background: "neutral0", padding: 8, hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", alignItems: "start", gap: 6, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", alignItems: "start", gap: 0, children: [
      /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "alpha", children: i18n({ id: "plugin.page.homepage.section.preferences.title", defaultMessage: "Default Preferences" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "epsilon", children: i18n({ id: "plugin.page.homepage.section.preferences.description", defaultMessage: "Configure the default export behavior, so you don't have to set it every time you export." }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(index.Box, { children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", alignItems: "start", gap: 4, children: [
      /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { justifyContent: "space-between", children: /* @__PURE__ */ jsxRuntime.jsx(
        index.CheckboxImpl,
        {
          checked: preferences.applyFilters,
          onCheckedChange: (value) => handleUpdatePreferences("applyFilters", value),
          children: /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { children: i18n({ id: "plugin.export.apply-filters-and-sort", defaultMessage: "Apply filters and sort to exported data" }) })
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", gap: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", children: i18n({ id: "plugin.export.deepness", defaultMessage: "Deepness" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.SingleSelect,
          {
            label: i18n({ id: "plugin.export.deepness", defaultMessage: "Deepness" }),
            placeholder: i18n({ id: "plugin.export.deepness", defaultMessage: "Deepness" }),
            value: preferences.deepness,
            onChange: (value) => handleUpdatePreferences("deepness", value),
            children: index.lodashExports.range(1, 21).map((deepness) => /* @__PURE__ */ jsxRuntime.jsx(index.SingleSelectOption, { value: deepness.toString(), children: deepness }, deepness))
          }
        )
      ] })
    ] }) })
  ] }) });
};
const Preferences$1 = React__default.default.memo(Preferences);
const About = () => {
  const { formatMessage: i18n } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(index.Box, { style: { alignSelf: "stretch" }, background: "neutral0", padding: 8, marginTop: 6, hasRadius: true, children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", alignItems: "start", gap: 6, children: [
    /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { direction: "column", alignItems: "start", gap: 0, children: /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "beta", children: i18n({ id: "plugin.page.about.title", defaultMessage: "About" }) }) }),
    /* @__PURE__ */ jsxRuntime.jsx(index.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { direction: "column", alignItems: "start", gap: 4, children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", alignItems: "start", gap: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "delta", children: "Strapi 5 Version" }),
      /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { children: i18n({
        id: "plugin.page.about.strapi5.description",
        defaultMessage: "This is a plugin made by Jerry. agency."
      }) })
    ] }) }) })
  ] }) });
};
const About$1 = React__default.default.memo(About);
const HomePage = () => {
  reactIntl.useIntl();
  const { i18n } = index.useI18n();
  const state = index.useExportModal({ unavailableOptions: ["exportPluginsContentTypes"] });
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(index.Main, { children: /* @__PURE__ */ jsxRuntime.jsxs(index.Box, { padding: 6, paddingTop: 3, children: [
    /* @__PURE__ */ jsxRuntime.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(admin.Page.Protect, { permissions: index.pluginPermissions.main, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        index.Box,
        {
          style: { alignSelf: "stretch" },
          background: "neutral0",
          padding: 8,
          margin: 6,
          hasRadius: true,
          children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", alignItems: "start", gap: 6, children: [
            /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { direction: "column", alignItems: "start", gap: 0, children: [
              /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "alpha", children: i18n("plugin.page.homepage.section.quick-actions.title", "Global Actions") }),
              /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { variant: "epsilon", children: i18n("plugin.page.homepage.section.quick-actions.description", "Import and export data from all your content types at once.") })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(index.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { direction: "column", alignItems: "start", gap: 4, children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 4, children: [
              /* @__PURE__ */ jsxRuntime.jsx(index.ImportModal, {}),
              /* @__PURE__ */ jsxRuntime.jsxs(index.Modal.Root, { onOpenChange: state.handleOpenChange, children: [
                /* @__PURE__ */ jsxRuntime.jsx(index.Modal.Trigger, { children: /* @__PURE__ */ jsxRuntime.jsx(index.Button, { startIcon: /* @__PURE__ */ jsxRuntime.jsx(index.ForwardRef$3V, {}), children: i18n("plugin.cta.export", "Export") }) }),
                state.isOpen && /* @__PURE__ */ jsxRuntime.jsxs(index.Modal.Content, { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(index.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(index.Modal.Title, { children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 2, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { fontWeight: "bold", textColor: "neutral800", tag: "h2", id: "title", children: i18n("plugin.cta.export", "Export") }),
                    /* @__PURE__ */ jsxRuntime.jsx(index.Typography, { textColor: "neutral800", tag: "h2", id: "title", children: state.isSlugWholeDb ? i18n("plugin.export.whole-database", "Whole database") : state.slug })
                  ] }) }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(index.Modal.Body, { children: /* @__PURE__ */ jsxRuntime.jsx(index.ExportModalContent, { state }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(index.Modal.Footer, { children: /* @__PURE__ */ jsxRuntime.jsx(index.ExportModalFooter, { state }) })
                ] })
              ] })
            ] }) }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(index.Box, { padding: 6, paddingTop: 3, paddingBottom: 0, children: /* @__PURE__ */ jsxRuntime.jsx(Preferences$1, {}) }),
      /* @__PURE__ */ jsxRuntime.jsx(index.Box, { padding: 6, paddingTop: 3, paddingBottom: 0, children: /* @__PURE__ */ jsxRuntime.jsx(About$1, {}) })
    ] })
  ] }) }) });
};
const HomePage$1 = React.memo(HomePage);
const App = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { index: true, element: /* @__PURE__ */ jsxRuntime.jsx(HomePage$1, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "*", element: /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Error, {}) })
  ] });
};
exports.App = App;
//# sourceMappingURL=App-f6dkEhXs.js.map
