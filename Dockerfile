# ═══════════════════════════════════════════════════════════
# Dockerfile
# Propósito : Empaquetar la app estática dentro de un
#             servidor Nginx liviano listo para producción.
# Base      : nginx:alpine  (~23 MB — imagen mínima)
# ═══════════════════════════════════════════════════════════

FROM nginx:alpine

# Metadata (buena práctica)
LABEL maintainer="tu-usuario@ejemplo.com"
LABEL description="Demo: GitHub Actions y Docker"
LABEL version="1.0"

# Eliminar la página por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos de la app al directorio que sirve Nginx
COPY app/ /usr/share/nginx/html/

# Exponer el puerto 80 (HTTP)
EXPOSE 80

# Nginx arranca automáticamente con la imagen base;
# este CMD lo hace explícito para mayor claridad.
CMD ["nginx", "-g", "daemon off;"]
