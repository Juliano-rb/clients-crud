#!/bin/bash

echo '* checando container mssqlserver...'

# primeira vez, não tem a imagem nem um container
if [ ! "$(sudo docker ps -q -a -f name=mssqlserver)" ]; then
  echo "  => criando container mssqlserver e iniciando"
  sudo docker run --name mssqlserver -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=0N@BJ44o' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-CU8-ubuntu
fi

# apenas inicia o container
if [ ! "$(sudo docker ps -q -f name=mssqlserver)" ]; then
  echo "  => iniciando container"
  sudo docker start mssqlserver  
fi

sleep 3