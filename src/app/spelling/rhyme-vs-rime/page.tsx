import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rhyme vs Rime - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rhyme&quot; and &quot;rime&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RhymeVsRimePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Rhyme vs Rime
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rhyme&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rime&quot; is always incorrect - remember to start with &quot;rh&quot; and include the silent &quot;h&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rime</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the silent &quot;h&quot; after &quot;r.&quot; It&apos;s never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rhyme</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;correspondence of sound between words or the endings of words.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Rh&quot; (Correct Start)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Starts with &quot;rh&quot;</li>
                <li>• Silent &quot;h&quot;</li>
                <li>• Must be included</li>
                <li>• Cannot be &quot;r&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Rhyme&quot; (Complete)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;correspondence of sound&quot;</li>
                <li>• Contains silent &quot;h&quot;</li>
                <li>• Complete word form</li>
                <li>• Used in poetry/music</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Missing Letter</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• Missing &quot;h&quot; after &quot;r&quot;</li>
                <li>• &quot;Rime&quot; is incomplete</li>
                <li>• Wrong start: &quot;r&quot;</li>
                <li>• Always use &quot;rh&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The words &apos;cat&apos; and &apos;hat&apos; <strong>rhyme</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She wrote a beautiful <strong>rhyme</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The poem has perfect <strong>rhyme</strong> and meter.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He has a talent for <strong>rhyme</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The words &apos;cat&apos; and &apos;hat&apos; <strong>rime</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhyme&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She wrote a beautiful <strong>rime</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhyme&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The poem has perfect <strong>rime</strong> and meter&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhyme&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has a talent for <strong>rime</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhyme&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Start Right</h3>
              <p className="text-yellow-800">Use &quot;rh&quot; not &quot;r&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Silent</h3>
              <p className="text-purple-800">Remember the silent &quot;h&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Write It Out</h3>
              <p className="text-violet-800">Practice writing &quot;rhyme&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Rhyme scheme</strong> - pattern of rhymes</li>
                <li>• <strong>Internal rhyme</strong> - rhyme within lines</li>
                <li>• <strong>End rhyme</strong> - rhyme at line endings</li>
                <li>• <strong>Slant rhyme</strong> - approximate rhyme</li>
                <li>• <strong>Rhyme time</strong> - rhyming activity</li>
                <li>• <strong>Rhyme dictionary</strong> - rhyming reference</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rhyme is perfect&quot;</li>
                <li>• <strong>Verb:</strong> &quot;These words rhyme&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Rhyme is important&quot;</li>
                <li>• <strong>Object:</strong> &quot;I love the rhyme&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Rhyming&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Rhythmically&quot;</li>
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
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rime&quot; instead of &quot;rhyme&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from dropping the silent &quot;h&quot; after &quot;r.&quot; People may incorrectly write &quot;rime&quot; instead of the correct &quot;rhyme,&quot; missing the silent &quot;h&quot; that must be included.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rhyme&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rhyme&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling and is commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What is the error in &quot;rime&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rime&quot; is missing the silent &quot;h&quot; after &quot;r.&quot; The correct spelling is &quot;rhyme&quot; with the proper &quot;rh&quot; beginning, not just &quot;r.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rhyme&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rime&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word structure: &quot;rh&quot; (with silent h) + &quot;yme.&quot; So &quot;rh&quot; + &quot;yme&quot; = &quot;rhyme.&quot; Remember the silent &quot;h&quot; after &quot;r.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;rhyme&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: verse, poetry, meter, cadence, rhythm, and when used as a verb: correspond, match, or harmonize.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;rhyme&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rhyme&quot; is often used metaphorically to describe harmony, correspondence, or things that go well together, beyond just poetry and music.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;rhyme&quot; and &quot;rime&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rhyme&quot; is the correct English word meaning &quot;correspondence of sound between words,&quot; while &quot;rime&quot; is an incorrect spelling missing the silent &quot;h&quot; that doesn&apos;t exist in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do all words with &quot;rh&quot; follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Many words starting with &quot;rh&quot; follow similar patterns, but each word has its own specific spelling. The key is to learn each word individually and use the correct beginning letters.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;rhyme&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rhyme&quot; comes from the Old French word &quot;rime,&quot; which meant &quot;verse.&quot; The English word maintains the &quot;rh&quot; beginning pattern common in Greek-derived words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;rhyme&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: While &quot;rhyme&quot; is primarily a noun and verb, the adjective form would be &quot;rhyming&quot; (as in &quot;rhyming words&quot;). &quot;Rhyme&quot; itself describes the concept, not a quality.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rhyme&quot;</strong> starts with &quot;rh&quot; and includes the silent &quot;h.&quot;
          <br />
          <strong>&quot;Rime&quot;</strong> is missing the &quot;h&quot; and is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RH&quot; + &quot;YME&quot; = &quot;RHYME&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rheumatism-vs-rhuematism" className="hover:text-blue-600 underline">Rheumatism vs Rhuematism</a></li>
            <li><a href="/spelling/rheumatism-vs-rheumitism" className="hover:text-blue-600 underline">Rheumatism vs Rheumitism</a></li>
            <li><a href="/spelling/rheumatism-vs-rheumatisim" className="hover:text-blue-600 underline">Rheumatism vs Rheumatisim</a></li>
            <li><a href="/spelling/rhetoric-vs-rethoric" className="hover:text-blue-600 underline">Rhetoric vs Rethoric</a></li>
            <li><a href="/spelling/revised-vs-revized" className="hover:text-blue-600 underline">Revised vs Revized</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rhyme-vs-ryme" className="hover:text-green-600 underline">Rhyme vs Ryme</a></li>
            <li><a href="/spelling/rhythm-vs-rythym" className="hover:text-green-600 underline">Rhythm vs Rythym</a></li>
            <li><a href="/spelling/rhythm-vs-rythum" className="hover:text-green-600 underline">Rhythm vs Rythum</a></li>
            <li><a href="/spelling/rhythm-vs-rythme" className="hover:text-green-600 underline">Rhythm vs Rythme</a></li>
            <li><a href="/spelling/rhythm-vs-rythm" className="hover:text-green-600 underline">Rhythm vs Rythm</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/accept-vs-except" className="hover:text-purple-600 underline">Accept vs Except</a></li>
            <li><a href="/confusing-words/advice-vs-advise" className="hover:text-purple-600 underline">Advice vs Advise</a></li>
            <li><a href="/confusing-words/allusion-vs-illusion" className="hover:text-purple-600 underline">Allusion vs Illusion</a></li>
            <li><a href="/confusing-words/altar-vs-alter" className="hover:text-purple-600 underline">Altar vs Alter</a></li>
            <li><a href="/confusing-words/amoral-vs-immoral" className="hover:text-purple-600 underline">Amoral vs Immoral</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
