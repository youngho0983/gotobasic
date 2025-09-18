FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    git \
    maven \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN git clone https://github.com/youngho0983/gotobasic.git .

WORKDIR /app/goto_basic_spring/gotobasic

RUN mvn clean package -DskipTests

CMD ["java", "-jar", "/app/goto_basic_spring/gotobasic/target/gotobasic-0.0.1-SNAPSHOT.jar", "--spring.config.location=/app/config/application.properties"]