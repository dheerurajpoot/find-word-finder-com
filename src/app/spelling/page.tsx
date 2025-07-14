"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { misspellingFolders } from "@/lib/misspellings";

export default function SpellingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState("all");
  const cardsPerPage = 12;

  // Filter and search logic
  const filteredPages = useMemo(() => {
    let filtered = misspellingFolders;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(page => 
        prettify(page).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (filterBy !== "all") {
      filtered = filtered.filter(page => {
        const title = prettify(page);
        if (filterBy === "a") return title.startsWith("A");
        if (filterBy === "b") return title.startsWith("B");
        if (filterBy === "c") return title.startsWith("C");
        if (filterBy === "d") return title.startsWith("D");
        if (filterBy === "e") return title.startsWith("E");
        if (filterBy === "f") return title.startsWith("F");
        if (filterBy === "g") return title.startsWith("G");
        if (filterBy === "h") return title.startsWith("H");
        if (filterBy === "i") return title.startsWith("I");
        if (filterBy === "j") return title.startsWith("J");
        if (filterBy === "k") return title.startsWith("K");
        if (filterBy === "l") return title.startsWith("L");
        if (filterBy === "m") return title.startsWith("M");
        if (filterBy === "n") return title.startsWith("N");
        if (filterBy === "o") return title.startsWith("O");
        if (filterBy === "p") return title.startsWith("P");
        if (filterBy === "q") return title.startsWith("Q");
        if (filterBy === "r") return title.startsWith("R");
        if (filterBy === "s") return title.startsWith("S");
        if (filterBy === "t") return title.startsWith("T");
        if (filterBy === "u") return title.startsWith("U");
        if (filterBy === "v") return title.startsWith("V");
        if (filterBy === "w") return title.startsWith("W");
        if (filterBy === "x") return title.startsWith("X");
        if (filterBy === "y") return title.startsWith("Y");
        if (filterBy === "z") return title.startsWith("Z");
        return true;
      });
    }

    return filtered;
  }, [searchTerm, filterBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPages.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentPages = filteredPages.slice(startIndex, endIndex);

  // Reset to first page when search or filter changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setFilterBy(value);
    setCurrentPage(1);
  };

  function prettify(name: string) {
    return name
      .replace(/-/g, " ")
      .replace(/\bvs\b/i, "or")
      .replace(/\b(\w)/g, (m) => m.toUpperCase());
  }

  const pastelColors = [
    "bg-pink-200", "bg-green-100", "bg-yellow-100", "bg-purple-100", 
    "bg-green-300", "bg-pink-100", "bg-yellow-200", "bg-purple-200"
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Spelling Comparisons</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search spelling comparisons..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Instant Letter Filter: Responsive, Green Theme */}
        <div className="w-full max-w-2xl mx-auto mb-4">
          {/* All Misspelling Button Bar */}
          <div className="flex w-full justify-center mb-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`w-full py-2 rounded-t-lg font-bold text-xl transition-all border border-gray-200 ${filterBy === 'all' ? 'bg-green-100 text-green-700 border-green-500' : 'bg-gray-100 text-gray-700 hover:bg-green-50'}`}
            >
              All Misspelling
            </button>
          </div>
          {/* First 13 Letters (A–M) */}
          <div className="grid grid-cols-2 sm:grid-cols-7 md:grid-cols-13 gap-2 w-full bg-white py-2 border-x border-b border-gray-200">
            {Array.from({ length: 13 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
              <button
                key={letter}
                onClick={() => handleFilterChange(letter.toLowerCase())}
                className={`uppercase w-full h-10 rounded-md font-semibold text-lg transition-all border border-gray-200 ${filterBy === letter.toLowerCase() ? 'bg-green-100 text-green-700 border-green-500' : 'bg-gray-100 text-gray-700 hover:bg-green-50'}`}
              >
                {letter}
              </button>
            ))}
          </div>
          {/* Next 13 Letters (N–Z) */}
          <div className="grid grid-cols-2 sm:grid-cols-7 md:grid-cols-13 gap-2 w-full bg-white py-2 border-x border-b border-gray-200 rounded-b-lg">
            {Array.from({ length: 13 }, (_, i) => String.fromCharCode(78 + i)).map((letter) => (
              <button
                key={letter}
                onClick={() => handleFilterChange(letter.toLowerCase())}
                className={`uppercase w-full h-10 rounded-md font-semibold text-lg transition-all border border-gray-200 ${filterBy === letter.toLowerCase() ? 'bg-green-100 text-green-700 border-green-500' : 'bg-gray-100 text-gray-700 hover:bg-green-50'}`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-center text-sm text-gray-600 mt-2">
          {filteredPages.length} of {misspellingFolders.length} results
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {currentPages.map((folder, i) => (
          <Link
            key={folder}
            href={`/spelling/${folder}`}
            className={`rounded-xl p-6 flex flex-col items-start justify-between min-h-[120px] transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-105 ${pastelColors[i % pastelColors.length]}`}
          >
            <div className="flex items-center mb-4">
              {/* Ribbon/medal icon */}
              <span className="inline-block w-8 h-8 mr-2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="6" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
                  <path d="M8 15l-2 6 6-3 6 3-2-6" stroke="#6366f1" strokeWidth="2" fill="none"/>
                </svg>
              </span>
            </div>
            <div className="text-xl font-semibold text-black mb-2">
              {searchTerm
                ? (() => {
                    const pretty = prettify(folder);
                    const trimmedSearch = searchTerm.trim();
                    if (!trimmedSearch) return pretty;
                    const lowerPretty = pretty.toLowerCase();
                    const lowerSearch = trimmedSearch.toLowerCase();
                    const matchIndex = lowerPretty.indexOf(lowerSearch);
                    if (matchIndex === -1) return pretty;
                    return (
                      <>
                        {pretty.slice(0, matchIndex)}
                        <span className="bg-yellow-200 text-black rounded px-1">
                          {pretty.slice(matchIndex, matchIndex + trimmedSearch.length)}
                        </span>
                        {pretty.slice(matchIndex + trimmedSearch.length)}
                      </>
                    );
                  })()
                : prettify(folder)}
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {currentPages.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No spelling comparisons found</div>
          <div className="text-gray-400">Try adjusting your search or filter criteria</div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-2 border rounded-lg transition-all font-semibold ${
                    currentPage === pageNum
                      ? "bg-green-500 text-white border-green-500"
                      : "border-gray-300 hover:bg-green-50 text-gray-700"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <div className="text-center text-sm text-gray-600 mt-4">
          Page {currentPage} of {totalPages}
        </div>
      )}
    </div>
  );
} 