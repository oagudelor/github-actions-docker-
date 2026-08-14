# 🐳 GitHub Actions y Docker — Demo

Proyecto de demostración para video educativo sobre **CI/CD con GitHub Actions y Docker**.

---

## 📁 Estructura del proyecto

```
github-actions-docker/
│
├── .github/
│   └── workflows/
│       └── docker-deploy.yml   ← Pipeline CI/CD automático
│
├── app/
│   ├── index.html              ← Página principal de la app
│   ├── style.css               ← Estilos visuales
│   └── app.js                  ← Saludo y fecha dinámica
│
├── Dockerfile                  ← Empaqueta la app en Nginx
└── README.md                   ← Este archivo
```

---

## 🚀 Cómo usar este proyecto

### 1. Clonar o crear el repositorio en GitHub

```bash
git init github-actions-docker
cd github-actions-docker
# Copiar todos los archivos del proyecto aquí
git add .
git commit -m "feat: proyecto inicial demo GitHub Actions"
```

### 2. Configurar los Secretos en GitHub

En tu repositorio → **Settings → Secrets and variables → Actions → New repository secret**:

| Nombre del secreto          | Valor                              |
|-----------------------------|------------------------------------|
| `DOCKER_HUB_USERNAME`       | Tu nombre de usuario en Docker Hub |
| `DOCKER_HUB_ACCESS_TOKEN`   | Token de acceso de Docker Hub *    |

> \* Para generar el token: Docker Hub → Account Settings → Security → New Access Token

### 3. Hacer push a main y observar el pipeline

```bash
git push origin main
```

Luego ve a tu repositorio en GitHub → pestaña **Actions** y observa el workflow ejecutarse en tiempo real.

---

## 🧪 Probar localmente (antes del video)

```bash
# Construir la imagen
docker build -t github-actions-docker-demo .

# Ejecutar el contenedor
docker run -d -p 8080:80 --name demo github-actions-docker-demo

# Abrir en el navegador
# http://localhost:8080

# Detener y eliminar
docker stop demo && docker rm demo
```

---

## 🎬 Guía para el video (qué mostrar en cada archivo)

### `Dockerfile`
- **Mostrar:** el `FROM nginx:alpine` y el `COPY app/`
- **Decir:** *"Con solo estas líneas empaquetamos nuestra app en un servidor listo para producción"*

### `.github/workflows/docker-deploy.yml`
- **Mostrar:** cada bloque (`on`, `checkout`, `login`, `build`, `push`)
- **Decir:** *"Este archivo YAML es el corazón del pipeline; GitHub lo lee automáticamente"*

### Pestaña Actions en GitHub
- **Mostrar:** el workflow corriendo paso a paso en tiempo real
- **Decir:** *"Cada paso que definimos en el YAML aparece aquí con su estado"*

### Docker Hub
- **Mostrar:** la imagen publicada con las etiquetas `latest` y el SHA del commit
- **Decir:** *"La imagen ya está disponible para cualquier servidor del mundo"*

---

## 📚 Conceptos clave del demo

| Concepto | Qué es en este proyecto |
|---|---|
| **Evento** | `push` a la rama `main` |
| **Workflow** | `docker-deploy.yml` |
| **Runner** | `ubuntu-latest` (máquina virtual de GitHub) |
| **Secretos** | Credenciales de Docker Hub (nunca en código) |
| **Imagen** | App empaquetada con Nginx Alpine |
| **Registro** | Docker Hub |
