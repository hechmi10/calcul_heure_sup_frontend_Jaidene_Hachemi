FROM angular/ngcontainer
WORKDIR /app
COPY . .
EXPOSE 4200
CMD ["ng","serve","--host", "0.0.0.0"]