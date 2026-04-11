"""
Global Configuration File
Define paths and constants for the ML Learning & Portfolio Project
"""

from pathlib import Path

# ============================================
# PROJECT PATHS
# ============================================
PROJECT_ROOT = Path(__file__).parent
DATA_DIR = PROJECT_ROOT / "data"
DATASETS_DIR = PROJECT_ROOT / "datasets"
OUTPUT_DIR = PROJECT_ROOT / "output"
MODELS_DIR = OUTPUT_DIR / "models"
PLOTS_DIR = OUTPUT_DIR / "plots"

# ============================================
# DATASET PATHS
# ============================================
PET_IMAGES_DIR = DATASETS_DIR / "pet_images"
CHURN_DATA_PATH = DATASETS_DIR / "churn_data" / "Churn_Modelling.csv"
MNIST_DIR = DATASETS_DIR / "mnist"

# ============================================
# SOURCE CODE PATH
# ============================================
SRC_DIR = PROJECT_ROOT / "src"

# ============================================
# TRAINING CONFIGURATION
# ============================================
RANDOM_STATE = 42
TEST_SIZE = 0.2
VALIDATION_SIZE = 0.2
BATCH_SIZE = 32
EPOCHS = 50

# ============================================
# MODEL CONFIGURATION
# ============================================
LEARNING_RATE = 0.001
EARLY_STOPPING_PATIENCE = 5

# ============================================
# LOGGING
# ============================================
LOG_DIR = OUTPUT_DIR / "logs"
LOG_FILE = LOG_DIR / "training.log"

# Create directories if they don't exist
DATA_DIR.mkdir(parents=True, exist_ok=True)
DATASETS_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
MODELS_DIR.mkdir(parents=True, exist_ok=True)
PLOTS_DIR.mkdir(parents=True, exist_ok=True)
LOG_DIR.mkdir(parents=True, exist_ok=True)
