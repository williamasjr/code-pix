### Code-pix

This application is a simulation of a current-day pix system. Interconnecting banks from a central bank that manages them. In this application it is possible to create pix keys and transfer values between the created banks.
This application was developed in fullcycle immersion together with professors Wesley Williams and Luiz Argentina, with the objective of developing a large and scalable application focused on the needs of modern-day applications.

### Project Structure

The application has a backend built in Golang that represents the central bank, there are the entities bank, account, pix key and transfer. This central bank communicates with another backend in typescript that represents different banks that can save accounts, pix keys for transfers at the central bank. Communication between these backends is done through gRPC and Kafka. The part of the frontend made with freamwok next communicates with the backend in typescript through a rest API, having a friendly interface where the user can register new accounts, pix transfer keys and transfer amounts between banks.

<h2 id="tech">Technologies</h2>

- golang
- typescript
- react.js
- nest.js
- next.js
- kafka
- gRPC
- docker

<h4>Starting</h4>

```
- Clone the project

git clone https://github.com/williamasjr/code-pix.git


```

It's used a Docker so that all the services we will use are available.

- With docker already installed, execute:
  `docker compose up -d`

### How to execute de application

- Access a application docker container executing: `docker exec -it codepix_app bash`
- Then execute: `go run cmd/codepix/main.go`

<h5>Start server</h5>

```
  npm run dev
```
