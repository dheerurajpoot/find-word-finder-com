import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rivalry vs Rivarly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rivalry&quot; and &quot;rivarly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RivalryVsRivarlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Rivalry vs Rivarly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rivalry&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rivarly&quot; is always incorrect - remember to include the &quot;r&quot; in &quot;rivalry&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rivarly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rivalry</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;competition between rivals&quot; or &quot;antagonistic relationship.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Rival&quot; (Base)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Noun meaning competitor</li>
                <li>• Starts the word</li>
                <li>• Must be included</li>
                <li>• Cannot be dropped</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Rivalry&quot; (Complete)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;competition&quot;</li>
                <li>• Contains &quot;ry&quot; suffix</li>
                <li>• Complete word form</li>
                <li>• Used for description</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Common Mistake</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• People drop the &quot;r&quot;</li>
                <li>• &quot;Rivarly&quot; is incomplete</li>
                <li>• Missing consonant sound</li>
                <li>• Always include &quot;r&quot;</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>rivalry</strong> between teams was intense.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Their <strong>rivalry</strong> goes back years.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>rivalry</strong> fueled their success.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Friendly <strong>rivalry</strong> is healthy.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rivarly</strong> between teams was intense&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rivalry&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Their <strong>rivarly</strong> goes back years&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rivalry&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rivarly</strong> fueled their success&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rivalry&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Friendly <strong>rivarly</strong> is healthy&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rivalry&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Complete Word</h3>
              <p className="text-yellow-800">Never drop the &quot;r&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Complete</h3>
              <p className="text-orange-800">Rivalry = complete word</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Write It Out</h3>
              <p className="text-amber-800">Practice writing &quot;rivalry&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Proofread</h3>
              <p className="text-yellow-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Friendly rivalry</strong> - good-natured competition</li>
                <li>• <strong>Intense rivalry</strong> - fierce competition</li>
                <li>• <strong>Long-standing rivalry</strong> - enduring competition</li>
                <li>• <strong>Sports rivalry</strong> - athletic competition</li>
                <li>• <strong>Business rivalry</strong> - corporate competition</li>
                <li>• <strong>Academic rivalry</strong> - scholarly competition</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rivalry is intense&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Rivalry drives innovation&quot;</li>
                <li>• <strong>Object:</strong> &quot;They enjoy the rivalry&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Rivalries&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Rivalry&apos;s intensity&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Rivalrous&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rivarly&quot; instead of &quot;rivalry&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding that &quot;rivalry&quot; contains the &quot;r&quot; consonant sound. People may accidentally drop the &quot;r&quot; when writing quickly, creating the incomplete &quot;rivarly&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rivalry&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rivalry&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the consonant sound rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The word &quot;rivalry&quot; contains the &quot;r&quot; consonant sound, which must be preserved in the spelling. When writing the word, the complete pronunciation including the &quot;r&quot; sound should be maintained.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rivalry&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rivarly&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the complete word: &quot;Rivalry&quot; contains the &quot;r&quot; sound, and this must be preserved in the spelling. Remember: &quot;RIVALRY&quot; includes the &quot;R&quot; - don&apos;t drop any letters.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;rivalry&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: competition, contention, antagonism, conflict, opposition, feud, enmity, and when used positively: friendly competition, healthy competition, or spirited contest.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;rivalry&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rivalry&quot; is often used metaphorically to describe any competitive relationship, whether between people, companies, ideas, or even abstract concepts. It can describe both friendly and hostile competition.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;rivalry&quot; and &quot;rivarly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rivalry&quot; is the correct English word meaning &quot;competition between rivals&quot; or &quot;antagonistic relationship,&quot; while &quot;rivarly&quot; is an incorrect spelling that doesn&apos;t exist in English. The &quot;r&quot; sound is essential.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Do all words with &quot;r&quot; follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Most words maintain their consonant sounds in spelling. The &quot;r&quot; in &quot;rivalry&quot; is part of the word&apos;s pronunciation and must be preserved. This applies to most English words with similar consonant patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;rivalry&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rivalry&quot; comes from the word &quot;rival,&quot; which has Latin origins meaning &quot;one who uses the same stream&quot; (from &quot;rivus&quot; meaning stream). The suffix &quot;-ry&quot; was added to create a noun meaning the state or condition of being rivals.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;rivalry&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: While &quot;rivalry&quot; is a noun, the verb form would be &quot;to rival&quot; (meaning to compete with or match). &quot;Rivalry&quot; describes the competitive relationship itself, not the action of competing.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rivalry&quot;</strong> includes the &quot;r&quot; sound.
          <br />
          <strong>&quot;Rivarly&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RIVALRY&quot; includes the &quot;R&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rotten-vs-roten" className="hover:text-blue-600 underline">Rotten vs Roten</a></li>
            <li><a href="/spelling/rose-vs-rised" className="hover:text-blue-600 underline">Rose vs Rised</a></li>
            <li><a href="/spelling/roommate-vs-roomate" className="hover:text-blue-600 underline">Roommate vs Roomate</a></li>
            <li><a href="/spelling/roommate-vs-romate" className="hover:text-blue-600 underline">Roommate vs Romate</a></li>
            <li><a href="/spelling/roofs-vs-roofes" className="hover:text-blue-600 underline">Roofs vs Roofes</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-green-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-green-600 underline">Roller vs Rooler</a></li>
            <li><a href="/spelling/roguish-vs-rogueish" className="hover:text-green-600 underline">Roguish vs Rogueish</a></li>
            <li><a href="/spelling/roofs-vs-rofs" className="hover:text-green-600 underline">Roofs vs Rofs</a></li>
            <li><a href="/spelling/running-vs-runing" className="hover:text-green-600 underline">Running vs Runing</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/affect-vs-effect" className="hover:text-purple-600 underline">Affect vs Effect</a></li>
            <li><a href="/confusing-words/further-vs-farther" className="hover:text-purple-600 underline">Further vs Farther</a></li>
            <li><a href="/confusing-words/who-vs-whom" className="hover:text-purple-600 underline">Who vs Whom</a></li>
            <li><a href="/confusing-words/to-vs-too" className="hover:text-purple-600 underline">To vs Too</a></li>
            <li><a href="/confusing-words/bear-vs-bare" className="hover:text-purple-600 underline">Bear vs Bare</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
