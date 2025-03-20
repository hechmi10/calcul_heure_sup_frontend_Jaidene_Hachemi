FROM angular/ngcontainer
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --prod
EXPOSE 4200
CMD ["ng","serve","--host", "0.0.0.0"]