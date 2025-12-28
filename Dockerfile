# Use official lightweight nginx image
FROM nginx:alpine

# Remove default nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Copy all your project files into nginx's html folder
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
