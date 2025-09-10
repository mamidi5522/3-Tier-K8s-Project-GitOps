FROM nginx:alpine

# Copy frontend
COPY index.html /usr/share/nginx/html/
COPY backend-down.html /usr/share/nginx/html/
COPY img.jpg  /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
