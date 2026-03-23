# Sources for Bérénice Batut's Research website

## Usage

### Get latest publications

Replace `_bibliography/papers.bib` by content from [HAL](<https://api.archives-ouvertes.fr/search/?q=*:*&fq=authIdHal_s:berenice-batut&fq=docType_s:(ART%20OR%20UNDEFINED%20OR%20OUV%20OR%20COUV%20OR%20COMM%20OR%20POSTER%20OR%20PROCEEDINGS%20OR%20ISSUE%20OR%20THESE%20OR%20HDR%20OR%20REPORT)&rows=1000&fl=halId_s,version_i,uri_s,docType_s,docSubType_s,doiId_s,title_s,authFullName_s,producedDate_s,thumbId_i,citationRef_s,linkExtUrl_s,linkExtId_s&facet=true&facet.mincount=1&facet.field=openAccess_bool&sort=publicationDateY_i%20desc&wt=bibtex>)

### Local setup using Docker (Recommended)

Using Docker to install Jekyll and Ruby dependencies is the easiest way.

You need to take the following steps to get the website up and running on your local machine:

- First, install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).
- Finally, run the following command that will pull the latest pre-built image from DockerHub and will run your website.

```bash
docker compose pull
docker compose up
```

Note that when you run it for the first time, it will download a docker image of size 400MB or so. To see the template running, open your browser and go to `http://localhost:8080`. You should see a copy of the theme's demo website.
