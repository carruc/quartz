---
title: 💻 85 days of CUDA
date: 2025-03-10
---
I'm documenting my `85 days of CUDA` challenge right here! At the [[85-days-of-CUDA.md#Projects|end]] of the page, you can see some possible real-world projects to apply the knowledge gained. 

For inspiration, check [hamdi](https://github.com/a-hamdi/GPU/tree/main?tab=readme-ov-file#gpu-100-days-learning-journey)'s and [cata](https://github.com/1y33/100Days?tab=readme-ov-file#project-progress-and-tasks)'s repos. Here's the "[leaderboard](https://github.com/hkproj/100-days-of-gpu/blob/main/CUDA.md#100-days-of-cuda-challenge)"!

---

# Schedule
## Introduction to CUDA and Parallel Computing
- [x] `Day 1`: Vector Addition (Ch 2.2-2.7) > [commit](https://github.com/carruc/85-days-of-CUDA/commit/89998af3f06f36aa83bd67bbac838f390d3ce727)
- [x] `Day 2`: Device Properties Report (Ch 4.8) > [commit](https://github.com/carruc/85-days-of-CUDA/commit/6b2f81a88dbe0b11559af74b2e017f67cc472756)
- [x] `Day 3`: CUDA Program Structure & Compilation (Ch 2.2, 2.7) > [commit](https://github.com/carruc/85-days-of-CUDA/commit/268601d57310bd5adff7d09e331e7e18b3056cd6)

## Memory Management Fundamentals
- [x] `Day 4`: Memory Transfer Patterns (Ch 2.4, 5.2) - Host-device
- [ ] `Day 5`: Simple Array Transformations (Ch 2.5-2.6)
- [ ] `Day 6`: Error Handling in CUDA
- [ ] `Day 7`: Memory Hierarchy Overview (Ch 5.2) - Introduction to GPU memory types

## Thread Organization
- [ ] `Day 8`: Thread Indexing and Organization (Ch 2.5, 3.1) - Understanding thread hierarchy
- [ ] `Day 9`: 1D Stencil Operations (Ch 8.2)
- [ ] `Day 10`: Multidimensional Grids (Ch 3.1-3.2) - Working with 2D/3D data

## Matrix Operations
- [ ] `Day 11`: Matrix Addition (Ch 3.2) - 2D thread organization
- [ ] `Day 12`: Matrix Transpose (Ch 5.3, 6.1) - Memory access patterns
- [ ] `Day 13`: Basic Matrix Multiplication (Ch 3.4)
- [ ] `Day 14`: Image Blur Implementation (Ch 3.3)

## Function Types and Execution Control
- [ ] `Day 15`: Function Type Demonstration (Device, Host, Global) - Function qualifiers
- [ ] `Day 16`: Control Divergence (Ch 4.5)
- [ ] `Day 17`: Warp Execution Model (Ch 4.4) - SIMD execution

## Basic Optimization Techniques
- [ ] `Day 18`: Boundary Condition Handling (Ch 5.5) - Robust kernel design
- [ ] `Day 19`: Thread Coarsening Intro (Ch 6.3)
- [ ] `Day 20`: Memory Coalescing Basics (Ch 6.1) - Efficient memory access

## Shared Memory
- [ ] `Day 21`: Shared Memory Basics (Ch 5.2-5.3) - Introduction to fast on-chip memory
- [ ] `Day 22`: Tiled Matrix Multiplication (Ch 5.4) - Using shared memory for performance
- [ ] `Day 23`: Shared Memory Bank Conflicts (Ch 5.2) - Understanding and avoiding conflicts
- [ ] `Day 24`: Shared Memory Reduction (Ch 10.6) - Efficient parallel reduction

## Specialized Memory Types
- [ ] `Day 25`: Constant Memory Basics (Ch 7.3) - Read-only cached memory
- [ ] `Day 26`: Constant Memory Convolution (Ch 7.3-7.4)
- [ ] `Day 27`: Texture Memory Basics - Benefits for spatial locality
- [ ] `Day 28`: Unified Memory Introduction

## Performance Analysis
- [ ] `Day 29`: Occupancy Calculation (Ch 4.7, 5.6) - Understanding resource limitations
- [ ] `Day 30`: Latency Hiding Techniques (Ch 6.2) - Improving throughput
- [ ] `Day 31`: Performance Profiling Basics

## Reduction and Scan Patterns
- [ ] `Day 32`: Basic Parallel Reduction (Ch 10.2-10.3) - Summing arrays efficiently
- [ ] `Day 33`: Optimized Reduction (Ch 10.4-10.7) 
- [ ] `Day 34`: Prefix Sum Introduction (Ch 11.1-11.2) - Kogge-Stone algorithm
- [ ] `Day 35`: Work-Efficient Scan (Ch 11.3-11.5) - Brent-Kung algorithm

## Image Processing Applications
- [ ] `Day 36`: Grayscale Image Processing (Ch 3.3)
- [ ] `Day 37`: Edge Detection Filters (Ch 7.2) - Convolution applications
- [ ] `Day 38`: Histogram Calculation (Ch 9.2-9.3) - Using atomic operations
- [ ] `Day 39`: Histogram Optimization (Ch 9.4-9.6) - Advanced techniques

## Synchronization and Atomics
- [ ] `Day 40`: Block Synchronization (Ch 4.3)
- [ ] `Day 41`: Basic Atomic Operations (Ch 9.2)
- [ ] `Day 42`: Atomic Optimization Strategies (Ch 9.4-9.6)

## Streams and Concurrency
- [ ] `Day 43`: CUDA Streams Basics (Ch 20.3-20.4) - Asynchronous operations
- [ ] `Day 44`: Stream Concurrency Patterns (Ch 20.5) - Overlapping execution
- [ ] `Day 45`: Multi-GPU Programming Intro
- [ ] `Day 46`: Asynchronous Memory Operations

## Dynamic Parallelism and Advanced Patterns
- [ ] `Day 47`: Dynamic Parallelism Basics (Ch 21.2) - Launching kernels from kernels
- [ ] `Day 48`: Recursive Algorithms with Dynamic Parallelism (Ch 21.4) - Quadtrees
- [ ] `Day 49`: Merge Operations (Ch 12.2-12.4) - Parallel merging
- [ ] `Day 50`: Sparse Matrix Basics (Ch 14.2) - Working with non-dense data

## Sorting and Graph Algorithms
- [ ] `Day 51`: Radix Sort Implementation (Ch 13.2-13.3) - Parallel sorting
- [ ] `Day 52`: Optimizing Radix Sort (Ch 13.4-13.6) - Performance improvements
- [ ] `Day 53`: Graph Representation in CUDA (Ch 15.1) - Data structures
- [ ] `Day 54`: Breadth-First Search (Ch 15.2-15.3) - Vertex-centric approach
- [ ] `Day 55`: Edge-Centric Graph Traversal (Ch 15.4) - Alternative approach

## CUDA Libraries and Integration
- [ ] `Day 56`: cuBLAS Introduction - Basic linear algebra
- [ ] `Day 57`: cuBLAS Matrix Operations
- [ ] `Day 58`: cuFFT Basics
- [ ] `Day 59`: Thrust Library Introduction - High-level parallel algorithms
- [ ] `Day 60`: Python Integration with CUDA - PyCUDA or Numba

## Mini-Projects and Future Directions
- [ ] `Day 61`: Deep Learning Basics with CUDA (Ch 16.1-16.2) - CNN fundamentals
- [ ] `Day 62`: Implementing a Simple CNN Layer (Ch 16.3) - CUDA inference kernel
- [ ] `Day 63`: Scientific Computing Project - MRI Reconstruction (Ch 17) or Electrostatic Potential (Ch 18)
- [ ] `Day 64`: Open Source Contribution Planning
- [ ] `Day 65`: Future of GPU Computing (Ch 22.5, 23.2)

---

# Theory Notes
Some sparse concepts found while studying "Programming Massively Parallel Processors" by Hwu, Kirk and El Izzat (4th edition).

---
# Projects
#### Library Integration
- [ ] [cuBLAS Integration](https://docs.nvidia.com/cuda/cublas/index.html) (Ch18.3)
- [ ] [cuFFT Filtering](https://docs.nvidia.com/cuda/cufft/index.html) (Ch19.2)
- [ ] [cuDNN Basics](https://developer.nvidia.com/cudnn)
- [ ] [Thrust Library Projects](https://github.com/NVIDIA/thrust)

#### Deep Learning
- [ ] [PyTorch CUDA Extensions](https://pytorch.org/tutorials/advanced/cpp_extension.html)
- [ ] [Custom LayerNorm Implementation](https://github.com/NVIDIA/apex)
- [ ] [Fused Attention Kernels](https://github.com/NVIDIA/apex/tree/master/apex/contrib/csrc/multihead_attn)
- [ ] [Flash Attention v2 Implementation](https://github.com/Dao-AILab/flash-attention)

#### Open Source Contributions
- [ ] [RAPIDS Ecosystem](https://github.com/rapidsai) (cuDF, cuML)
- [ ] [PyTorch CUDA Kernels](https://github.com/pytorch/pytorch/issues?q=is%3Aopen+is%3Aissue+label%3A%22module%3A+cuda%22)
- [ ] [TensorFlow CUDA Operations](https://github.com/tensorflow/tensorflow/issues?q=is%3Aopen+is%3Aissue+label%3Acomp%3Agpu)
- [ ] [Numba CUDA Extensions](https://github.com/numba/numba/issues?q=is%3Aopen+is%3Aissue+label%3ACUDA)
- [ ] [XGBoost GPU Acceleration](https://github.com/dmlc/xgboost/issues?q=is%3Aopen+is%3Aissue+label%3A%22gpu+support%22)

#### Personal Projects
- [ ] GPU-Accelerated Simulation (Physics, Fluid Dynamics)
- [ ] Custom Image Processing Pipeline
- [ ] Cryptography Acceleration
- [ ] Scientific Computing Applications
- [ ] [GPU Path Tracer](https://github.com/RayTracing/raytracing.github.io)

#### Research Areas
- [ ] [Sparse Matrix Operations](https://github.com/NVIDIA/cutlass)
- [ ] [Graph Analytics Algorithms](https://github.com/rapidsai/cugraph)
- [ ] [Ray Tracing Optimization](https://developer.nvidia.com/rtx/ray-tracing)
- [ ] [Quantum Computing Simulation](https://github.com/NVIDIA/cuQuantum)
- [ ] [GPU-Accelerated Molecular Dynamics](https://github.com/openmm/openmm)
