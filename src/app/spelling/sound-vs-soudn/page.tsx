import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sound vs Soudn - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sound&quot; and &quot;soudn&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SoundVsSoudnPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Sound vs Soudn
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
            <span className="text-2xl mr-3">🔊</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Sound&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Soudn&quot; is always incorrect - remember the &quot;ou&quot; sound in &quot;sound&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Soudn</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Sound</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;vibrations that travel through air and can be heard.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;S&quot; (Start)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• First letter</li>
                <li>• Consonant sound</li>
                <li>• Always present</li>
                <li>• Clear beginning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Ou&quot; (Vowel Team)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Creates &quot;ow&quot; sound</li>
                <li>• Common in English</li>
                <li>• Part of root word</li>
                <li>• Must be preserved</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Nd&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Final consonants</li>
                <li>• Clear ending</li>
                <li>• Standard English</li>
                <li>• Complete word</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">✅ Correct: &quot;Sound&quot;</h3>
              <div className="space-y-3">
                <p className="text-blue-800"><strong>•</strong> &quot;The sound was loud.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;I heard a strange sound.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;Sound travels through air.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;The music has a beautiful sound.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Soudn&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;The soudn was loud&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;I heard a strange soudn&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Soudn travels through air&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The music has a beautiful soudn&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">OU Sound Rule</h3>
              <p className="text-yellow-800">&quot;Sound&quot; has &quot;ou&quot; like &quot;round&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Audio</h3>
              <p className="text-blue-800">&quot;Sound&quot; = what you hear</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sound&quot; to build muscle memory</p>
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;sound&quot; as &quot;soudn&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled with &quot;ou&quot; and &quot;dn&quot; instead of &quot;ou&quot; and &quot;nd&quot;, leading to the incorrect &quot;soudn.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;sound&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sound&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;sound&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sound&quot; comes from Old English &quot;sund&quot; meaning &quot;swimming&quot; or &quot;sea,&quot; and later developed to mean &quot;noise&quot; or &quot;tone.&quot; The &quot;ou&quot; spelling developed to represent the vowel sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sound&quot; is spelled the same way across all English-speaking regions. The spelling &quot;soudn&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of related words like &quot;round&quot;, &quot;found&quot;, and &quot;sound&quot; - they all use the &quot;ou&quot; spelling for the vowel sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;sound&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: noise, tone, audio, resonance, vibration, echo, and acoustics.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;sound&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sound&quot; can refer to audio, noise, tone, and even metaphorical uses like &quot;sound advice&quot; or &quot;sound reasoning&quot; meaning solid or reliable.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;sound&quot; and &quot;noise&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to what we hear, &quot;sound&quot; is more neutral and can be pleasant or unpleasant, while &quot;noise&quot; typically implies unwanted or unpleasant sounds.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;sound&quot; countable or uncountable?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sound&quot; can be both countable and uncountable. You can say &quot;I heard a sound&quot; (countable) or &quot;Sound travels through air&quot; (uncountable, referring to the concept).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common sound types?</h3>
              <p className="text-lg text-gray-700">A: Common sound types include musical sounds, environmental sounds, mechanical sounds, human sounds, animal sounds, and electronic sounds.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sound&quot;</strong> has &quot;ou&quot; for the vowel sound. 
          <br />
          <strong>&quot;Soudn&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;S + OU + ND = SOUND&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>
    </div>
  )
}
