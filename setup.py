"""
Setup Script for ML Learning & Portfolio Project
Allows installation as a Python package
"""

from setuptools import setup, find_packages
from pathlib import Path

# Read README
here = Path(__file__).parent.resolve()
long_description = (here / "README.md").read_text(encoding="utf-8")

setup(
    name="ml-learning-portfolio",
    version="1.0.0",
    author="Your Name",
    description="A comprehensive machine learning learning project with production code and portfolio projects",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/ml-learning-portfolio",
    package_dir={"": "src"},
    packages=find_packages("src", include=["src", "src.*"]),
    python_requires=">=3.8",
    install_requires=[
        "numpy>=1.20.0",
        "pandas>=1.3.0",
        "scikit-learn>=1.0.0",
        "tensorflow>=2.8.0",
        "matplotlib>=3.4.0",
        "jupyter>=1.0.0",
    ],
    extras_require={
        "dev": [
            "pytest>=6.0",
            "black>=20.8b1",
            "flake8>=3.8.4",
            "mypy>=0.9",
        ],
    },
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
    ],
)
