# Use SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY . .

RUN dotnet restore AIWeb_Midterm.sln
RUN dotnet publish AIWeb_Midterm/AIWeb_Midterm.csproj -c Release -o /app/out

# Use runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "AIWeb_Midterm.dll"]
