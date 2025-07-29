"use client"

import Link from "next/link"

export default function ReadingComprehensionWorksheetsFirstGrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            First Grade Reading Comprehension Worksheets
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Fun and educational worksheets to help first graders improve their reading skills
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What Are Reading Comprehension Worksheets?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reading comprehension worksheets help first graders understand what they read. These worksheets 
                include short passages followed by questions that test understanding, vocabulary, and critical 
                thinking skills. They are designed to build reading fluency and comprehension abilities in young learners.
              </p>
            </div>

            {/* Worksheet Types */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Types of Reading Comprehension Worksheets
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3">1. Short Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">The Cat and the Hat</p>
                      <p className="text-purple-600">Simple stories with familiar characters</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">My Pet Dog</p>
                      <p className="text-purple-600">Personal experiences and pets</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">At the Park</p>
                      <p className="text-purple-600">Everyday activities and places</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-800">The Red Ball</p>
                      <p className="text-purple-600">Simple objects and colors</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-2xl font-semibold text-violet-700 mb-3">2. Question Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Who, What, Where</p>
                      <p className="text-violet-600">Basic comprehension questions</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">True or False</p>
                      <p className="text-violet-600">Fact checking exercises</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Fill in the Blanks</p>
                      <p className="text-violet-600">Vocabulary and context clues</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <p className="font-semibold text-violet-800">Multiple Choice</p>
                      <p className="text-violet-600">Select the best answer</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">3. Skill Focus Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Main Idea</p>
                      <p className="text-indigo-600">What the story is about</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Sequence</p>
                      <p className="text-indigo-600">Order of events</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Details</p>
                      <p className="text-indigo-600">Specific information</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="font-semibold text-indigo-800">Inference</p>
                      <p className="text-indigo-600">Reading between the lines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Worksheet */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sample Reading Comprehension Worksheet
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">The Cat and the Hat</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tom has a cat. His cat is orange. The cat likes to play with a red ball. 
                    Tom throws the ball and the cat runs to get it. The cat brings the ball back to Tom. 
                    They play this game every day. Tom loves his cat very much.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl border-l-4 border-violet-400">
                  <h4 className="text-lg font-semibold text-violet-700 mb-4">Questions:</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium">1. What color is Tom&apos;s cat?</p>
                      <p className="text-gray-600">Answer: Orange</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium">2. What does the cat like to play with?</p>
                      <p className="text-gray-600">Answer: A red ball</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-medium">3. How often do they play this game?</p>
                      <p className="text-gray-600">Answer: Every day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 1: Reading Comprehension
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this passage and answer the questions:</h4>
                  
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-lg mb-4">
                      Sarah has a dog named Max. Max is a big brown dog. He likes to go for walks in the park. 
                      Sarah takes Max to the park every morning. Max runs and plays with other dogs. He loves to 
                      chase balls and sticks. Sarah and Max are best friends.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. What is the dog&apos;s name?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Max</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. What color is Max?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: Brown</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. Where does Max like to go?</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: The park</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 2: Main Idea
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">What is the main idea of this passage?</h4>
                  
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-lg">
                      Apples are red fruits that grow on trees. They are sweet and crunchy to eat. 
                      People use apples to make pie and juice. Apples are good for your health. 
                      You can find apples at the grocery store.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">A) Apples are red</p>
                      <p className="mb-2">B) Apples are healthy fruits that people eat</p>
                      <p className="mb-2">C) Apples grow on trees</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-violet-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: B) Apples are healthy fruits that people eat</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 3: Sequence of Events
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Put these events in the correct order:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Events: 1. Wake up, 2. Eat breakfast, 3. Get dressed, 4. Go to school</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: 1. Wake up, 2. Get dressed, 3. Eat breakfast, 4. Go to school</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Events: 1. Plant seed, 2. Water plant, 3. Seed grows, 4. Pick flower</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-indigo-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: 1. Plant seed, 2. Water plant, 3. Seed grows, 4. Pick flower</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quiz 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Interactive Quiz 4: True or False
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Read this passage and answer True or False:</h4>
                  
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="text-lg">
                      The sun is a big star. It gives us light and heat. Plants need sunlight to grow. 
                      The sun rises in the east and sets in the west. We should never look directly at the sun.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. The sun is a small star. (True/False)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: False - The sun is a big star</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. Plants need sunlight to grow. (True/False)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: True</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">3. We should look directly at the sun. (True/False)</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-purple-600 font-semibold">Show Answer</summary>
                        <p className="mt-2 text-gray-700">Answer: False - We should never look directly at the sun</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tips for Reading Comprehension
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Read Carefully</h4>
                    <p className="text-gray-600">Take time to read the passage slowly and understand each sentence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Look for Key Words</h4>
                    <p className="text-gray-600">Find important words that help you understand the main idea.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Answer Questions</h4>
                    <p className="text-gray-600">Go back to the passage to find the answers to questions.</p>
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
                <Link href="/grammar/reading-skills" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Reading Skills
                </Link>
                <Link href="/grammar/phonics" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Phonics
                </Link>
                <Link href="/grammar/first-grade-worksheets" className="block text-purple-600 hover:text-purple-800 font-medium">
                  First Grade Worksheets
                </Link>
                <Link href="/grammar/early-literacy" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Early Literacy
                </Link>
                <Link href="/grammar/vocabulary-building" className="block text-purple-600 hover:text-purple-800 font-medium">
                  Vocabulary Building
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
                  <span className="text-gray-600">Comprehension skills</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Difficulty:</span>
                  <span className="text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
              <p className="text-purple-100">
                Reading comprehension worksheets help build critical thinking and understanding skills!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 