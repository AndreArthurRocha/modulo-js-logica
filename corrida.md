1. abrir o aplicativo
2. escolher o destino (entrada)
3. analise de preço (dinamica) = 10 (processamento)
   1. selecionar um raio em volta do passageiro
   2. verifica a quantidade de motoristas próximos dentro do raio
   3. calcula oferta e demanda com base nos motoristas e passageiros solicitando
4. escolher a categoria (entrada)
5. escolher a forma de pagamento (dinheiro) (entrada)
6. confimar partida (entrada)
7. confirmar endereço de embarque (entrada)
8. calcula as informações da corrida (processamento)
9.  oferece aos motoristas em um sistema de leilão (entrada)
10. aguardar o motorista aceitar a corrida
11. o motorista aceita a corrida (entrada e abaixo processamento)
   1. as informações do passageiro e corrida vão para o motorista
   2. notifica o passageiro e carrega o gps
   3. carrega as informações do gps mostra o destino de embarque
12. o motorista não aceita a corrida (entrada e abaixo processamento)
    1. atualiza o preço da corrida
    2. oferece para outro motorista
13. chega no local de embarque
14. verificar a placa
15. verifica o motorista
16. embarca
17. o passageiro passa o código de segurança
18. o motorista digita o código de segurança (entrada)
19. inicia a corrida (entrada)
20. chega no destino
21. finalizar a corrida (entrada)
22. exibir o preço (saída)
23. gera o qrcode automaticamente (processamento)
24. efetua o pagamento
25. processa o pagamento (processamento)
26. tela de sucesso (saída)
27. fim da corrida

5 + 2*km + 0,5*min

km = 8
min = 20

5 + 16 + 0,5*20
21 + 0,5*20
21 + 10
31

O codigo já tem a equacao e precisa de dois valores de entrada para fazer o calculo
o sistema recebe o valor de tempo da corrida
o sistema recebe o valor de distancia da corrida
o sistema calcula o valor referente a distancia da corrida
o sistema calcula o valor referente ao tempo da corrida
o sistema soma o valor inicial 5 com o valor referente a distancia
o sistema soma o resultado da soma anterior com o valor referente ao tempo

