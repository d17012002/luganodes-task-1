import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";

function Dashboard_Filter({
    filterOptions = {
        keyword: "",
        price: [500, 5000000],
    },
    setFilterOptions,
    handleFilterClear,
}) {
    // function to handle filter values
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "keyword":
                setFilterOptions({ ...filterOptions, keyword: value });
                break;
            case "category":
                setFilterOptions({ ...filterOptions, category: value });
                break;
            case "dateRange":
                setFilterOptions({ ...filterOptions, dateRange: value });
                break;
            default:
                break;
        }
    };

    // function to handle price change in filters
    const handlePriceChange = (value) => {
        setFilterOptions({ ...filterOptions, price: [...value] });
    };

    return (
        <div className="w-full h-full bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-5">Filter Options</h2>
            <form>
                <div className="mb-5">
                    <label htmlFor="keyword" className="text-gray-700 font-semibold mb-2 block">
                        Keyword
                    </label>
                    <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        value={filterOptions.keyword}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md outline-none"
                        placeholder="Search by keyword..."
                    />
                </div>
                <div>
                    <h3 className="text-gray-700 font-semibold mb-2">Price</h3>
                    <Slider
                        range
                        min={0}
                        max={5000000}
                        step={10000}
                        defaultValue={[500, 5000000]}
                        value={filterOptions.price}
                        onChange={handlePriceChange}
                        className="mb-2"
                    />
                    <p className="text-gray-600 font-medium">
                        ₹{filterOptions.price[0]} - ₹{filterOptions.price[1]}
                    </p>
                </div>
            </form>
            <button
                onClick={handleFilterClear}
                className="w-full mt-5 py-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-200 ease-in-out rounded-md"
            >
                Clear Filters
            </button>
        </div>
    );
}

export default Dashboard_Filter;
