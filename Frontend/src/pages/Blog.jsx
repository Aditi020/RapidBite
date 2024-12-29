import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Blog.css";

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s="
                );
                const meals = response.data.meals;
                const formattedPosts = meals.map((meal) => ({
                    id: meal.idMeal,
                    title: meal.strMeal,
                    description: meal.strInstructions.substring(0, 100) + "...",
                    image: meal.strMealThumb,
                    author: "Admin",
                    date: new Date().toLocaleDateString(),
                }));
                setBlogPosts(formattedPosts);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        };

        fetchBlogPosts();
    }, []);

    return (
        <section className="blog">
            <div className="blog-header">
                <h1>Our Latest Recipes</h1>
                <p>Explore delicious recipes from around the world.</p>
            </div>
            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="blog-card-image"
                        />
                        <div className="blog-card-content">
                            <h2 className="blog-card-title">{post.title}</h2>
                            <p className="blog-card-description">{post.description}</p>
                            <div className="blog-card-footer">
                                <span className="blog-card-author">{post.author}</span>
                                <span className="blog-card-date">{post.date}</span>
                            </div>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
