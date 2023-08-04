import { RuleConfigSeverity } from "@commitlint/types";

/**
 * CONFIG AND CI/CD CHANGES
 *   build: development changes, e.g. tsconfig.json
 *   ci: development changes, e.g. workflow file
 *
 * DOCUMENTATION CHANGES
 *   docs: documentation changes, e.g. readme file or adding a jsdoc
 *
 * PRODUCTION CHANGES
 *   feat: production changes - new feature
 *   fix: production changes - bug fix
 *   perf: production changes - improve performance
 *
 * DEVELOPMENT CHANGES
 *   refactor: development changes - neither adds a feature nor fixes a bug
 *   chore: development changes - the user cant see the changes, e.g. changes in gitignore
 *   style: development changes - pure styling changes
 *   test: development changes - affecting any tests
 *   feat: development changes - new code
 *   fix: development changes - fix bug issue in the existing code
 *   perf: development changes - improve performance
 */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [RuleConfigSeverity.Warning, "always"],
    "body-max-line-length": [RuleConfigSeverity.Error, "always", 100],
    "footer-leading-blank": [RuleConfigSeverity.Warning, "always"],
    "footer-max-line-length": [RuleConfigSeverity.Error, "always", 100],
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],
    "scope-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "scope-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "page",
        "shared-component",
        "layout",
        "redux",
        "config",
        "development-needs",
        "readme",
      ],
    ],
    "subject-case": [
      RuleConfigSeverity.Error,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [RuleConfigSeverity.Error, "never"],
    "subject-full-stop": [RuleConfigSeverity.Error, "never", "."],
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "type-empty": [RuleConfigSeverity.Error, "never"],
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "chore",
        "style",
        "test",
      ],
    ],
  },
};
