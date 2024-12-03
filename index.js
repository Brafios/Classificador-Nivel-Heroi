let nomePersonagem = "Carvas"
let quantidadeExperiencia = 0
let nivel = " "

for (let cont = 0; cont < 10001; cont++)
{
	quantidadeExperiencia++
}

if (quantidadeExperiencia <= 1000)
{
	 nivel = "Ferro"
}

else if ( quantidadeExperiencia <= 2000)
{
	nivel = "Bronze"
}

else if ( quantidadeExperiencia <= 5000)
{
	nivel = "Prata"
}

else if ( quantidadeExperiencia <= 7000)
{
	nivel = "Ouro"
}

else if ( quantidadeExperiencia <= 8000)
{
	nivel = "Platina"
}

else if ( quantidadeExperiencia <= 9000)
{
	nivel = "Ascendente"
}

else if ( quantidadeExperiencia <= 10000)
{
	nivel = "Imortal"
}

else
{
	nivel = "radiante"
}


console.log("Nome do seu personagem é: " + nomePersonagem + ' ' + "seu nivel atualmente é: " + nivel)
