"use client"

import Link from "next/link"

export default function SightWordsWorksheets1stGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            First Grade Sight Words Worksheets
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Fun and engaging worksheets to help first graders master essential sight words
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-rose-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are First Grade Sight Words Worksheets?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                First grade sight words worksheets are educational tools designed to help children recognize and 
                practice common words that appear frequently in texts. These worksheets include various activities 
                like word searches, fill-in-the-blanks, matching games, and sentence building exercises. They make 
                learning sight words fun and interactive for young learners.
              </p>
            </div>

            {/* Worksheet Types */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Sight Words Worksheets
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-rose-500 pl-6">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-3">1. Word Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Word Search</p>
                      <p className="text-rose-600">Find sight words in a grid</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Word Matching</p>
                      <p className="text-rose-600">Match words to pictures</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Word Tracing</p>
                      <p className="text-rose-600">Practice writing sight words</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <p className="font-semibold text-rose-800">Word Coloring</p>
                      <p className="text-rose-600">Color specific sight words</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-3">2. Sentence Building</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Fill in the Blanks</p>
                      <p className="text-pink-600">Complete sentences with sight words</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Sentence Scramble</p>
                      <p className="text-pink-600">Put words in correct order</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Word Building</p>
                      <p className="text-pink-600">Create sentences with sight words</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-semibold text-pink-800">Reading Practice</p>
                      <p className="text-pink-600">Read sentences with sight words</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <h3 className="text-2xl font-semibold text-fuchsia-700 mb-3">3. Interactive Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Bingo Games</p>
                      <p className="text-fuchsia-600">Play bingo with sight words</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Memory Cards</p>
                      <p className="text-fuchsia-600">Match sight word cards</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Word Walls</p>
                      <p className="text-fuchsia-600">Display and practice sight words</p>
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg">
                      <p className="font-semibold text-fuchsia-800">Flashcards</p>
                      <p className="text-fuchsia-600">Quick recognition practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Worksheets */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sample Sight Words Worksheets
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <h3 className="text-xl font-semibold text-rose-700 mb-4">Worksheet 1: Word Search</h3>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-lg mb-4">Find these sight words: the, and, a, to, in, is, you, that</p>
                    <div className="grid grid-cols-8 gap-1 text-center text-sm">
                      <div className="bg-gray-100 p-2">T</div>
                      <div className="bg-gray-100 p-2">H</div>
                      <div className="bg-gray-100 p-2">E</div>
                      <div className="bg-gray-100 p-2">A</div>
                      <div className="bg-gray-100 p-2">N</div>
                      <div className="bg-gray-100 p-2">D</div>
                      <div className="bg-gray-100 p-2">I</div>
                      <div className="bg-gray-100 p-2">S</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">Worksheet 2: Fill in the Blanks</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium">1. _____ cat is black. (the)</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium">2. I like _____ play. (to)</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium">3. _____ are my friend. (you)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Sight Word Recognition
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Identify the sight words in each sentence:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">The cat is in the house.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: the, is, in, the</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">You and I like to play.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: you, and, I, to</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">That dog is big.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: that, is</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Complete Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Complete each sentence with a sight word:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ cat is black. (article)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">I like _____ play. (preposition)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: to</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">_____ are my friend. (pronoun)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: You</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Word Categories
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-fuchsia-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Sort these sight words by category:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Articles: the, a, an</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are articles</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Pronouns: you, I, he, she, it</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are pronouns</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Prepositions: in, on, at, to, for</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-fuchsia-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: All are prepositions</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: Create Sentences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Create sentences using these sight words:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: the, cat, is, big</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: The cat is big.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: I, like, to, play</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: I like to play.</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Use: you, and, I, are, friends</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-rose-600 font-semibold">Show Example</summary>
                        <p className="mt-2 text-gray-700">Example: You and I are friends.</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Using Sight Words Worksheets
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Start Simple</h4>
                    <p className="text-gray-600">Begin with basic word recognition before moving to sentence building.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Regularly</h4>
                    <p className="text-gray-600">Use worksheets daily to build sight word recognition.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Make it Fun</h4>
                    <p className="text-gray-600">Use colorful worksheets and games to keep children engaged.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Topics</h3>
              <div className="space-y-3">
                <Link href="/grammar/sight-words-first-grade" className="block text-rose-600 hover:text-rose-800 font-medium">
                  First Grade Sight Words
                </Link>
                <Link href="/grammar/phonics" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Phonics
                </Link>
                <Link href="/grammar/reading-skills" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Reading Skills
                </Link>
                <Link href="/grammar/first-grade-worksheets" className="block text-rose-600 hover:text-rose-800 font-medium">
                  First Grade Worksheets
                </Link>
                <Link href="/grammar/early-literacy" className="block text-rose-600 hover:text-rose-800 font-medium">
                  Early Literacy
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Grade Level:</span>
                  <span className="text-gray-600">1st Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Focus:</span>
                  <span className="text-gray-600">Word recognition</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-rose-100">
                Sight words worksheets make learning fun and interactive for young readers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 