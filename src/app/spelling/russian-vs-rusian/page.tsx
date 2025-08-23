import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Russian vs Rusian - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;Russian&quot; and &quot;Rusian&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RussianVsRusianPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Russian vs Rusian
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Russian&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rusian&quot; is always incorrect - remember the double &quot;s&quot; in &quot;Russian&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rusian</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Russian</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;relating to Russia&quot; or &quot;a person from Russia.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Russia&quot; (Country)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Country name</li>
                <li>• Has double &quot;s&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for the nation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Russian&quot; (Adjective/Noun)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Means &quot;from Russia&quot;</li>
                <li>• Add &quot;n&quot; to &quot;Russia&quot;</li>
                <li>• Keeps double &quot;s&quot;</li>
                <li>• Describes origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Common Mistake</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• People drop one &quot;s&quot;</li>
                <li>• &quot;Rusian&quot; is never correct</li>
                <li>• Always keep double &quot;s&quot;</li>
                <li>• Follow the country name</li>
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
                <p className="text-lg text-green-800">&quot;She speaks <strong>Russian</strong> fluently.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>Russian</strong> ballet is famous.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He is a <strong>Russian</strong> citizen.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I love <strong>Russian</strong> literature.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She speaks <strong>Rusian</strong> fluently&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Russian&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>Rusian</strong> ballet is famous&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Russian&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He is a <strong>Rusian</strong> citizen&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Russian&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I love <strong>Rusian</strong> literature&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;Russian&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double S Rule</h3>
              <p className="text-yellow-800">Russia has double &quot;s&quot; - keep it in Russian!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Country</h3>
              <p className="text-blue-800">Russia + n = Russian (not Rusian)</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;Russian&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Russian language</strong> - the Slavic language</li>
                <li>• <strong>Russian culture</strong> - cultural traditions</li>
                <li>• <strong>Russian history</strong> - historical events</li>
                <li>• <strong>Russian cuisine</strong> - traditional food</li>
                <li>• <strong>Russian literature</strong> - literary works</li>
                <li>• <strong>Russian art</strong> - artistic traditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;Russian food&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The Russian spoke&quot;</li>
                <li>• <strong>Proper noun:</strong> &quot;Russian Federation&quot;</li>
                <li>• <strong>Language:</strong> &quot;I study Russian&quot;</li>
                <li>• <strong>Origin:</strong> &quot;Russian descent&quot;</li>
                <li>• <strong>Nationality:</strong> &quot;Russian citizen&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people drop one &quot;s&quot; in &quot;Russian&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the fact that many English words have single consonants, and people may not realize that &quot;Russian&quot; comes from the country name &quot;Russia&quot; which has double &quot;s.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;Russian&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Russian&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;Russian&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Russian&quot; comes from the country name &quot;Russia,&quot; which originates from the medieval state of Rus. The word follows the standard English pattern of adding &quot;n&quot; to country names.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;Russian&quot; is spelled the same way across all English-speaking regions. The spelling &quot;Rusian&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the country name &quot;Russia&quot; first, then add &quot;n.&quot; The double &quot;s&quot; is part of the base word and should be preserved. Remember: &quot;Russia&quot; + &quot;n&quot; = &quot;Russian.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;Russian&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: Muscovite, Slav, Eastern European, and when referring to language: Russki (informal).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;Russian&quot; be used for other Slavic countries?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;Russian&quot; specifically refers to Russia and its people. Other Slavic countries have their own demonyms, such as Polish, Czech, Ukrainian, etc.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;Russian&quot; and &quot;Russia&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Russia&quot; is the country name (noun), while &quot;Russian&quot; is the adjective describing things from Russia or the noun for a person from Russia.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;Russian&quot; always capitalized?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Russian&quot; is always capitalized because it&apos;s derived from a proper noun (Russia). This applies to all nationality and language adjectives in English.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Russian&quot;</strong> has double &quot;s&quot; from &quot;Russia.&quot; 
          <br />
          <strong>&quot;Rusian&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RUSSIA + N = RUSSIAN&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-blue-600 underline">Sanitary vs Sanatary</a></li>
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-blue-600 underline">Sank vs Sinked</a></li>
            <li><a href="/spelling/satellite-vs-sattellite" className="hover:text-blue-600 underline">Satellite vs Sattellite</a></li>
            <li><a href="/spelling/satirically-vs-satrically" className="hover:text-blue-600 underline">Satirically vs Satrically</a></li>
            <li><a href="/spelling/satirize-vs-saturize" className="hover:text-blue-600 underline">Satirize vs Saturize</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/running-vs-runing" className="hover:text-green-600 underline">Running vs Runing</a></li>
            <li><a href="/spelling/runner-vs-runer" className="hover:text-green-600 underline">Runner vs Runer</a></li>
            <li><a href="/spelling/run-vs-runned" className="hover:text-green-600 underline">Run vs Runned</a></li>
            <li><a href="/spelling/ruler-vs-ruller" className="hover:text-green-600 underline">Ruler vs Ruller</a></li>
            <li><a href="/spelling/rugged-vs-ruged" className="hover:text-green-600 underline">Rugged vs Ruged</a></li>
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
