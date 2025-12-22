import js from "@eslint/js"; // Подключение стандартного набора правил JS
import react from "eslint-plugin-react"; // Подключаем правила для React
import reactHooks from "eslint-plugin-react-hooks"; // Подключаем хуки React
import jsxA11y from "eslint-plugin-jsx-a11y"; // Подключаем правила доступности
import typescriptPlugin from "@typescript-eslint/eslint-plugin"; // Подключаем правила для TypeScript
import typescriptParser from "@typescript-eslint/parser"; // Парсер для TypeScript
import globals from "globals"; // Глобальные переменные браузера
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Типы файлов для проверки
    ignores: [
      "node_modules",
      "build",
      "dist",
      "target",
      "*.env*",
      "*.config.js",
    ], // Пути и файлы, которые нужно игнорировать
    languageOptions: {
      parser: typescriptParser, // Передаём объект парсера, а не строку
      ecmaVersion: "latest", // Используем последнюю версию ECMAScript
      sourceType: "module", // Модули ES
      globals: {
        ...globals.browser, // Добавляем переменные окружения для браузера
      },
    },
    plugins: {
      react, // Подключаем React
      import: importPlugin,
      "react-hooks": reactHooks, // Подключаем хуки React
      "jsx-a11y": jsxA11y, // Подключаем доступность
      "@typescript-eslint": typescriptPlugin,
    },
    settings: {
      react: {
        version: "detect", // Автоматическое определение версии React
      },
      "import/resolver": {
        alias: {
          map: [
            ["@app/components", "./src/components"],
            ["@app/common/types", "./src/common/types"],
            ["@app/common/grid", "./src/common/grid"],
            ["@app/common", "./src/common"],
            ["@app/tokens", "./src/common/tokens"],
            ["@app/utils", "./src/utils"],
            ["@app/assets", "./src/assets"],
            ["@app/redux", "./src/redux"],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"], // Поддерживаемые расширения
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"], // Расширения для Node.js
        },
        typescript: {
          alwaysTryTypes: true, // Разрешаем получать типы из @types
          project: "./tsconfig.json", // Ссылка на tsconfig.json
        },
      },
    },
    rules: {
      // Общие правила
      "no-multiple-empty-lines": ["error", { max: 2 }],
      "no-console": [
        "error",
        {
          allow: ["warn", "error"], // Разрешаем console.warn и console.error
        },
      ],
      "object-shorthand": "error",
      "newline-before-return": "error",
      "no-useless-rename": "error",

      // Типизация
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      // React
      "react/react-in-jsx-scope": "off", // React 17+ не требует импортировать React
      "react/self-closing-comp": "error",
      "react/display-name": "error",
      "react/jsx-no-bind": "warn",
      "react/jsx-key": "warn",
      "react/jsx-boolean-value": "warn",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Import
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@app/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      // Доступность
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
      "jsx-a11y/label-has-associated-control": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",

      // Объекты
      "object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1,
          },
        },
      ],
      "object-property-newline": "error",
    },
  },
];
