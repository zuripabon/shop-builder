Feature: Product Scenarios

  Scenario: Create a valid Product
    Given I send a POST request to "/product" with payload:
    """
    {
      "id": "d243zsvvqdZd0mTd",
      "title": "Stunning Full-Color A3 Scenic Calendar: A Year of Breathtaking Views",
      "description": "Embrace the beauty of nature every day with our exquisite A3 Calendar, featuring 12 months of vibrant, full-color photographs showcasing some of the world's most breathtaking sceneries. Each month transports you to a new destination, offering a visual escape to stunning landscapes, serene beaches, majestic mountains, and picturesque countryside vistas.",
      "price": 2099,
      "imageUrl": ["https://via.placeholder.com/150"]
    }
    """
    Then the response status code should be 200
