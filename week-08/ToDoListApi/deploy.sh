dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t sdg-one-list-xiv-image ./bin/release/netcoreapp2.2/publish

docker tag sdg-one-list-xiv-image registry.heroku.com/sdg-one-list-xiv/web

docker push registry.heroku.com/sdg-one-list-xiv/web

heroku container:release web -a sdg-one-list-xiv

# sudo chmod 755 deploy.sh
# ./deploy.sh