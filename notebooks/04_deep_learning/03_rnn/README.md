# Recurrent Neural Networks (RNN) 🔄

Learn sequential data processing for time series, predictions, and sequence generation.

## 📚 What You'll Learn

- RNN fundamentals and architecture
- Vanishing/exploding gradient problems
- Long Short-Term Memory (LSTM)
- Gated Recurrent Units (GRU)
- Sequence encoding
- Time series prediction
- Sequence generation

## 📁 Notebook Structure

| # | Notebook | Duration | Topics |
|---|----------|----------|--------|
| 1️⃣ | 01_rnn_basics | 2 hrs | RNN architecture & theory |
| 2️⃣ | 02_rnn_numpy_implementation | 2 hrs | Build RNN from scratch |
| 3️⃣ | 03_integer_encoding | 1.5 hrs | Sequence encoding |

## 🎯 Key Concepts

### RNN Architecture
```
h_t = activation(W_h·h_{t-1} + W_x·x_t + b)
y_t = W_y·h_t + b
```

- **h_t**: Hidden state at time t
- **h_{t-1}**: Previous hidden state (memory)
- **x_t**: Input at time t
- **W_h, W_x, W_y**: Weight matrices

### Problems with Basic RNNs
- **Vanishing Gradients**: Gradients shrink over time
- **Exploding Gradients**: Gradients grow exponentially
- **Long-term Dependencies**: Hard to learn

### LSTM (Long Short-Term Memory)
Central mechanism: **Memory cell** with gates

```
Forget Gate: f_t = σ(W_f·[h_{t-1}, x_t] + b_f)
Input Gate:  i_t = σ(W_i·[h_{t-1}, x_t] + b_i)
Cell Update: C̃_t = tanh(W_c·[h_{t-1}, x_t] + b_c)
Cell State:  C_t = f_t ⊙ C_{t-1} + i_t ⊙ C̃_t
Output Gate: o_t = σ(W_o·[h_{t-1}, x_t] + b_o)
Hidden:      h_t = o_t ⊙ tanh(C_t)
```

### GRU (Gated Recurrent Unit)
- Simplified LSTM with fewer parameters
- Similar performance with less computation
- Good for smaller datasets

## 💻 Code Pattern

### Basic RNN
```python
from tensorflow.keras.layers import SimpleRNN
model.add(SimpleRNN(64, return_sequences=True, input_shape=(timesteps, features)))
```

### LSTM (Recommended)
```python
from tensorflow.keras.layers import LSTM
model.add(LSTM(64, return_sequences=True, input_shape=(timesteps, features)))
model.add(LSTM(32))
model.add(Dense(1))
```

### Complete Example
```python
from tensorflow.keras import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

model = Sequential([
    LSTM(128, return_sequences=True, input_shape=(30, 1)),  # 30 time steps
    Dropout(0.2),
    LSTM(64),
    Dense(32, activation='relu'),
    Dense(1)  # Regression output
])

model.compile(optimizer='adam', loss='mse')
model.fit(X_train, y_train, epochs=50, batch_size=16)
```

## 📊 RNN Variants

| Type | Use Case | Output |
|------|----------|--------|
| **Many-to-One** | Sentiment analysis, classification | Single output |
| **One-to-Many** | Image captioning, music generation | Sequence output |
| **Many-to-Many (aligned)** | Named entity recognition | Same-length sequence |
| **Many-to-Many (seq2seq)** | Machine translation | Different-length sequence |

## 🔗 Attention Mechanism

Modern RNNs use attention to focus on relevant parts:
```
Attention(Query, Key, Value) = softmax(Q·K^T/√d)·V
```

Allows models to:
- Look back at all previous states
- Focus on relevant context
- Solve longer sequence problems

## 📈 Applications

### Time Series
- Stock price prediction
- Weather forecasting
- Sensor data analysis
- Traffic prediction

### Sequence Generation
- Text generation
- Music composition
- Sequence completion

### Sequence Translation
- Machine translation
- Speech recognition
- Video captioning

### Classification
- Sentiment analysis
- Named entity recognition
- Spam detection

## 🚀 Quick Start

1. Start with **01_rnn_basics.ipynb**
2. Understand RNN theory and structure
3. Walk through **02_rnn_numpy_implementation.ipynb**
4. Learn sequence encoding in **03_integer_encoding.ipynb**
5. Apply to your own sequential data

## 💡 Best Practices

✅ **DO:**
- Use LSTM for most tasks
- Normalize input sequences
- Use sequences of reasonable length
- Monitor validation loss
- Try stacking multiple layers
- Add dropout for regularization

❌ **DON'T:**
- Use basic RNN (use LSTM/GRU)
- Forget to normalize data
- Use extremely long sequences
- Chain too many layers
- Ignore data preprocessing
- Train on GPU-incompatible data

## 📊 Comparing RNN Types

| Aspect | Basic RNN | LSTM | GRU |
|--------|-----------|------|-----|
| Parameters | Low | High | Medium |
| Training Speed | ⚡⚡⚡ | ⚡ | ⚡⚡ |
| Long Dependencies | ❌ | ✅ | ✅ |
| Practical Use | Rarely | Often | Recommended |

## 🔗 After RNNs

Explore:
- **Attention Mechanisms**: Focus on relevant inputs
- **Transformers**: Attention-based, no recurrence
- **Seq2Seq Models**: For translation tasks
- **Bidirectional RNNs**: Process forwards and backwards

---

**Ready to Learn Sequential Patterns? Let's Go! 🔄**
