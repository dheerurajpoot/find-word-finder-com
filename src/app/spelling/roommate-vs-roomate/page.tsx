import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Roommate vs Roomate - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;roommate&quot; and &quot;roomate&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RoommateVsRoomatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Roommate vs Roomate
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-teal-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Roommate&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Roomate&quot; is always incorrect - remember to double the &quot;m&quot; in &quot;roommate&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Roomate</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Roommate</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person who shares a room.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Room&quot; (Base Noun)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;enclosed space&quot;</li>
                <li>• Ends with single &quot;m&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for living space</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Roommate&quot; (Compound)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;room + mate&quot;</li>
                <li>• Combine two words</li>
                <li>• Keep double &quot;m&quot;</li>
                <li>• Used for person sharing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Spelling Rule</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Double the &quot;m&quot;</li>
                <li>• When combining words</li>
                <li>• Keep original spelling</li>
                <li>• Follow compound rule</li>
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
                <p className="text-lg text-green-800">&quot;My <strong>roommate</strong> is very tidy.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I need a new <strong>roommate</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;My <strong>roommate</strong> cooks dinner.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We are good <strong>roommates</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;My <strong>roomate</strong> is very tidy&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roommate&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I need a new <strong>roomate</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roommate&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;My <strong>roomate</strong> cooks dinner&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roommate&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We are good <strong>roomates</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roommates&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Compound Word</h3>
              <p className="text-yellow-800">Room + mate = roommate</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Think Double</h3>
              <p className="text-teal-800">Room + mate = double m</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;roommate&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>College roommate</strong> - university housemate</li>
                <li>• <strong>Good roommate</strong> - compatible housemate</li>
                <li>• <strong>Bad roommate</strong> - difficult housemate</li>
                <li>• <strong>Former roommate</strong> - previous housemate</li>
                <li>• <strong>Potential roommate</strong> - possible housemate</li>
                <li>• <strong>Roommate agreement</strong> - living contract</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The roommate is quiet&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Roommates share expenses&quot;</li>
                <li>• <strong>Object:</strong> &quot;I found a roommate&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;My roommate&apos;s schedule&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple roommates&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Roommate-matching service&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Why do people drop one &quot;m&quot; in &quot;roommate&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding that &quot;roommate&quot; is a compound word combining &quot;room&quot; and &quot;mate.&quot; When combining these words, both &quot;m&quot;s are preserved, creating the double &quot;m&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;roommate&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Roommate&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the compound word rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: When combining two words to form a compound, you typically keep the original spelling of both parts. In &quot;roommate,&quot; both &quot;room&quot; and &quot;mate&quot; retain their original spellings, including the double &quot;m.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;roommate&quot; is spelled the same way across all English-speaking regions. The spelling &quot;roomate&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of it as two separate words combined: &quot;room&quot; + &quot;mate&quot; = &quot;roommate.&quot; Both words keep their original spelling, so the double &quot;m&quot; is preserved. Remember: &quot;ROOM + MATE = ROOMMATE.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;roommate&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: housemate, flatmate, bunkmate, dormmate, and when used more broadly: cohabitant, housemate, and living companion.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;roommate&quot; refer to non-human things?</h3>
              <p className="text-lg text-gray-700">A: While &quot;roommate&quot; typically refers to people, it can be used metaphorically or humorously to refer to objects or animals that share a space. However, this usage is informal and creative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;roommate&quot; and &quot;housemate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roommate&quot; specifically refers to someone who shares the same room, while &quot;housemate&quot; refers to someone who shares the same house or apartment but may have separate rooms.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Do all compound words follow this rule?</h3>
              <p className="text-lg text-gray-700">A: Most compound words preserve the original spelling of their component parts, but there are exceptions. Some compounds may have slight modifications for pronunciation or clarity, but &quot;roommate&quot; follows the standard pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;roommate&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roommate&quot; is a relatively modern compound word, combining &quot;room&quot; (from Old English &quot;rum&quot;) and &quot;mate&quot; (from Middle Low German &quot;mate&quot;). It first appeared in American English in the early 20th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;roommate&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;roommate&quot; is strictly a noun. You cannot say &quot;I roommate with someone.&quot; Instead, you would say &quot;I share a room with someone&quot; or &quot;I live with someone.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Roommate&quot;</strong> combines &quot;room&quot; + &quot;mate.&quot;
          <br />
          <strong>&quot;Roomate&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ROOM + MATE = ROOMMATE&quot;</p>
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
            <li><a href="/spelling/roofs-vs-roofes" className="hover:text-blue-600 underline">Roofs vs Roofes</a></li>
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-blue-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-blue-600 underline">Roller vs Rooler</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rivalry-vs-rivarly" className="hover:text-green-600 underline">Rivalry vs Rivarly</a></li>
            <li><a href="/spelling/roguish-vs-rogueish" className="hover:text-green-600 underline">Roguish vs Rogueish</a></li>
            <li><a href="/spelling/roommate-vs-romate" className="hover:text-green-600 underline">Roommate vs Romate</a></li>
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
