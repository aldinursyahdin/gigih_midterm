# gigih_midterm

```
npm install
change env-example to .env according to your environment
npm run start
```

* Video object
```
{
  UrlImageThumbnail: string
}
```

* Product object
```
{
    LinkProduct: String
    Tittle: String 
    Price: Number
    VideoId: Video_id from object video
}
```

* Comment object
```
{
Username: String
Comment: String
VideoId: Video_id from object video
}
```

**GET /video**
----
  Returns all videos in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<video_object>},
           {<video_object>},
            {<video_object>}
         ]
}
```

**GET /video/:id**
----
  Returns the specified video.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**   
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  * **Code:** 500
  **Content:** `{ message: err.message }`  


**POST /video**
----
  Creates a new Video and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    UrlImageThumbnail: string
}
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <video_object> }` 

**PUT /video/:id**
----
  Updates fields on the specified video and returns the updated object.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
```
  {
    LinkProduct: String
    Tittle: String 
    Price: Number
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ message: "Video berhasil diupdate" }`  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message : "Video tidak ada" }`  

**DELETE /video/:id**
----
  Deletes the specified video.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  * **Content:** `{ message: "Video berhasil dihapus" }`
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: "Tidak dapat menghapus Video"}`  

**GET /video/product**
----
  Returns all product in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  orders: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
``` 

**POST /video/product/:id**
----
  Creates a new Product in a Video and returns the new object.
* **URL Params**  
  *Required:* `VideoId=[integer]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
 {
            "LinkProduct":String, 
            "Tittle": String,
            "Price": Number

 }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <product_object> }`

**GET /video/product/:id**
----
  Get Product by specific video id.
* **URL Params**  
  *Required:* `VideoId=[integer]`
* **Headers**  
  Content-Type: application/json  
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ product_object> }`
* **Error Response:**  
  * **Code:** 500
  **Content:** `{ message: err.message }`

**GET /video/comment**
----
  Returns all comments in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  orders: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```

**POST /video/comment/:id**
----
  Creates a new Comment in a Video and returns the new object.
* **URL Params**  
  *Required:* `VideoId=[integer]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
 {
    "username":"abc", 
    "comment":"abc"

 }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <comment_object> }`

**GET /video/comment/:id**
----
  Get Comment by specific video id.
* **URL Params**  
  *Required:* `VideoId=[integer]`
* **Headers**  
  Content-Type: application/json  
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ comment_object> }`
* **Error Response:**  
  * **Code:** 500
  **Content:** `{ message: err.message }`
