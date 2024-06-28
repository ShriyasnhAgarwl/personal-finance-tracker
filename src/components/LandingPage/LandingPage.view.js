function LandingPageView(props) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center font-['poppins']">
        <header
          className="text-center py-72 max-md:py-48 bg-white rounded-lg shadow-md w-full bg-cover relative"
          style={{ backgroundImage: "url('../images/header.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute z-[99] max-md:relative text-center w-full">
            <h1 className="text-5xl font-[800] text-white mb-4">
              Personal Finance Tracker
            </h1>
            <p className="text-lg mb-8 text-white">
              Track your expenses, set budgets, and save more efficiently.
            </p>
            <a
              href="/signup"
              className="px-10 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
            >
              Get Started
            </a>
          </div>
        </header>
        <main className="mt-12 text-center w-11/12 md:w-3/4 lg:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-800 mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition">
              <img
                src="../images/expensetrack.jpg"
                alt="Expense Tracking"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-2xl font-bold mb-2">Expense Tracking</h3>
              <p className="text-gray-600">
                Easily track your daily expenses and see where your money is
                going.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition">
              <img
                src="../images/budgetsettings.jpg"
                alt="Budget Setting"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-2xl font-bold mb-2">Budget Setting</h3>
              <p className="text-gray-600">
                Set monthly budgets to manage your spending and save more.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition">
              <img
                src="../images/savinggoals.jpg"
                alt="Savings Goals"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="text-2xl font-bold mb-2">Savings Goals</h3>
              <p className="text-gray-600">
                Set savings goals and track your progress over time.
              </p>
            </div>
          </div>
        </main>
        <footer className="mt-auto py-8 text-gray-600">
          &copy; 2024 Personal Finance Tracker. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default LandingPageView;
