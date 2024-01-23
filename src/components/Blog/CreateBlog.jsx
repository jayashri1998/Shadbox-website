import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author_name: "",
    author_image:"",
    blog_image_url: "",
    content: "",
    category_id: "",
    status: "",
    inside_image_url:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/v1/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Server error");
      }

      const result = await response.json();

      if (result === true) {
        setError("Please provide complete data.");
      } else {
        setError('');
        alert("Submit successfully!");
        
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="border rounded-lg mt-32 mx-32 my-4">
      {console.log(formData)}
      <h1 className="text-center font-bold text-lg">Create Your Blog</h1>
      <form onSubmit={onSubmit}>
        <div className="flex gap-8 justify-between mx-32 my-2">
          <div className="mb-2">
            <label
              htmlFor="blogtitle"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Blogs Title
            </label>
            <input
              type="text"
              id="blogtitle"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-md mt-2"
              placeholder="Blog title"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="blogtitle"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Author Name
            </label>
            <input
              type="text"
              id="author_name"
              name="author_name"
              value={formData.author_name}
              onChange={handleChange}
              className="w-full border rounded-md mt-2"
              placeholder="Blog author_name"
              required
            />
          </div>
        </div>
        <div className="mb-2 my-2 mx-32">
          <label
            htmlFor="blog_content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Blog Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border rounded-md mt-2"
            placeholder="Blog content"
            required
          ></textarea>
        </div>
        <div className="mb-2 my-2 mx-32">
          <label
            htmlFor="blog_content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Blog content id
          </label>
          <textarea
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full border rounded-md mt-2"
            placeholder="category_id"
            required
          ></textarea>
        </div>
        <div className="mb-2 my-2 mx-32">
          <label
            htmlFor="blog_content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Blog Image Url
          </label>

          <textarea
            id="blog_image_url"
            name="blog_image_url"
            value={formData.blog_image_url}
            onChange={handleChange}
            className="w-full border rounded-md mt-2"
            placeholder="image_url"
            required
          ></textarea>
        </div>
        <div className="mb-2 my-2 mx-32">
        <label
          htmlFor="blog_content"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Blog description Image 
        </label>

        <textarea
          id="inside_image_url"
          name="inside_image_url"
          value={formData.inside_image_url}
          onChange={handleChange}
          className="w-full border rounded-md mt-2"
          placeholder="Blog description Image"
          required
        ></textarea>
      </div>
        <div className="mb-2 my-2 mx-32">
        <label
          htmlFor="blog_content"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Blog Image Url
        </label>

        <textarea
          id="author_image"
          name="author_image"
          value={formData.author_image}
          onChange={handleChange}
          className="w-full border rounded-md mt-2"
          placeholder="author_image"
          required
        ></textarea>
      </div>
        <div className="mb-2 my-2 mx-32">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status{" "}
          </label>

          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-md mt-2"
          >
            <option value="private">Private</option>
            <option value="publish">publish</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white ml-4 rounded p-2 hover:bg-blue-700"
        >
          Submit your blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
