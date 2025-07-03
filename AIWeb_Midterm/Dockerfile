# Use official .NET 8 SDK to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy everything and build
COPY . ./
RUN dotnet publish -c Release -o out

# Use official .NET 8 runtime to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/out ./

# Set environment variables (optional)
ENV ASPNETCORE_URLS=http://+:8080

# Expose port 8080 (Render expects this)
EXPOSE 8080

ENTRYPOINT ["dotnet", "AIWeb_Midterm.dll"]
