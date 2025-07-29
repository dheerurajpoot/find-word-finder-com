"use client"

import Link from "next/link"

export default function GrammarPage() {
  const grammarCategories = [
    {
      title: "Parts of Speech",
      description: "Master the building blocks of language",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      topics: [
        { name: "Nouns", href: "/grammar/nouns", description: "People, places, things, ideas" },
        { name: "Verbs", href: "/grammar/verbs", description: "Actions and states of being" },
        { name: "Adjectives", href: "/grammar/adjectives", description: "Words that describe nouns" },
        { name: "Adverbs", href: "/grammar/adverbs", description: "Words that describe verbs" },
        { name: "Prepositions", href: "/grammar/prepositions", description: "Words that show relationships" },
        { name: "Conjunctions", href: "/grammar/conjunction-definition-examples", description: "Words that connect" },
        { name: "Pronouns", href: "/grammar/possessive-pronouns", description: "Words that replace nouns" },
        { name: "Articles", href: "/grammar/article", description: "A, an, the" },
      ]
    },
    {
      title: "Sentence Structure",
      description: "Learn how to build proper sentences",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      topics: [
        { name: "Subject and Predicate", href: "/grammar/subject-and-predicate", description: "Basic sentence parts" },
        { name: "Clauses", href: "/grammar/clauses", description: "Independent and dependent clauses" },
        { name: "Phrases", href: "/grammar/phrases", description: "Groups of related words" },
        { name: "Complex Sentences", href: "/grammar/complex-sentences", description: "Combining clauses" },
        { name: "Compound Sentences", href: "/grammar/compound-sentence", description: "Joining independent clauses" },
        { name: "Declarative Sentences", href: "/grammar/declarative-sentence", description: "Making statements" },
        { name: "Imperative Sentences", href: "/grammar/imperative-sentence-examples", description: "Giving commands" },
      ]
    },
    {
      title: "Punctuation",
      description: "Master the art of proper punctuation",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      topics: [
        { name: "Commas", href: "/grammar/commas", description: "Separating ideas and items" },
        { name: "Semicolons", href: "/grammar/semicolons", description: "Connecting related clauses" },
        { name: "Apostrophes", href: "/grammar/apostrophes", description: "Possession and contractions" },
        { name: "Quotation Marks", href: "/grammar/quotation-marks", description: "Direct speech and quotes" },
        { name: "Colons", href: "/grammar/punctuation-colon", description: "Introducing lists and explanations" },
        { name: "Hyphens", href: "/grammar/punctuation-hyphen", description: "Connecting words" },
        { name: "Parentheses", href: "/grammar/brackets-parentheses", description: "Adding extra information" },
      ]
    },
    {
      title: "Tenses and Verbs",
      description: "Understanding verb forms and time",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      topics: [
        { name: "Simple Present Tense", href: "/grammar/simple-present-tense", description: "Current actions and habits" },
        { name: "Present Continuous", href: "/grammar/present-continuous", description: "Actions happening now" },
        { name: "Present Perfect", href: "/grammar/present-perfect-tense-examples", description: "Completed actions with present relevance" },
        { name: "Past Continuous", href: "/grammar/past-continuous-tense-examples", description: "Actions in progress in the past" },
        { name: "Future Perfect", href: "/grammar/future-perfect-tense", description: "Actions completed by a future time" },
        { name: "Future Perfect Continuous", href: "/grammar/future-perfect-continuous", description: "Ongoing actions until a future time" },
        { name: "Linking Verbs", href: "/grammar/linking-verbs", description: "Verbs that connect subjects to descriptions" },
        { name: "Action Verbs", href: "/grammar/kindergarten-worksheets-action-verbs", description: "Verbs that show action" },
      ]
    },
    {
      title: "Word Types and Vocabulary",
      description: "Expand your vocabulary and word knowledge",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      topics: [
        { name: "Proper Adjectives", href: "/grammar/proper-adjectives", description: "Adjectives from proper nouns" },
        { name: "Comparative Adjectives", href: "/grammar/comparative-adjectives", description: "Comparing things" },
        { name: "Positive Adjectives", href: "/grammar/positive-adjectives", description: "Describing positive qualities" },
        { name: "Collective Nouns", href: "/grammar/collective-nouns", description: "Groups of things" },
        { name: "Countable Nouns", href: "/grammar/countable-nouns", description: "Nouns you can count" },
        { name: "Common Nouns", href: "/grammar/common-nouns", description: "General names for things" },
        { name: "Compound Words", href: "/grammar/compound-words-for-kids", description: "Words made from two words" },
        { name: "Portmanteau Words", href: "/grammar/portmanteau-words", description: "Blended words" },
        { name: "Positive Words", href: "/grammar/positive-words", description: "Uplifting vocabulary" },
        { name: "Words of Appreciation", href: "/grammar/words-of-appreciation-examples", description: "Expressing gratitude" },
        { name: "Unusual English Words", href: "/grammar/unusual-english-words", description: "Rare and interesting words" },
      ]
    },
    {
      title: "Language Devices",
      description: "Creative and figurative language",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      topics: [
        { name: "Metaphors", href: "/grammar/metaphor-examples", description: "Direct comparisons" },
        { name: "Similes", href: "/grammar/simile-examples", description: "Comparisons using like or as" },
        { name: "Personification", href: "/grammar/personification-examples-for-kids", description: "Giving human qualities to non-human things" },
        { name: "Alliteration", href: "/grammar/alliteration-examples", description: "Repeating initial sounds" },
        { name: "Onomatopoeia", href: "/grammar/onomatopoeia-definition-examples", description: "Words that sound like what they mean" },
        { name: "Idioms", href: "/grammar/idioms", description: "Expressions with figurative meanings" },
        { name: "Hyperbole", href: "/grammar/hyperbole", description: "Exaggeration for effect" },
        { name: "Irony", href: "/grammar/irony-types-examples", description: "Contrast between expectation and reality" },
        { name: "Allusion", href: "/grammar/allusion-definition-examples", description: "References to other works" },
        { name: "Assonance", href: "/grammar/assonance-examples", description: "Repetition of vowel sounds" },
        { name: "Consonance", href: "/grammar/consonance-definition-examples", description: "Repetition of consonant sounds" },
        { name: "Rhyme", href: "/grammar/examples-of-rhyme", description: "Words with similar ending sounds" },
        { name: "Homophones", href: "/grammar/homophones-examples", description: "Words that sound the same" },
      ]
    },
    {
      title: "Educational Resources",
      description: "Worksheets and learning materials",
      color: "from-amber-500 to-yellow-600",
      bgColor: "from-amber-50 to-yellow-50",
      topics: [
        { name: "Sight Words - 1st Grade", href: "/grammar/sight-words-first-grade", description: "Essential words for first graders" },
        { name: "Sight Words - 2nd Grade", href: "/grammar/sight-words-second-grade", description: "Important words for second graders" },
        { name: "Sight Words Practice", href: "/grammar/sight-words-practice-2nd-grade", description: "Practice exercises for sight words" },
        { name: "Sight Words Worksheets", href: "/grammar/sight-words-worksheets-1st-grade", description: "Printable worksheets for practice" },
        { name: "Reading Comprehension - 1st Grade", href: "/grammar/reading-comprehension-worksheets-first-grade", description: "Reading exercises for first graders" },
        { name: "Reading Comprehension - 3rd Grade", href: "/grammar/reading-comprehension-worksheets-third-grade", description: "Reading exercises for third graders" },
        { name: "Reading Comprehension - 4th Grade", href: "/grammar/reading-comprehension-worksheets-fourth-grade", description: "Reading exercises for fourth graders" },
        { name: "Reading Comprehension - 5th Grade", href: "/grammar/reading-comprehension-worksheets-fifth-grade", description: "Reading exercises for fifth graders" },
        { name: "Kindergarten Nouns", href: "/grammar/kindergarten-worksheets-nouns", description: "Noun worksheets for kindergarten" },
        { name: "Kindergarten Action Verbs", href: "/grammar/kindergarten-worksheets-action-verbs", description: "Action verb worksheets for kindergarten" },
        { name: "1st Grade Nouns & Verbs", href: "/grammar/first-grade-worksheets-nouns-verbs", description: "Noun and verb worksheets for first grade" },
        { name: "2nd Grade Suffix & Prefix", href: "/grammar/second-grade-suffix-prefix-worksheets", description: "Word building worksheets" },
        { name: "3rd Grade Helping Verbs", href: "/grammar/3rd-grade-worksheets-helping-verbs", description: "Helping verb worksheets" },
        { name: "3rd Grade Proper Nouns", href: "/grammar/3rd-grade-worksheets-proper-nouns", description: "Proper noun worksheets" },
        { name: "4th Grade Past Continuous", href: "/grammar/4th-grade-worksheets-past-continuous-tense", description: "Past continuous tense worksheets" },
        { name: "4th Grade Quotation Marks", href: "/grammar/4th-grade-worksheets-quotation-marks", description: "Quotation mark worksheets" },
        { name: "5th Grade Parts of Speech", href: "/grammar/5th-grade-worksheets-parts-of-speech", description: "Parts of speech worksheets" },
        { name: "5th Grade Modal Verbs", href: "/grammar/fifth-grade-worksheets-modal-verbs", description: "Modal verb worksheets" },
      ]
    },
    {
      title: "Specialized Topics",
      description: "Specific grammar and language topics",
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      topics: [
        { name: "Reflexive Pronouns", href: "/grammar/reflexive-pronouns", description: "Pronouns that refer back to the subject" },
        { name: "Possessive Pronouns", href: "/grammar/possessive-pronouns", description: "Pronouns that show ownership" },
        { name: "Interrogative Pronouns", href: "/grammar/interrogative-pronouns", description: "Pronouns used in questions" },
        { name: "Rhetorical Questions", href: "/grammar/rhetorical-question-examples", description: "Questions not meant to be answered" },
        { name: "Point of View", href: "/grammar/examples-of-point-of-view", description: "Different perspectives in writing" },
        { name: "Figurative Language", href: "/grammar/figurative-language", description: "Creative language techniques" },
        { name: "Literary Devices", href: "/grammar/literary-devices", description: "Techniques used in literature" },
        { name: "Reading Comprehension", href: "/grammar/reading-comprehension", description: "Understanding what you read" },
        { name: "Reading Comprehension Worksheets", href: "/grammar/reading-comprehension-worksheets", description: "Practice reading exercises" },
        { name: "How to Teach Sight Words", href: "/grammar/how-to-teach-sight-words-1st-grade", description: "Teaching strategies for sight words" },
      ]
    },
    {
      title: "Word Lists",
      description: "Collections of words by category",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      topics: [
        { name: "Words Starting with A", href: "/grammar/adjectives-that-start-with-a", description: "Adjectives beginning with A" },
        { name: "Words Starting with E", href: "/grammar/adjectives-that-start-with-e", description: "Adjectives beginning with E" },
        { name: "Words Starting with H", href: "/grammar/adjectives-that-start-with-h", description: "Adjectives beginning with H" },
        { name: "Words Starting with K", href: "/grammar/adjectives-that-start-with-k", description: "Adjectives beginning with K" },
        { name: "Words Starting with M", href: "/grammar/adjectives-start-with-m", description: "Adjectives beginning with M" },
        { name: "Words Starting with N", href: "/grammar/adjectives-that-start-with-n", description: "Adjectives beginning with N" },
        { name: "Words Starting with P", href: "/grammar/adjectives-that-start-with-p", description: "Adjectives beginning with P" },
        { name: "Words Starting with R", href: "/grammar/adjectives-that-start-with-r", description: "Adjectives beginning with R" },
        { name: "Words Starting with S", href: "/grammar/adjectives-that-start-with-s", description: "Adjectives beginning with S" },
        { name: "Words Starting with T", href: "/grammar/adjectives-that-start-with-t", description: "Adjectives beginning with T" },
        { name: "Words Starting with U", href: "/grammar/u-words-for-kids", description: "Words beginning with U" },
        { name: "Words Starting with Q", href: "/grammar/q-words-for-kids", description: "Words beginning with Q" },
        { name: "Words Starting with N", href: "/grammar/n-words-for-kids", description: "Words beginning with N" },
        { name: "Words Starting with CH", href: "/grammar/ch-words-for-kids", description: "Words beginning with CH" },
        { name: "Verbs Starting with M", href: "/grammar/verbs-start-with-m", description: "Verbs beginning with M" },
        { name: "Opposite Words", href: "/grammar/opposite-words-for-kids", description: "Antonyms for children" },
        { name: "Rhyming Words", href: "/grammar/rhyming-words-for-kids", description: "Words that rhyme" },
      ]
    },
    {
      title: "Abbreviations and References",
      description: "Common abbreviations and reference materials",
      color: "from-slate-500 to-gray-600",
      bgColor: "from-slate-50 to-gray-50",
      topics: [
        { name: "Common Abbreviations", href: "/grammar/common-abbreviations-list", description: "Frequently used abbreviations" },
        { name: "Common Acronyms", href: "/grammar/common-acronyms-list", description: "Common acronyms and their meanings" },
        { name: "State Abbreviations", href: "/grammar/state-abbreviations", description: "US state abbreviations" },
        { name: "Country Abbreviations", href: "/grammar/country-abbreviations", description: "Country code abbreviations" },
        { name: "Month and Day Abbreviations", href: "/grammar/standard-month-days-abbreviations", description: "Standard abbreviations for months and days" },
        { name: "Instagram Captions", href: "/grammar/instagram-captions-and-abbreviations", description: "Abbreviations used in social media" },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Grammar Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Master the art of language with our comprehensive grammar resources
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">100+ Topics</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Interactive Quizzes</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Grade-Specific Content</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Free Resources</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {grammarCategories.map((category, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 h-full border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} text-white rounded-2xl p-6 mb-6`}>
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-white/90">{category.description}</p>
                  </div>

                  {/* Topics List */}
                  <div className="space-y-3">
                    {category.topics.map((topic, topicIndex) => (
                      <Link
                        key={topicIndex}
                        href={topic.href}
                        className="block group/item"
                      >
                        <div className="bg-white/70 hover:bg-white rounded-xl p-4 transition-all duration-200 hover:shadow-md border border-white/50">
                          <h3 className="font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors">
                            {topic.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Tips Section */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quick Grammar Tips
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Keep It Clear</h3>
                  <p className="text-sm text-gray-600">Write concise, clear sentences that your reader can easily understand.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Use Active Voice</h3>
                  <p className="text-sm text-gray-600">Active voice makes your writing more direct and engaging.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Vary Structure</h3>
                  <p className="text-sm text-gray-600">Mix short and long sentences to create rhythm and interest.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Proofread Carefully</h3>
                  <p className="text-sm text-gray-600">Always review your work for grammar, spelling, and clarity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Grammar?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Start exploring our comprehensive grammar resources today
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/grammar-rules"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Grammar Rules
                </Link>
                <Link
                  href="/blog"
                  className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                >
                  Grammar Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
