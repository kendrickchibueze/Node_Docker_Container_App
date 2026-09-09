# Node.js & Docker Deployment🤷‍♂️😊✔🎗👓

**TechCrush Cohort 8 — Tutor: Yushua Akande**

A simple Node.js (Express) web app, containerized with Docker, deployed to an AWS EC2 (Linux) server, and pushed/pulled through Docker Hub, per the assignment objective: *build and deploy a Node.js application using GitHub, AWS(EC2 Linux Server), Docker, and Docker Hub.*

The app serves a single page displaying:

> Hello TechCrush Cohort 8 with Tutor Yushua Akande

- **GitHub repo:** https://github.com/kendrickchibueze/Node_Docker_Container_App
- **Docker Hub image:** [kendrickchibueze/nodejs-app:1.0](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/Image%20on%20DockerHub.png?raw=true)
- **Deployed on:** AWS EC2, Amazon Linux 2023 (t3.micro)

## Project files

- [`app.js`](./app.js) — Express server
- [`package.json`](./package.json) — dependencies and start script
- [`Dockerfile`](./Dockerfile) — container build instructions
- [`.dockerignore`](./.dockerignore) — files excluded from the Docker build context

## How it was built and deployed

### 1. Generate the application

The app was scaffolded with AI assistance (Claude) — a minimal Express server with a single route.

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Node.js app for Docker deployment assignment"
git branch -M main
git remote add origin https://github.com/kendrickchibueze/Node_Docker_Container_App.git
git push -u origin main
```


### Configure inbound rules on Ec2 Instance for port 3000:
![Inbound rule configuration on EC2 Instance](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/EC2_Inbound_Rule.png?raw=true)

### 3. Clone onto the Linux server (AWS EC2)

Connected to the EC2 instance (Amazon Linux 2023) via EC2 Instance Connect, then:

```bash
git clone https://github.com/kendrickchibueze/Node_Docker_Container_App.git
cd Node_Docker_Container_App
```

### 4. Dockerfile

 ![Dockerfile](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/dockericon.png?raw=true) 
  
The dockerfile builds from `node:20-alpine`, installs production dependencies, and runs `node app.js` on port 3000.

### We clone the Github repo in our Ec2 instance 
![git cone](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/Ec2_GitClone.png?raw=true)

### 5. Build the Docker image

```bash
docker build -t kendrickchibueze/nodejs-app:1.0 .
```

#### 📸 Screenshot: Docker build command and successful output

![Docker build command and successful output](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/EC2-Imagebuil1.png?raw=true)
![](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/Ec2-Imagebuid2.png?raw=true)

### 6. Push the image to Docker Hub

```bash
docker login
docker push kendrickchibueze/nodejs-app:1.0
```

#### 📸 Screenshot: Docker Hub repository showing the image and tag

![Docker image visible on Docker Hub](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/Image%20on%20DockerHub.png?raw=true)

### 7. Pull the image from Docker Hub

```bash
docker pull kendrickchibueze/nodejs-app:1.0
```

### 8. Run the container on EC2 Linux Server

```bash
docker run -d -p 3000:3000 kendrickchibueze/nodejs-app:1.0
docker ps
```

#### 📸 Screenshot: Running container at the EC2 Linux Server (`docker ps`)

![docker ps showing the running container](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/Ec2_docker-runningcontainer.png?raw=true)

### Live application

The EC2 instance's security group was opened on port 3000, and the app is reachable at its public IP.

#### 📸 Screenshot: Live application running

![Live application running in the browser](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/EC2-Instance-Output.png?raw=true)

### Now, Using Docker Desktop Produces the same output:

### We pull the image from docker desktop:
![using docker desktop](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/docker-dektop%20pulling%20image.png?raw=true)


#### 📸 Screenshot: Running container using docker desktop

![docker desktop showing the running container](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/container%20running%20on%20docker%20desktop.png?raw=true)

### Live application

The docker desktop runs the application on localhost and opens on port 3000

#### 📸 Screenshot: Live application running

![Live application running in the browser](https://github.com/kendrickchibueze/Node-Docker_EC2-Screenshots/blob/main/Output_docker-run.png?raw=true)

## Submission checklist

- [x] Node.js application source code
- [x] `package.json`
- [x] `Dockerfile`
- [x] `README.md`
- [x] Screenshot of the Docker image build
- [x] Screenshot of the image on Docker Hub
- [x] Screenshot of the running Docker container
- [x] Screenshot of the live application
