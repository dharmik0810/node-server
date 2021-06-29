# node-server

# api routes

- /api/add-sheet  (POST)

  - sample request payload
  ```
  [
    {
      "cellId": "1A",
      "value": "1000"
    },
    {
      "cellId": "1B",
      "value": "1000"
    },
    {
      "cellId": "1C",
      "value": "1000"
    }
  ]
  ```
  
- /api/get-sheet  (GET)
 
  - returns the same response as above
