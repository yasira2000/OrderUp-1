# OrderUp Application

## Description
OrderUp is a Spring Boot application designed to manage orders. This project includes a robust API for order management, with integrated API documentation.

## Prerequisites
- Java 21
- Maven 3.6+
- PostgreSQL

## Configure Database

1. **Create a PostgreSQL Database**:
   - Log into PostgreSQL:
     ```sh
     psql -U postgres
     ```
   - Create a new database:
     ```sql
     CREATE DATABASE orderup_db;
     ```

2. **Update `application.properties`**:
   Open the `src/main/resources/application.properties` file and add or modify the following properties with your database configuration:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/orderup_db
   spring.datasource.username=your_db_username
   spring.datasource.password=your_db_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
## Accessing the API Documentation

### Swagger UI
The API documentation is available via Swagger UI. To access it, follow these steps:

1. **Run the application**: Ensure your application is running. You can use the following command to start the application:
   ```sh
   mvn spring-boot:run
2. **Navigate to swagger ui endpoint**: http://localhost:8080/swagger-ui.html



