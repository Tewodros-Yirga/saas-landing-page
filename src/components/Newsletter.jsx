export default function Newsletter() {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Thank you for subscribing!");
    };
  
    return (
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">Get the latest updates and exclusive offers.</p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-96 p-3 rounded-l-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  }