# website_frontend
Repository for Front End website code for our Capstone Project

If you would like to demo the webpage, clone the repo and run the command `npm build` to create the react application.
After it has been build, use the `npm start` command to run the application.


# How to set up

### Prerequisites
Each of the following must be installed/downloaded to properly set up.
1. Docker is installed.
2. Docker compose is installed.
3. Java 17+ JDK is installed.
4. Apache Maven is installed.
5. All backend repositories are cloned/forked
   1. API gateway
   2. Discovery Service 
   3. Project Service
   4. Profile Service

### Deployment
To deploy, you need to create an image for the front-end, and images for
the backend. 

1. Perform the following for all backend services.
   1. Execute the maven package goal using the following command.
      1. `mvn package`
   2. Navigate to `src\main\resources\scripts` for each project.
      1. Execute the `buildDocker.sh` file to create the image using the packaged jar file.
2. Perform the following for this repository.
   1. Execute `buildDocker.sh` to create the necessary production files and build the image.  
3. Create a `.yml` file with the following content which will be used to orchestrate 
the images we have created, as well as create the necessary postgres database.
   1. Make sure to change `<USERNAME>, <PASSWORD>, and <DATABASE>` for the Postgres database.
   2. Update each of the `src/main/resources/application-docker.yml` files in project-service and profile-service
with the updated credentials.
```yaml
version: "3.8"

services:
  discovery-service:
    image: website_service_discovery
    ports:
      - "8761:8761"

  api-gateway-service:
    image: website_api_gateway
    ports:
      - "8079:8079"
    depends_on:
      - discovery-service
    environment:
      - "SPRING_PROFILES_ACTIVE=docker"

  project-api-service:
    image: website_project_api
    ports:
      - "8078:8078"
    depends_on:
      - discovery-service
      - api-gateway-service
    environment:
      - "SPRING_PROFILES_ACTIVE=docker"

  database:
    image: postgres:alpine
    environment:
      - POSTGRES_USER=<USER>
      - POSTGRES_PASSWORD=<PASSWORD>
      - POSTGRES_DB=<DATABASE>
    volumes:
      - backend:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  profile-api-service:
    image: website_profile_api
    depends_on:
      - discovery-service
      - api-gateway-service
    environment:
      - "SPRING_PROFILES_ACTIVE=docker"
    ports:
      - "8077:8077"

  frontend-service:
    image: website_frontend
    depends_on:
      - discovery-service
      - api-gateway-service
      - project-api-service
    volumes:
      - frontend:/var/www/html
    ports:
      - "80:80"
    command: "/usr/local/apache2/bin/httpd -D FOREGROUND"
    environment:
      SPRING_PROFILES_ACTIVE: docker

volumes:
  frontend:
  backend:
```
    