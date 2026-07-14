# Backend Learning

Projetos e exercícios de backend acumulados nos meus estudos, organizados por linguagem e tema. O histórico de commits de cada projeto foi preservado com autoria e datas originais.

## Estrutura

```
backend-learning/
├── php/                 PHP (Alura) — do básico ao MVC, testes e web scraping
│   ├── modulo-1..4/       fundamentos, arrays, funções
│   ├── modulo-5/          buscador de cursos (crawler simples)
│   ├── modulo-6..15/      orientação a objetos, PDO/banco, herança
│   ├── modulo-16/         testes com PHPUnit
│   ├── modulo-17/         MVC + BDD
│   ├── modulo-18/         projeto MVC
│   ├── modulo-19/         object calisthenics
│   ├── modulo-20/         google crawler (Guzzle/DOM)
│   └── laravel/           projeto Laravel completo (b7web) — auth, filas, testes, CI
├── java/
│   ├── alura/            fundamentos e orientação a objetos
│   └── nelio-alves/      exercícios introdutórios
├── csharp/              C# / .NET (Alura) — projeto ScreenSound
├── python/
│   ├── alura/            fundamentos, POO e Django (projeto alura-space)
│   └── ifsc/             estrutura de dados (listas encadeadas, pilhas, filas)
└── fundamentals/        lógica de programação
```

## Destaques

- **php/laravel/** — o projeto mais próximo de produção: aplicação Laravel com autenticação, filas, testes automatizados e workflows de CI (GitHub Actions).
- **python/alura/modulo-04/alura-space/** — aplicação Django completa (models, views, templates, admin).
- **python/ifsc/** — implementações de estruturas de dados do zero.

## Observações

- Dependências geradas (`vendor/`, `node_modules/`, `venv/`, builds) não são versionadas — rode `composer install` / `npm install` / `pip install -r requirements.txt` conforme o projeto.
- Cada `modulo-N` corresponde a um módulo do curso de origem.
