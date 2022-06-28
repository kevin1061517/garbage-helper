# Garbage Helper
The goal of this application is to help people who have no more time to take out the trash.
At the same time, the poor elder can earn some cash with this awesome application.

## ReactJS in Docker container
### Step 1. Builds Docker images
```
docker build . -t garbage-helper
```

### Step 2. Docker image run command
```
docker run -p 8088:3000 garbage-helper
```

Then, we can open http://localhost:8091/ to see our application.
![Garbage helper](https://i.imgur.com/T2Atv1i.png)

### Reference
1. https://medium.com/@marvels0098/how-to-include-reactjs-app-in-docker-container-2e73068ce2d5
2. https://learningsky.io/use-docker-to-create-react-development-environment/
3. https://github.com/HcwXd/docker-tutorial