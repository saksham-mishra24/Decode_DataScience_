# Deep Learning: Neural Networks 🧠

From Artificial Neural Networks to Convolutional and Recurrent Networks for modern AI applications.

## 📚 Module Overview

This comprehensive module covers deep learning from fundamentals to advanced architectures:
- **01_ann/**: Artificial Neural Networks (ANN) foundations
- **02_cnn/**: Convolutional Neural Networks for images
- **03_rnn/**: Recurrent Neural Networks for sequences

### Learning Objectives
By completing this module, you will:
- ✅ Build neural networks from first principles
- ✅ Understand backpropagation and gradient descent
- ✅ Master CNN architectures for computer vision
- ✅ Apply RNNs for sequential data
- ✅ Use TensorFlow/Keras for production models
- ✅ Implement transfer learning
- ✅ Design custom architectures

### Prerequisites
- ✓ Complete all previous modules
- ✓ Strong math foundation (calculus, linear algebra)
- ✓ Python proficiency
- ✓ GPU recommended (optional but beneficial)

## 📁 Module Structure

```
04_deep_learning/
├── README.md (this file)
│
├── 01_ann/                          # Artificial Neural Networks
│   ├── README.md
│   ├── 04_mnist_classification.ipynb
│   └── (theory notebooks)
│
├── 02_cnn/                          # Convolutional Networks
│   ├── README.md
│   ├── 00_cnn_students.ipynb
│   ├── 01_convolution_operation.ipynb
│   ├── 02_padding_strategies_demo.ipynb
│   ├── 02_pooling_demo.ipynb
│   ├── 03_padding_strategies.ipynb
│   ├── 04_cnn_architecture.ipynb
│   ├── 05_transfer_learning.ipynb
│   ├── 06_custom_architectures.ipynb
│   ├── 07_image_classification_project.ipynb
│   └── (related notebooks)
│
├── 03_rnn/                          # Recurrent Networks
│   ├── README.md
│   ├── 01_rnn_basics.ipynb
│   ├── 02_rnn_numpy_implementation.ipynb
│   ├── 03_integer_encoding.ipynb
│   └── (related notebooks)
│
└── README.md                        # Module overview (this file)
```

## 🗺️ Learning Progression

### Phase 1: ANN Fundamentals (Weeks 1-2)
**Time: 10-12 hours**
- Neural network architecture basics
- Forward propagation
- Backpropagation algorithm
- Activation functions
- MNIST classification example

**Key Concepts:**
- Neurons, layers, connections
- Sigmoid, ReLU, Tanh activations
- Loss functions for deep learning
- Training dynamics

### Phase 2: Convolutional Networks (Weeks 3-5)
**Time: 12-15 hours**
- Convolution operation explained
- Padding and stride concepts
- Pooling operations
- CNN architectures (LeNet, AlexNet, VGG)
- Transfer learning
- Custom CNN designs
- Real image classification

**Key Concepts:**
- Feature maps and filters
- Spatial hierarchy
- Learned features
- Pre-trained models
- Fine-tuning

### Phase 3: Recurrent Networks (Weeks 6-7)
**Time: 10-12 hours**
- RNN fundamentals
- LSTM and GRU cells
- Sequence processing
- Integer encoding
- Time series prediction

**Key Concepts:**
- Sequence dependencies
- Vanishing gradient problem
- Gate mechanisms
- Sequence generation

## 📊 Architecture Comparison

| Architecture | Input | Output | Use Case |
|---|---|---|---|
| **ANN** | Flat vectors | Classification | Tabular data |
| **CNN** | Images | Class/Segmentation | Computer vision |
| **RNN** | Sequences | Prediction/Class | Time series, NLP |
| **Hybrid** | Images+Seq | Complex | Multimodal learning |

## 💻 TensorFlow/Keras Quick Reference

### Build Simple Model
```python
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Conv2D, LSTM

model = Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])
```

### Compile and Train
```python
model.compile(optimizer='adam', 
              loss='categorical_crossentropy',
              metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10, validation_split=0.2)
```

### Evaluate
```python
test_loss, test_acc = model.evaluate(X_test, y_test)
predictions = model.predict(X_test)
```

## 🎯 Common Applications

### ANN
- Tabular data classification
- Regression problems
- Feature transformation

### CNN
- Image classification
- Object detection
- Image segmentation
- Style transfer

### RNN
- Time series forecasting
- Stock price prediction
- Text generation
- Machine translation

## 📈 Training Deep Networks

### Key Techniques
1. **Batch Normalization**: Accelerate training
2. **Dropout**: Prevent overfitting
3. **Early Stopping**: Stop when validation loss plateaus
4. **Learning Rate Scheduling**: Adjust learning rate over time
5. **Data Augmentation**: Increase effective dataset size

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Very slow training | Reduce model size, use GPU |
| Not converging | Lower learning rate, normalize data |
| Overfitting | Add dropout, reduce model size |
| Vanishing gradients | Use ReLU, batch norm, LSTM |
| Worse after epochs | Learning rate too high, early stop |

## 🚀 Getting Started

### Recommended Path
1. **Start**: `01_ann/04_mnist_classification.ipynb`
2. **Understand**: ANN fundamentals first
3. **Progress**: Move to CNN for images
4. **Finish**: RNN for sequences

### For Each Submodule
- Read module README
- Study theory notebooks
- Practice with code examples
- Complete exercises
- Compare with solutions

## 🔗 Integration with Previous Modules

### How Deep Learning Extends Prior Concepts
- **Logistic Regression** → Single neuron
- **Decision Trees** → Non-linear boundaries → ANN
- **SVM Kernels** → Complex decision surfaces → Deep networks
- **All Previous** → Feature learning automatically

## 📚 Additional Resources

### Frameworks
- TensorFlow/Keras
- PyTorch (alternative)
- JAX (advanced)

### Online Courses
- Stanford CS231n (Computer Vision)
- Fast.ai (Practical Deep Learning)
- Andrew Ng Deep Learning Specialization

### Books
- Deep Learning (Goodfellow et al.)
- Neural Networks (Michael Nielsen)

## 💡 Tips for Success

✅ **DO:**
- Understand each layer's purpose
- Visualize filters and activations
- Experiment with architectures
- Monitor training metrics
- Use pre-trained models when available

❌ **DON'T:**
- Skip theory for code
- Train huge models without GPU
- Overfit on small datasets
- Ignore data quality
- Ignore class imbalance

## 📋 Module Completion

- [ ] **ANN Module**: 01_ann/ all notebooks
- [ ] **CNN Module**: 02_cnn/ all notebooks
- [ ] **RNN Module**: 03_rnn/ all notebooks
- [ ] **Practice**: Complete at least 1 project
- [ ] **Reflection**: Compare with all previous algorithms

## 🎓 After Deep Learning

1. **Specialize**: Choose NLP, Vision, or Reinforcement Learning
2. **Deploy**: Learn model serving (Flask, Docker)
3. **Optimize**: Model compression, quantization
4. **Advance**: Attention, Transformers, LLMs
5. **Create**: Build your own research project

---

**Welcome to Deep Learning! Ready to Start? 🧠**
