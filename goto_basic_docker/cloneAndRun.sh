#!/bin/sh
set -e  # 에러나면 스크립트 중단

echo "[INFO] Cloning repo..."
cd /app
if [ ! -d ".git" ]; then
  git clone https://github.com/youngho0983/gotobasic.git .
else
  echo "[INFO] Repo already exists, pulling latest..."
  git pull
fi

echo "[INFO] Building project..."
cd /app/goto_basic_spring/gotobasic
mvn clean package -DskipTests

echo "[INFO] Starting application..."
exec java -jar /app/goto_basic_spring/gotobasic/target/gotobasic-0.0.1-SNAPSHOT.jar \
  --spring.config.location=/app/config/application.properties