const completionSpec: Fig.Spec = {
  name: "circleci",
  description: "CircleCI CLI",
  subcommands: [
    {
      name: "completion",
      description: "Generate shell completion scripts",
      options: [
        {
          name: "bash",
          description: "Generate bash completion scripts",
        },
        {
          name: "zsh",
          description: "Generate zsh completion scripts",
        },
      ],
    },
    {
      name: "config",
      description: "Operate on build config files",
      options: [
        {
          name: "pack",
          description: "Pack CircleCI config files into a single file",
        },
        {
          name: "process",
          description: "Validate and display extended config",
        },
        {
          name: "validate",
          description: "Checks that config is valid",
        },
      ],
    },
    {
      name: "context",
      description: "Secure and share environment variables across projects",
    },
    {
      name: "diagnostic",
      description: "Check the status of your CircleCI CLI",
    },
    {
      name: "follow",
      description: "Attempt to follow the project for the current git repo",
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "local",
      description: "Debug jobs on the local machine",
    },
    {
      name: "namespace",
      description: "Operate on namespaces",
    },
    {
      name: "open",
      description: "Open the current project in the browser",
    },
    {
      name: "orb",
      description: "Operate on orbs",
    },
    {
      name: "runner",
      description: "Operate on runners",
    },
    {
      name: "setup",
      description: "Setup CLI with your credentials",
    },
    {
      name: "update",
      description: "Update and switch to new CLI version",
    },
    {
      name: "version",
      description: "Display CircleCI CLI version",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for CircleCI",
    },
    {
      name: "--skip-update-check",
      description: "Skip update check before every command",
    },
  ],
};
export default completionSpec;
