# 🤝 Contributing Guidelines

Thank you for your interest in contributing! This document provides guidelines for contributing to the repository.

## 📋 Types of Contributions

We welcome all kinds of contributions:

### 🔧 Code Contributions
- Bug fixes in notebooks or source code
- New implementations or algorithms
- Performance improvements
- Code refactoring and cleanup

### 📚 Documentation
- Fixing or improving documentation
- Adding clarification to complex topics
- Creating tutorials or guides
- Adding code comments and docstrings

### 📝 Content
- New notebook modules
- Additional examples and use cases
- Practice problems and solutions
- Real-world project implementations

### 🐛 Bug Reports
- Report issues via GitHub Issues
- Provide clear reproduction steps
- Include error messages and environment info

## 🚀 Getting Started

### 1. Fork & Clone
```bash
# Fork repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Decode_DataScience_.git
cd Decode_DataScience_
git remote add upstream https://github.com/saksham-mishra24/Decode_DataScience_.git
```

### 2. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 3. Make Changes
- Follow coding standards (see below)
- Test your changes thoroughly
- Update documentation as needed

### 4. Commit Changes
```bash
git commit -m "Clear description of changes"
```

### 5. Push & Create Pull Request
```bash
git push origin feature/your-feature-name
# Create PR on GitHub with clear title and description
```

## 💻 Coding Standards

### Python Code Style
- Follow PEP 8 guidelines
- Use meaningful variable names
- Add type hints where appropriate
- Include docstrings for functions

```python
def calculate_entropy(target_values: np.ndarray) -> float:
    """
    Calculate Shannon entropy of a target variable.
    
    Args:
        target_values: Array of target values
        
    Returns:
        float: Entropy value between 0 and 1
    """
    # Implementation here
    pass
```

### Notebook Standards
- Clear section headers with markdown
- Explanatory text before code cells
- Meaningful variable names
- Cell outputs visible for teaching
- No large binary outputs committed

### Documentation Standards
- Use clear, simple language
- Include examples where applicable
- Update table of contents if needed
- Check for broken links

## 📝 Commit Message Format

```
[Type] Brief description (50 chars max)

Detailed explanation if needed (wrap at 72 chars)
- Bullet points for multiple items
- Reference issues with #issue_number

Example:
[Feature] Add decision tree visualization notebook
- Explains tree traversal step-by-step
- Includes pruning visualization
- Fixes #45
```

**Types**: `[Feature]` `[Fix]` `[Docs]` `[Refactor]` `[Test]`

## 🧪 Testing

Before submitting:
- Run all code cells in notebooks
- Test source code with different inputs
- Check for Python syntax errors
- Verify no large files are committed

## 📋 Pull Request Checklist

- [ ] Branch is up-to-date with `main`
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Tests pass locally
- [ ] Commit messages are clear
- [ ] No large files or sensitive data

## 🎯 Adding a New Notebook Module

When adding a new learning module:

```
notebooks/0X_topic_name/
├── README.md                 # Module overview & objectives
├── 01_introduction.ipynb     # Basic concepts
├── 02_theory.ipynb           # Mathematical foundations
├── 03_implementation.ipynb    # Practical implementation
└── 04_applications.ipynb      # Real-world applications
```

**Module README should include:**
- Learning objectives
- Prerequisites
- Topics covered
- Time estimate
- Key concepts summary

## 📚 Documentation Updates

When updating documentation:
- Keep explanations clear and concise
- Add examples for complex concepts
- Update cross-references
- Check rendering in GitHub
- Verify all links are active

## 🚫 What NOT to Commit

- Large datasets (> 10MB)
- `.ipynb_checkpoints/` directories
- `__pycache__/` directories
- Virtual environment files
- IDE configuration files (.vscode, .idea)
- System files (.DS_Store, Thumbs.db)
- Jupyter notebook outputs (large figures)

## 📞 Review Process

- A maintainer will review your PR
- Changes may be suggested for improvement
- Once approved, your contribution will be merged
- You'll be added to contributors list

## 🌟 Recognition

Contributors will be recognized in:
- Contributors section of README
- Commit history
- Community recognition
- Special roles on discussions

## ❓ Questions?

- Check existing issues and discussions
- Open a GitHub issue for clarification
- Comment on relevant discussions
- Review documentation thoroughly

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make this repository better! 🎉**
