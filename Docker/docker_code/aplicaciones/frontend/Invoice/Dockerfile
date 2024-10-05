# Usa una imagen de Node.js imagen oficial tomada de docker hub
FROM node:18-alpine

# Establece un directorio de trabajo dentro del ordenador
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

#Copia el codigo fuente
COPY . .

# Exponer el puerto 4200 (puerto interno de docker) para la aplicacion Angular
EXPOSE 4200

# Ejecuta la aplicacion en modo desarrollo
CMD ["npm", "start", "--", "--host", "0.0.0.0"]