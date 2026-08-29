# 🛍️ Shopping Platform — DevOps & GitOps Project

A containerized shopping platform deployed to Kubernetes using a complete CI/CD and GitOps workflow.

## 🚀 Project Overview

This project demonstrates how application code can automatically move from a developer's Git commit to a running Kubernetes deployment.

The pipeline uses:

- GitHub
- GitHub Actions
- Docker
- GitHub Container Registry (GHCR)
- Kubernetes
- Minikube
- Argo CD

## 🏗️ Architecture

```text
Developer
    |
    | git push
    v
GitHub
    |
    v
GitHub Actions
    |
    +---- Build Docker Image
    |
    +---- Test Application
    |
    +---- Push Image to GHCR
    |
    +---- Update Kubernetes Manifest
    |
    v
GitHub Repository
    |
    v
Argo CD
    |
    | GitOps Sync
    v
Kubernetes / Minikube
    |
    v
Shopping Platform

## 📁 Project Structure

```text
shopping-platform/
├── .github/
│   └── workflows/
│       └── ci.yml
├── app/
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── .gitignore
├── Dockerfile
└── README.md
