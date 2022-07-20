module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["airbnb", "plugin:prettier/recommended"],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
        "arrow-body-style": ["error", "always"],
    },
};
