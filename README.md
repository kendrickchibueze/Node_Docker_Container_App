# nodejs-app

A simple Node.js (Express) web app built for the **Node.js & Docker Deployment Assignment** (TechCrush Cohort 8, Tutor Yushua Akande). The app serves a single page displaying:

> Hello TechCrush Cohort 8 with Tutor Yushua Akande

It also exposes a `/health` endpoint returning `{ "status": "ok" }`.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+) and npm, for local runs
- [Docker](https://www.docker.com/) installed on your Linux server (e.g. an EC2 instance)
- A [Docker Hub](https://hub.docker.com/) account
- A GitHub repository to host this code

Replace `your-dockerhub-username` in every command below with your actual Docker Hub username.

## 1. Run locally

```bash
npm install
npm start
```

Visit `http://localhost:3000` in your browser.

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Node.js app for Docker deployment assignment"
git branch -M main
git remote add origin https://github.com/<your-github-username>/nodejs-app.git
git push -u origin main
```

## 3. Clone onto your Linux server (EC2)

```bash
ssh your-user@your-ec2-public-ip
git clone https://github.com/<your-github-username>/nodejs-app.git
cd nodejs-app
```

## 4. Build the Docker image

```bash
docker build -t your-dockerhub-username/nodejs-app:1.0 .
```

### 📸 Screenshot: Docker build command

![Docker build command and successful output](./screenshots/docker-build.png)

## 5. Push the image to Docker Hub

```bash
docker login
docker push your-dockerhub-username/nodejs-app:1.0
```

### 📸 Screenshot: Docker Hub image

![Docker image visible on Docker Hub](./screenshots/dockerhub-image.png)

## 6. Pull and run the image

```bash
docker pull your-dockerhub-username/nodejs-app:1.0
docker run -d -p 3000:3000 your-dockerhub-username/nodejs-app:1.0
docker ps
```

### 📸 Screenshot: Running container

![docker ps showing the running container](./screenshots/docker-ps.png)

## 7. View the live application

Visit `http://your-ec2-public-ip:3000` (make sure port 3000 is open in your EC2 security group).

### 📸 Screenshot: Live application

![Live application running in the browser](./screenshots/live-app.png)

## Project files

- `app.js` — Express server
- `package.json` — dependencies and start script
- `Dockerfile` — container build instructions
- `.dockerignore` — files excluded from the Docker build context
- `screenshots/` — assignment screenshots referenced above
