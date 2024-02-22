// productlist.ts

// Interface for the product object
interface Product {
    id: number;
    name: string;
    price: number;
    available: boolean;
  }
  
  // Function to handle the click event and store the selected product in localStorage
  function getMobileDetails(productName: string, productId: number): void {
    // Assuming products is an array of product objects
    let productList: Product[] = [
      { id: 231, name: "Samsung Galaxy Note 7", price: 699, available: true },
      { id: 875, name: "Samsung Galaxy S6 Edge", price: 630, available: true },
      { id: 231, name: "Nokia Lumia 640XL", price: 224, available: false },
      // Add more products as needed
    ];
  
    // Arrow function to filter the product array
    let filteredList: Product[] = productList.filter(product => product.id === productId);
  
    // Check if the product is found
    if (filteredList.length > 0) {
      // Store the selected product in localStorage
      localStorage.setItem("Product", JSON.stringify(filteredList[0]));
  
      // Redirect to the next page or perform any other action
      window.location.href = "ProductDetail.html";
    } else {
      console.log("Product not found");
    }
  }
  