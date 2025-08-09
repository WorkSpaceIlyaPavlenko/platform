# platform/backend/Dockerfile
FROM golang:1.22-alpine AS build
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /app/api ./cmd

FROM gcr.io/distroless/static-debian12
COPY --from=build /app/api /api
EXPOSE 8080
ENTRYPOINT ["/api"]
