import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Symmetry vs Symetry - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;symmetry&quot; vs &quot;symetry&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SymmetryVsSymetryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Symmetry vs Symetry</h1>
        <p className="text-xl text-gray-600">Word Definitions & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Word Definitions & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;symmetry&quot; and &quot;symetry&quot;. Learn word definitions, usage examples, and proper spelling patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Symetry</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Symetry&quot; is not a standard English word. The correct spelling is &quot;symmetry.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Symmetry</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Symmetry&quot; is the correct spelling. It means &quot;balanced proportions&quot; or &quot;correspondence.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Symmetry (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The quality of being made up of exactly similar parts facing each other or around an axis; balanced proportions; correspondence in size, shape, and relative position.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The butterfly&apos;s wings show perfect <strong>symmetry</strong>.</li>
                  <li>• The building has beautiful <strong>symmetry</strong>.</li>
                  <li>• Mathematical <strong>symmetry</strong> is fascinating.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Symetry (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Symetry&quot; is not a standard English word and has no recognized meaning.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Symetry&quot; is not used in standard English.</li>
                  <li>• Always use <strong>symmetry</strong> when referring to balance or proportion.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Symmetry:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Balance</li>
                <li>• Proportion</li>
                <li>• Harmony</li>
                <li>• Correspondence</li>
                <li>• Equilibrium</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Symetry:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Symmetry</strong> is spelled with &quot;try&quot;: s-y-m-m-e-t-r-y.</li>
            <li>• The word comes from Greek &quot;symmetria&quot; meaning &quot;agreement in dimensions.&quot;</li>
            <li>• &quot;Symetry&quot; is not a recognized English word.</li>
            <li>• Remember: symmetry has &quot;try&quot; like &quot;geometry&quot; and &quot;poetry.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;symmetry&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Symmetry&quot; is a noun that refers to balanced proportions or correspondence. It follows standard English grammar patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;symmetry&quot; differ from &quot;balance&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Symmetry&quot; specifically refers to exact correspondence in size, shape, and position, while &quot;balance&quot; is a broader term for equilibrium.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;symmetry&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Symmetry&quot; is a noun that refers to the quality of balanced proportions or correspondence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;symmetry&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;symmetry&quot; is perfectly acceptable in formal writing, academic papers, and professional communication.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;symmetry&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Symmetry&quot; comes from Greek &quot;symmetria&quot; meaning &quot;agreement in dimensions&quot; and entered English through Latin &quot;symmetria.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;symmetry&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Symmetry&quot; can be used as a subject (&quot;Symmetry is beautiful&quot;), object (&quot;Study symmetry&quot;), or in compound forms (&quot;symmetry axis&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;symmetry&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: perfect symmetry, bilateral symmetry, symmetry axis, symmetry breaking, and symmetry group.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;symmetry&quot; and &quot;symetry&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;symmetry&quot; has &quot;try&quot; (like &quot;geometry&quot; and &quot;poetry&quot;), and emphasize that &quot;symetry&quot; is not a real word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;symmetry&quot; used in mathematical contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;symmetry&quot; is very common in mathematics, geometry, and physics to describe balanced properties.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the different meanings of &quot;symmetry&quot; in various contexts?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Symmetry&quot; can mean balanced proportions (visual symmetry), mathematical correspondence (symmetry operations), or harmony (symmetrical design).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you remember the correct spelling of &quot;symmetry&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of &quot;symmetry&quot; as ending with &quot;try&quot; like other words: geometry, poetry, chemistry, history. The &quot;try&quot; ending is common in English nouns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common misspellings of &quot;symmetry&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common misspellings include: symetry, symetry, symetry, symetry, and symetry. The correct spelling always has &quot;try&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How is &quot;symmetry&quot; used in art and design?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In art and design, &quot;symmetry&quot; refers to balanced compositions, harmonious proportions, and visually pleasing arrangements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What is the difference between symmetry and asymmetry?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Symmetry&quot; means balanced correspondence, while &quot;asymmetry&quot; means lack of balance or correspondence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell &quot;symmetry&quot; with &quot;try&quot; instead of &quot;try&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: People often confuse the spelling because they may not pronounce the &quot;t&quot; clearly, but &quot;symmetry&quot; specifically ends with &quot;try&quot; like &quot;geometry.&quot;</p>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
        <h2 className="text-2xl font-bold mb-4 text-teal-900">Word Definitions Summary</h2>
        <p className="text-lg md:text-xl text-teal-800 leading-relaxed">Word Definition Rule: <strong>Symmetry</strong> is the correct spelling with &quot;try&quot;: s-y-m-m-e-t-r-y. &quot;Symmetry&quot; is a word of Greek origin meaning the quality of being made up of exactly similar parts facing each other or around an axis. The incorrect spelling &quot;symetry&quot; is not a recognized English word and should never be used. Always use &quot;symmetry&quot; when referring to balanced proportions, correspondence, or mathematical harmony.</p>
      </div>
    </div>
  )
} 