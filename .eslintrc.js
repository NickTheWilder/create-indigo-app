/* eslint-env node */

// client-side javascript rules
const config = {
    env: { browser: true },
    extends: ["eslint:recommended", "plugin:jsdoc/recommended-error", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module"
    },
    plugins: ["import", "jsdoc", "simple-import-sort", "@typescript-eslint", "css-modules", "react", "react-hooks"],
    reportUnusedDisableDirectives: true,
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        // TypeScript rules
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/no-unused-expressions": ["error"],
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-shadow": ["error", { ignoreTypeValueShadow: true }],

        // CSS Modules rules
        "css-modules/no-undef-class": "error",

        // General JavaScript rules
        eqeqeq: "error",
        "guard-for-in": "error",
        "no-console": ["error", { allow: ["warn", "error", "group", "groupEnd"] }],
        "no-eval": "error",
        "no-new-wrappers": "error",
        "no-restricted-globals": ["error", "$", "jQuery", "R"],
        "no-shadow": ["error", { hoist: "functions" }],
        "no-shadow-restricted-names": "error",
        "no-template-curly-in-string": "warn",
        "no-throw-literal": "error",
        "no-undef-init": "warn",
        "no-unused-expressions": "error",
        radix: ["error", "as-needed"],
        "sort-imports": "off",
        "spaced-comment": [
            "warn",
            "always",
            {
                block: { exceptions: ["*"], balanced: true },
                line: { markers: ["/"] }
            }
        ],
        "prefer-template": "warn",

        // Import rules
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-commonjs": "off",
        "import/no-cycle": "error",
        "import/no-default-export": "error",
        "import/no-deprecated": "warn",
        "import/no-duplicates": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-mutable-exports": "error",
        "import/no-self-import": "error",
        "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
        "import/no-useless-path-segments": "warn",
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": "warn",

        // JSDoc rules
        "jsdoc/check-tag-names": ["error", { typed: true, definedTags: ["jest-environment"] }],
        "jsdoc/no-defaults": "off",
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param": "off",
        "jsdoc/require-returns": "off",
        "jsdoc/tag-lines": ["error", "any"],

        // React and React Hooks rules
        "react/button-has-type": "error",
        "react-hooks/exhaustive-deps": ["warn", { additionalHooks: "^use(Disposables|EventHandler|StreamResult|StreamSubscription)$" }],
        "react-hooks/rules-of-hooks": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
        "react/no-unsafe": "error",
        "react/no-unused-state": "error",
        "react/prefer-stateless-function": "warn",
        "react/prop-types": "off"
    }
};

module.exports = config;
