Docker mariadb

`docker run -d \
  --name mariadb \
  -e MARIADB_ROOT_PASSWORD=root\
  -e MARIADB_DATABASE=nestjs \
  -e MARIADB_USER=root \
  -e MARIADB_PASSWORD=root \
  -p 3306:3306 \
  mariadb:latest`
