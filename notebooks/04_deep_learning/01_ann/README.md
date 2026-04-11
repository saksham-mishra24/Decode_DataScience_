# Artificial Neural Networks (ANN) 🧠

Build and train neural networks from first principles to practical implementations.

## 📚 What You'll Learn

- Neuron structure and activation functions
- Multi-layer perceptrons
- Forward propagation
- Backpropagation algorithm
- Gradient descent optimization
- Training dynamics and convergence
- MNIST digit classification

## 📁 Notebooks

| Notebook | Topics |
|----------|--------|
| 04_mnist_classification | End-to-end ANN example |

## 🎯 Key Concepts

### Single Neuron
```
z = w·x + b
a = activation(z)
```

### Multi-Layer Network
```
Input → Hidden₁ → Hidden₂ → ... → Output
```

### Backpropagation
Chain rule applied to compute gradients for each layer.

### Activation Functions
- **Sigmoid**: Output in (0,1), good for binary classification
- **ReLU**: max(0,x), prevents vanishing gradients
- **Tanh**: Output in (-1,1), zero-centered
- **Softmax**: Multi-class probabilities

## 💻 Implementation Pattern

```python
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

# Build model
model = Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])

# Compile
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train
model.fit(X_train, y_train, epochs=10, batch_size=32)

# Evaluate
model.evaluate(X_test, y_test)
```

## 🚀 Quick Start

1. Open **04_mnist_classification.ipynb**
2. Understand network architecture
3. Follow forward/backward pass
4. Train and evaluate
5. Experiment with hyperparameters

---

**Next: Move to CNN for image-specific architectures →**
