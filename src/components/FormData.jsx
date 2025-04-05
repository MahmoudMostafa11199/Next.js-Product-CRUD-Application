function FormData({ product, handleSubmit, handleChange, isNew = true }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-self-center gap-y-5 md:w-1/2"
    >
      <div className="input-box">
        <label htmlFor="title" className="label">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title..."
          className="input"
          value={product.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="category" className="label">
          Category:
        </label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category..."
          className="input"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="description" className="label">
          Description:
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="description..."
          className="input"
          value={product.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="input-box">
        <label htmlFor="img" className="label mb-1">
          Image Url:
        </label>
        <input
          type="url"
          name="image"
          id="image"
          placeholder="image url"
          value={product.image}
          onChange={handleChange}
          className="input"
          //     className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:cursor-pointer
          // file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-700"
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="price" className="label">
          Price:
        </label>
        <div className="flex gap-1 items-center">
          <input
            type="number"
            name="price"
            id="price"
            placeholder=""
            className="input"
            value={product.price}
            onChange={handleChange}
            required
          />
          <span className="font-semibold">USD </span>
        </div>
      </div>
      <div className="input-box">
        <label htmlFor="rating" className="label">
          Rating:
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            name="count"
            id="count"
            min="0"
            placeholder="Rating count"
            className="input"
            value={product.rating.count}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="rate"
            id="rate"
            placeholder="Rating rate"
            className="input"
            min="0"
            max="5"
            step="0.1"
            value={product.rating.rate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="input-box mt-2">
        <button type="submit" className="btn-primary">
          {isNew ? 'Create' : 'Update'}
        </button>
      </div>
    </form>
  );
}

export default FormData;
