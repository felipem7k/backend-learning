import timeit

from questao_01 import comparar_algoritmos, criar_vetor


class VetorOrdenado:
    def __init__(self, capacidade):
        self.capacidade = capacidade
        self.ultima_posicao = -1
        self.valores = [None] * capacidade

    def cheio(self):
        return self.ultima_posicao + 1 == self.capacidade

    def inclui(self, valor):
        if self.cheio():
            print(f"Valor {valor} não foi inserido. Capacidade máxima atingida!")
            return

        posicao = self.ultima_posicao + 1

        while posicao > 0 and self.valores[posicao - 1] > valor:
            self.valores[posicao] = self.valores[posicao - 1]
            posicao -= 1

        self.valores[posicao] = valor
        self.ultima_posicao += 1

    def lista(self):
        return self.valores[:self.ultima_posicao + 1]


def preencher_vetor_ordenado(vetor_original):
    vetor_ordenado = VetorOrdenado(len(vetor_original))

    tempo_inicial = timeit.default_timer()

    for valor in vetor_original:
        vetor_ordenado.inclui(valor)

    tempo_final = timeit.default_timer()

    if vetor_ordenado.lista() != sorted(vetor_original):
        raise Exception("O vetor ordenado não foi preenchido corretamente!")

    return vetor_ordenado, tempo_final - tempo_inicial


def mostrar_comparacao(resultados_algoritmos, tempo_vetor_ordenado):
    print("--- COMPARAÇÃO COM O VETOR ORDENADO ---")
    print(f"Vetor Ordenado: {tempo_vetor_ordenado:.6f} segundos\n")

    for nome, tempo in resultados_algoritmos.items():
        if tempo_vetor_ordenado < tempo:
            diferenca = tempo / tempo_vetor_ordenado
            print(f"O Vetor Ordenado foi {diferenca:.2f} vez(es) mais rápido que o {nome}.")
        else:
            diferenca = tempo_vetor_ordenado / tempo
            print(f"O Vetor Ordenado foi {diferenca:.2f} vez(es) mais lento que o {nome}.")


if __name__ == "__main__":
    vetor_original = criar_vetor()

    resultados_algoritmos = comparar_algoritmos(vetor_original)
    vetor_ordenado, tempo_vetor_ordenado = preencher_vetor_ordenado(vetor_original)

    print(f"O Vetor Ordenado recebeu os mesmos {len(vetor_original)} números da questão 01.")
    print("O tempo medido corresponde à inclusão de todos os números, mantendo a ordem.\n")

    mostrar_comparacao(resultados_algoritmos, tempo_vetor_ordenado)
