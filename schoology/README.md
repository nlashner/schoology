
For my auto-complete project, I created an auto-complete for the different states.  When you open the site, you can being typing in the beginning of a state and a dropdown will show you options of all the states that match the string you've entered as you continue typing.  I built the backend using Node.js and uses Express to build the APIs.  The front-end is built using React


## To run the docker container:
Build the docker container:
```
$ docker build . -t nora-assessment
$ docker run -p 3000:3000 nora-assessment
```
You can then open the application on http://localhost:3000/

## Curl Commands:
To test the API there are two curl commands you can run:
1. To see all the states:
```
curl http://localhost:3000/api/states
```

2. To search the states with a specific string.  The value string can be changed to any string you would like to run.  (ex. 'value=o' would return an array with Ohio, Oklahoma, and Oregon).
```
curl -G -d 'value=al' http://localhost:3000/api/search
```

