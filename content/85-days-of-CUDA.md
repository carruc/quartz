---
title: 💻 85 days of CUDA
date: 2025-03-10
---
#### First week: Learning the basics
- [x] `Day 1:` Vector addition (Ch3.2 Kernel Functions)
    ```sh
    carruc@carruc-mint:~/repos/85days-of-cuda/day1-vadd$ ./vectorAdd 
    vectorAdd( num_elems = 10000 )
    vAdd: CUDA kernel launch with 40 blocks of 256 threads
    vAdd: Test accomplished
    ```
- [ ] Day 2: Device Properties Report (Ch4.1)
- [ ] Day 3: Memory Transfer Patterns (Ch5.1)
- [ ] Day 4: Simple Array Transformations
- [ ] Day 5: 1D Stencil Operations

## Basic Kernel Optimization
- [ ] Day 6: Matrix Addition
- [ ] Day 7: Matrix Transpose (Ch5.3 Memory Coalescing)
- [ ] Day 8: Function Type Demonstration (Ch6.1 Function Qualifiers)
- [ ] Day 9: Basic Reduction
- [ ] Day 10: Grayscale Image Processing (Ch7.2)

## Memory Hierarchy
- [ ] Day 11: Edge Detection Filters (Ch7.2)
- [ ] Day 12: Shared Memory Basics
- [ ] Day 13: Shared Memory Reduction (Ch8.3)
- [ ] Day 14: Tiled Matrix Multiplication
- [ ] Day 15: Optimized Matrix Multiplication (Ch9.4)
- [ ] Day 16: Constant Memory Basics
- [ ] Day 17: Constant Memory Convolution (Ch10.2)
- [ ] Day 18: Texture Memory Basics
- [ ] Day 19: Texture Memory Rotation (Ch11.1)
- [ ] Day 20: Unified Memory Basics

## Advanced Optimization
- [ ] Day 21: Unified Memory Profiling (Ch12.3)
- [ ] Day 22: Warp-Level Primitives (Ch13.2)
- [ ] Day 23: Basic Atomic Operations
- [ ] Day 24: Atomic Histogram (Ch14.1)
- [ ] Day 25: Stream Basics
- [ ] Day 26: Stream Concurrency Patterns (Ch15.4)
- [ ] Day 27: Dynamic Parallelism Basics
- [ ] Day 28: Dynamic Parallelism Meshing (Ch16.2)
- [ ] Day 29: PTX Introduction
- [ ] Day 30: PTX Assembly Tuning (Ch17.1)

## Real-World Projects

### Library Integration
- [ ] [cuBLAS Integration](https://docs.nvidia.com/cuda/cublas/index.html) (Ch18.3)
- [ ] [cuFFT Filtering](https://docs.nvidia.com/cuda/cufft/index.html) (Ch19.2)
- [ ] [cuDNN Basics](https://developer.nvidia.com/cudnn)
- [ ] [Thrust Library Projects](https://github.com/NVIDIA/thrust)

### Deep Learning
- [ ] [PyTorch CUDA Extensions](https://pytorch.org/tutorials/advanced/cpp_extension.html)
- [ ] [Custom LayerNorm Implementation](https://github.com/NVIDIA/apex)
- [ ] [Fused Attention Kernels](https://github.com/NVIDIA/apex/tree/master/apex/contrib/csrc/multihead_attn)
- [ ] [Flash Attention v2 Implementation](https://github.com/Dao-AILab/flash-attention)

### Open Source Contributions
- [ ] [RAPIDS Ecosystem](https://github.com/rapidsai) (cuDF, cuML)
- [ ] [PyTorch CUDA Kernels](https://github.com/pytorch/pytorch/issues?q=is%3Aopen+is%3Aissue+label%3A%22module%3A+cuda%22)
- [ ] [TensorFlow CUDA Operations](https://github.com/tensorflow/tensorflow/issues?q=is%3Aopen+is%3Aissue+label%3Acomp%3Agpu)
- [ ] [Numba CUDA Extensions](https://github.com/numba/numba/issues?q=is%3Aopen+is%3Aissue+label%3ACUDA)
- [ ] [XGBoost GPU Acceleration](https://github.com/dmlc/xgboost/issues?q=is%3Aopen+is%3Aissue+label%3A%22gpu+support%22)

### Personal Projects
- [ ] GPU-Accelerated Simulation (Physics, Fluid Dynamics)
- [ ] Custom Image Processing Pipeline
- [ ] Cryptography Acceleration
- [ ] Scientific Computing Applications
- [ ] [GPU Path Tracer](https://github.com/RayTracing/raytracing.github.io)

### Research Areas
- [ ] [Sparse Matrix Operations](https://github.com/NVIDIA/cutlass)
- [ ] [Graph Analytics Algorithms](https://github.com/rapidsai/cugraph)
- [ ] [Ray Tracing Optimization](https://developer.nvidia.com/rtx/ray-tracing)
- [ ] [Quantum Computing Simulation](https://github.com/NVIDIA/cuQuantum)
- [ ] [GPU-Accelerated Molecular Dynamics](https://github.com/openmm/openmm)
