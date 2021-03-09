# Ano Da Concessao
puts "Selecione o Ano:"
user_year = gets.chomp.to_i

# Valor do Beneficio
puts "Selecione o Valor do Benefício:"
user_value = gets.chomp.to_i


def Calc(user_year, user_value)
	ano_valor = {2019 => 998, 2020 => 1045, 2021 => 1100}
	min = ano_valor[user_year]
	puts "Ano #{user_year} - Valor Do Mínimo #{min}"
	if min > user_value
		raise "Valor Menor do Que o Mínimo, recomecar"
	elsif min == user_value
		return "Valor igual ao minimo - benefício fixado no mínimo"
	else
		return CalcFunction(min, user_value)
	end
end

def CalcFunction(min, user_value)
	sobra = ((user_value.to_f / min.to_f)-1)
	puts "Sobra => #{sobra}"
		if sobra <= 1
			return(min + ((sobra*min)*0.60))
		elsif sobra > 1 && sobra <= 2
			puts "Valor Do Mínimo #{min}"
			puts "Valor da Primeira Sobra: #{(1*min)*0.6}"
			puts "Valor da Segunda Sobra: #{((sobra-1)*min)*0.4}"
			return( ((1*min)*0.6) + min + (((sobra-1)*min)*0.4) )
		elsif sobra > 2 && sobra <= 3
			puts "Valor Do Mínimo #{min}"
			puts "Valor da Primeira Sobra: #{(1*min)*0.6}"
			puts "Valor da Segunda Sobra: #{(1*min)*0.4}"
			puts "Valor da Terceira Sobra: #{((sobra-2)*min)*0.2}"
			return( ((1*min)*0.6) + min + ((1*min)*0.4) + (((sobra-2)*min)*0.2))
		elsif sobra > 3
			puts "Valor Do Mínimo #{min}"
			puts "Valor da Primeira Sobra: #{(1*min)*0.6}"
			puts "Valor da Segunda Sobra: #{(1*min)*0.4}"
			puts "Valor da Terceira Sobra: #{(1*min)*0.2}"
			puts "Resto da Sobra: #{(user_value - (4*min))*0.1}"
			return( ((1*min)*0.6) + min + ((1*min)*0.4) + ((1*min)*0.2) + ((user_value - (4*min))*0.1) )
		end
end


puts Calc(user_year, user_value)