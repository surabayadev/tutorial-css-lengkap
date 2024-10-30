# Contributing Guide

Thank you for your interest in contributing to this repository for Hacktoberfest 2024! We appreciate all contributions, whether you're fixing bugs, adding features, or improving documentation. Please follow the guidelines below to ensure a smooth contribution process.

## Setup Guide / Getting Started

To get started with contributing:

1. **Pick an Issue**: Browse through the [issues section](https://github.com/surabayadev/tutorial-css-lengkap/issues) and pick an issue you'd like to work on.
2. Comment on the Issue: Let us know you're working on the issue by commenting on it. This helps avoid duplicate work and lets us know the issue is being addressed.
3. Admin will assign the issue to you.
4. **Fork the Repository**: Click on the fork button to create a copy of this repository in your GitHub account.
5. **Clone Your Fork**: Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
6. Install Dependencies: Install any necessary dependencies by running the following command:
    ```bash
    pnpm install
    ```
7. Create a Branch: When you're ready to start working, create a new branch based on main.


## Branch Naming

When creating a new branch for your work, follow this naming convention:

```bash
git checkout -b feat/materi1-chapter1
```

Where `feat/materi1-chapter1` indicates the feature you're working on. Replace with the specific task or issue you're addressing.

## Commit Style

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. This ensures a consistent commit history and makes it easier to track changes. The format is:

```bash
<type>(optional scope): <description>
```

Some common commit types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no code changes)
- `refactor`: Refactoring code (neither fixes a bug nor adds a feature)

## Submitting Pull Requests

1. Once you have completed your changes, push your branch to your forked repository:
   ```bash
    git push origin your-branch-name
    ```
2. **Create a Pull Request**: Navigate to the original repository and create a pull request from your branch. Make sure to:
   - Provide a clear description of the changes.
   - Tag `@iniakunhuda` in the pull request for review.
3. **Review Process**: Your pull request will be reviewed by `@iniakunhuda`. Once approved (LGTM), it will be merged into the main branch.


Happy coding, and thank you for contributing!