echo "## Configurando requisitos e iniciando backend                ##"
echo "* Caso algum script apresente erro, favor executar novamente *\n"

./setupcontainer.sh && ./createdb.sh && npm start