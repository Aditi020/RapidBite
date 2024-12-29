import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../components/UI/Banner";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/AllFood.css";

const AllFoods = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortOption, setSortOption] = useState("Default");

  const productPerPage = 12;

  // Fetch products from Spoonacular API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/food/products/search?query=all&number=100&apiKey=6ea77396bafc4d5cb38e19597ffe5000`
        );
        setProducts(response.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const sortedProducts = () => {
    let filteredProducts = products.filter((item) => {
      if (searchTerm === "") return item;
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item;
      return null;
    });

    switch (sortOption) {
      case "ascending":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "descending":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "high-price":
        filteredProducts.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "low-price":
        filteredProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const searchedProduct = sortedProducts();

  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Banner title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="Default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AllFoods;
