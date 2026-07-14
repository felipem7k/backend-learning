import random
import timeit


TAMANHO_VETOR = 5000
VALOR_MINIMO = 0
VALOR_MAXIMO = 1000
SEMENTE = 42


def criar_vetor():
    random.seed(SEMENTE)

    vetor = []
    for i in range(TAMANHO_VETOR):
        vetor.append(random.randint(VALOR_MINIMO, VALOR_MAXIMO))

    return vetor


def bubble_sort(vetor):
    tamanho = len(vetor)

    for i in range(tamanho - 1):
        houve_troca = False

        for j in range(tamanho - 1 - i):
            if vetor[j] > vetor[j + 1]:
                auxiliar = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = auxiliar
                houve_troca = True

        if not houve_troca:
            break

    return vetor


def selection_sort(vetor):
    tamanho = len(vetor)

    for i in range(tamanho - 1):
        menor_posicao = i

        for j in range(i + 1, tamanho):
            if vetor[j] < vetor[menor_posicao]:
                menor_posicao = j

        if menor_posicao != i:
            auxiliar = vetor[i]
            vetor[i] = vetor[menor_posicao]
            vetor[menor_posicao] = auxiliar

    return vetor


def insertion_sort(vetor):
    for i in range(1, len(vetor)):
        valor_atual = vetor[i]
        j = i - 1

        while j >= 0 and vetor[j] > valor_atual:
            vetor[j + 1] = vetor[j]
            j -= 1

        vetor[j + 1] = valor_atual

    return vetor


def shell_sort(vetor):
    intervalo = len(vetor) // 2

    while intervalo > 0:
        for i in range(intervalo, len(vetor)):
            valor_atual = vetor[i]
            j = i

            while j >= intervalo and vetor[j - intervalo] > valor_atual:
                vetor[j] = vetor[j - intervalo]
                j -= intervalo

            vetor[j] = valor_atual

        intervalo //= 2

    return vetor


def merge_sort(vetor):
    if len(vetor) <= 1:
        return vetor

    metade = len(vetor) // 2
    esquerda = vetor[:metade]
    direita = vetor[metade:]

    merge_sort(esquerda)
    merge_sort(direita)

    i = 0
    j = 0
    k = 0

    while i < len(esquerda) and j < len(direita):
        if esquerda[i] <= direita[j]:
            vetor[k] = esquerda[i]
            i += 1
        else:
            vetor[k] = direita[j]
            j += 1

        k += 1

    while i < len(esquerda):
        vetor[k] = esquerda[i]
        i += 1
        k += 1

    while j < len(direita):
        vetor[k] = direita[j]
        j += 1
        k += 1

    return vetor


def quick_sort(vetor, inicio=0, fim=None):
    if len(vetor) <= 1:
        return vetor

    if fim is None:
        fim = len(vetor) - 1

    i = inicio
    j = fim
    pivo = vetor[(inicio + fim) // 2]

    while i <= j:
        while vetor[i] < pivo:
            i += 1

        while vetor[j] > pivo:
            j -= 1

        if i <= j:
            auxiliar = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = auxiliar
            i += 1
            j -= 1

    if inicio < j:
        quick_sort(vetor, inicio, j)

    if i < fim:
        quick_sort(vetor, i, fim)

    return vetor


ALGORITMOS = [
    ("Bubble Sort", bubble_sort),
    ("Selection Sort", selection_sort),
    ("Insertion Sort", insertion_sort),
    ("Shell Sort", shell_sort),
    ("Merge Sort", merge_sort),
    ("Quick Sort", quick_sort),
]


def medir_tempo(algoritmo, vetor_original):
    vetor = vetor_original.copy()

    tempo_inicial = timeit.default_timer()
    algoritmo(vetor)
    tempo_final = timeit.default_timer()

    if vetor != sorted(vetor_original):
        raise Exception(f"O algoritmo {algoritmo.__name__} não ordenou corretamente!")

    return tempo_final - tempo_inicial


def comparar_algoritmos(vetor_original):
    resultados = {}

    for nome, algoritmo in ALGORITMOS:
        resultados[nome] = medir_tempo(algoritmo, vetor_original)

    return resultados


def mostrar_resultados(resultados):
    print("--- COMPARAÇÃO DOS ALGORITMOS DE ORDENAÇÃO ---")

    for nome, tempo in resultados.items():
        print(f"{nome}: {tempo:.6f} segundos")

    nome_mais_rapido = min(resultados, key=resultados.get)
    tempo_mais_rapido = resultados[nome_mais_rapido]

    print("-" * 48)
    print(f"Método mais rápido: {nome_mais_rapido}")

    for nome, tempo in resultados.items():
        diferenca = tempo / tempo_mais_rapido
        print(f"{nome} levou {diferenca:.2f} vez(es) o tempo do método mais rápido")


if __name__ == "__main__":
    vetor_original = criar_vetor()

    print(f"Vetor criado com {len(vetor_original)} números inteiros.")
    print(f"Valores entre {VALOR_MINIMO} e {VALOR_MAXIMO}.")
    print("Cada algoritmo recebeu uma cópia do mesmo vetor original.\n")

    resultados = comparar_algoritmos(vetor_original)
    mostrar_resultados(resultados)
