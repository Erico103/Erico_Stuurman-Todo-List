const url = "http://localhost:3000"
const method = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
}}

//GET
 const getData = async() => {
  try {
      const response = await fetch(url, method);
      console.log(response)
      if (response.ok) {
          return await response.json();
      }
  } catch (error) {
      console.log(error);
  }
}


// POST
 const postTodo = async(data) => {
  try {
      const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          },
      });
      if (response.ok) {
          return await response.json();
      }
  } catch (error) {
      console.log(error);
  }
}

// DELETE
 const deleteTodo = async(id) => {
//   const endpoint = url/`${id}`;
  try {
      const response = await fetch(`${url}/${id}`, {
          method: "DELETE",
          
      });
      if (response.ok) {
          return await response.json();
      }
  } catch (error) {
      console.log(error);
  }
}

// UPDATE
 const updateTodo = async(id, data) => {
  const endpoint = `url/${id}`;
  try {
      const response = await fetch(endpoint, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          },
      });
      if (response.ok) {
          return await response.json();
      }
  } catch (error) {
      console.log(error);
  }
}




