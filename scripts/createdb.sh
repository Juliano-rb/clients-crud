# cria o banco ignicaoCRUD passando a senha 0N@BJ44o para o usuario SA

echo "\n* checando banco de dados ignicaoCRUD"
# faz este loop porque o tempo para a instancia do SQL Server ficar pronta é indeterminado
for i in {1..50};
do
    sudo docker exec -it mssqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "0N@BJ44o" -Q "if(db_id(N'ignicaoCRUD') IS NULL)	CREATE  database ignicaoCRUD"
    if [ $? -eq 0 ]
    then
        break
    else
        echo "  => instância ainda não está pronta..."
        sleep 1
    fi
done

echo "  => OK"
echo "  => user: SA, password: 0N@BJ44o"
sleep 3