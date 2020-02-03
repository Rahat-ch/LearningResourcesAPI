## REST API for DevResources(Project Seed Beta)

API is deployed to https://projectseedpoc.herokuapp.com/

To Test with Postman use the following routes:

## Get All Resources
GET /api/v1/resources

## Get Single Resource
GET /api/v1/resources/{id}

## Create New Resource
POST /api/v1/resources/

Headers:
Content-Type: application/json

Example request:

```
{
  "title": "Test Entry",
  "author": "Rahat",
  "category": "Blog Post",
  "description": "Sample JSON object for requests",
  "website": "https://www.google.com"
}
```

## Update Resource

PUT /api/v1/resources/{id}

See above for example JSON

## Delete Resource

DEL /api/v1/resources/{id}

This will delete the resource with the specified ID