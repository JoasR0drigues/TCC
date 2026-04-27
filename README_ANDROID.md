# Projeto Android com Node.js + JavaScript

Este projeto usa seu app web (`prototipo_patrimonio_rfid_app.html`) dentro de um app Android com Capacitor.

## 1) Configurar Firebase

Edite o arquivo `firebase-config.js` e preencha com os dados do seu projeto no Firebase:
- `apiKey`
- `authDomain`
- `databaseURL`
- `projectId`
- `storageBucket`
- `messagingSenderId`
- `appId`

## 2) Instalar dependencias

```bash
npm install
```

## 3) Testar no navegador (Node.js)

```bash
npm run dev
```

Acesse `http://localhost:8080`.

## 4) Preparar web para Android

```bash
npm run copy:web
```

Isso copia o arquivo principal para `www/index.html`.

## 5) Criar projeto Android (primeira vez)

```bash
npm run android:init
```

## 6) Sincronizar alteracoes web no Android

```bash
npm run android:sync
```

## 7) Abrir no Android Studio

```bash
npm run android:open
```

No Android Studio:
- espere o Gradle sincronizar;
- conecte celular Android com depuracao USB ou inicie emulador;
- clique em **Run** para instalar;
- para APK: `Build > Build APK(s)`.

## Fluxo rapido apos alterar HTML

Sempre que editar o `prototipo_patrimonio_rfid_app.html`:

```bash
npm run android:sync
```

